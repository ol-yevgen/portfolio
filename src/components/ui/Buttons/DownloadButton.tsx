import { IAboutCVResType } from "@/types/types";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { BASE_API } from '@/helpers/constants'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


interface DownloadPDFProps {
    fileName?: string,
}

const DownloadButton: FC<DownloadPDFProps> = ({ fileName }) => {

    const { data, isLoading, isSuccess, isError: cvIsError, error: cvError } = useQuery({
        queryKey: ['cv'],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API}/api/cv`)
            return data as IAboutCVResType
        },
    })
    
    const downloadFile = () => {
        const byteCharacters = atob(data?.cv.aboutCV as string);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'file.pdf';
        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    return (
        <a href="#" onClick={downloadFile} className="btn about-btn">
            Download CV
        </a>
    );
};

export default DownloadButton;
