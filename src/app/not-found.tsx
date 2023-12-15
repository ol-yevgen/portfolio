import Button from "@/components/ui/Buttons/Button"
import PageTransitionContainer from "@/components/ui/PageTransitionContainer/PageTransitionContainer"
import LetteringText from "@/hooks/useLetterizeText"
// import { useRouter } from "next/router"

export default function NotFound() {

    const title = '404 - Page Not Found'
    // const router = useRouter()

    return (
        <PageTransitionContainer>
            <section className='container'>
                <h2
                    className="home-text section-title"
                    aria-label={title}
                >
                    404 - Page Not Found
                    {/* <LetteringText text={title} isLoaded={true} /> */}
                </h2>

                <div className='container-error'>
                    <a href="/skills" className='btn'>Go back to home page</a>
                    {/* <Button
                    title='Go back'
                    action={() => {}}
                    // action={() => router.back()}
                    classNames='btn-error'
                /> */}
                </div>
            </section>
        </PageTransitionContainer>

    )
}