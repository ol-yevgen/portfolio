import MotionContainer from "../MotionContainer/MotionContainer";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Logo({ isOpen, setIsOpen }: IProps) {
    return (
        <div className="menu-logo">
            <Link href="/"
                className="menu-logo--link"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MotionContainer initial={{ y: -40 }} delay={3} duration={0.9}>
                    <div className="menu-logo--wrapper">
                        <Image className="menu-logo--icon" src='/assets/Y.png' width={33} height={73} alt="logo"></Image>
                    </div>
                </MotionContainer>
                
                <MotionContainer initial={{ y: -40 }} delay={2} duration={0.9}>
                    <span className="menu-logo--name">Yevgenii</span>
                </MotionContainer>
                <MotionContainer initial={{ y: -40 }} delay={1} duration={0.9}>
                    <span className="menu-logo--text">Web Developer</span>
                </MotionContainer>
            </Link>
        </div>
    )
};
