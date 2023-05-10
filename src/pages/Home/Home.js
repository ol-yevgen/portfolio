import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLetterizeText, useStartTextAnimation, } from '../../hooks/useLetterizeText';

const Home = () => {
    const { pageLoaded, textRef, scope } = useStartTextAnimation()

    const spellingTitle = useLetterizeText("Hi, I'm Yevgenii, web developer");

    return (
        <section
            className='container home'
        >
            <div className={pageLoaded ? 'show' : 'hide'}
                ref={textRef}>
                <AnimatePresence>
                    <h1
                        className="home-text"
                        aria-label="Hi, I'm Yevgenii, web developer"
                        ref={scope}
                    >
                        {spellingTitle}
                    </h1>
                </AnimatePresence>
            </div>
            <p className="tag-p">
                Front-end developer
            </p>
            <Link
                className="btn"
                to="/contacts"
            >
                Contact me
            </Link>
        </section>
    )
}

export default Home;