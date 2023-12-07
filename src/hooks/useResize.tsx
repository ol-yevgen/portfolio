'use client'

import { useState, useEffect } from 'react';
import {
    SCREEN_S,
    SCREEN_SM,
    SCREEN_MD,
    SCREEN_LG,
    SCREEN_L,
    SCREEN_XL,
    SCREEN_XXL,
    SCREEN_XXXL
} from '@/helpers/constants';

export const useResize = () => {
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        setWidth(window.innerWidth)
        
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenS: width as number >= SCREEN_S,
        isScreenSm: width as number >= SCREEN_SM,
        isScreenMd: width as number >= SCREEN_MD,
        isScreenLg: width as number >= SCREEN_LG,
        isScreenL: width as number >= SCREEN_L,
        isScreenXl: width as number >= SCREEN_XL,
        isScreenXxl: width as number >= SCREEN_XXL,
        isScreenXxxl: width as number >= SCREEN_XXXL,
    };
};