'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface BurgerContextTypes {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const BurgerContext = createContext<BurgerContextTypes>({
    isOpen: false,
    setIsOpen: () => { }
})

export const BurgerProvider = ({ children }: PropsWithChildren<{}>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <BurgerContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </BurgerContext.Provider>
    )
}
