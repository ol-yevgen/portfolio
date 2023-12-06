import LetteringText from '@/hooks/useLetterizeText';
import Link from 'next/link';
import './styles/home.scss'
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer';

export const metadata = {
    title: 'Home | Portfolio Oliinyk Yevgenii',
}

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
            <p className="tag-p">
                Front-end developer
            </p>
            <Link
                className="btn"
                href="/contacts"
                style={{ zIndex: 1 }}
            >
                Contact me
            </Link>
        </section>
    )
}

export default Home