'use client'

import SectionText from '@/components/SectionText/SectionText';
import LetteringText from '@/hooks/useLetterizeText';
import { IContactsPageTypes } from '@/types/types';
import ContactsForm from '@/components/form/Form';
import { useQuery } from '@tanstack/react-query';
import { BASE_API } from '@/helpers/constants';
import axios from 'axios';
import './contacts.scss'

const Contacts = () => {
    const title = "Contacts"

    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['contactsPage'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${BASE_API}/api/contacts`)
                return data as IContactsPageTypes
            } catch (error) {
                console.log(error);
            }
        },
    })

    return (
        <section
            className="container section-wrapper contacts">
            <div className="section-wrapper--discription">
                <h2 className="discription-title" aria-label={title}>
                    <LetteringText text={title} isLoaded={!isLoading} />
                </h2>
                <SectionText
                    arrayText={data?.contactsText.contactsText as string[]}
                    sectionClass='contacts-text'
                    isLoaded={isLoading}
                />
                <ContactsForm />
            </div>
            <div className="section-wrapper--visual">

            </div>
        </section >
    )
}

export default Contacts;