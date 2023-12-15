'use client'

import LetteringText from '@/hooks/useLetterizeText';
import Link from 'next/link';
import './styles/home.scss'
import Button from '@/components/ui/Buttons/Button';
import MotionContainer from '@/components/ui/MotionContainer/MotionContainer';

// export const metadata = {
//     title: 'Home | Portfolio Oliinyk Yevgenii',
// }

function Home() {
    const mainText = "Hi, I'm Yevgenii, web developer"

    return (
        <section
            className='container home'
        >
            <div className='show'>
                <h1
                    className="home-text"
                    aria-label={mainText}
                >
                    <LetteringText text={mainText} isLoaded={true} />
                </h1>
            </div>
            <MotionContainer initial={{ y: 30 }} delay={5} duration={0.9} >
                <p className="tag-p home-subtitle">
                    Front-end developer
                </p>
            </MotionContainer>
            <MotionContainer initial={{ y: 30 }} delay={7} duration={0.9} >
                <Link
                    href="/contacts"
                    style={{ zIndex: 1 }}
                >
                    <Button title='Contact me' action={() => { }} classNames='' />
                </Link>
            </MotionContainer>
        </section>
    )
}

export default Home