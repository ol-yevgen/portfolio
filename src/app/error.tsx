'use client'

import { useRouter } from 'next/navigation'
import LetteringText from '@/hooks/useLetterizeText'
import Button from '@/components/ui/Buttons/Button'
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer'

interface IErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset, }: IErrorProps) {
    
    const title = 'Something went wrong!'
    const router = useRouter()

    return (
        <section className='container'>
            <h2
                className="home-text section-title"
                aria-label={title}
            >
                <LetteringText text={title} isLoaded={true} />
            </h2>

            <div className='container-error'>
                <Button title='Try again' action={() => reset()} classNames='btn-error' />
                <span>or</span>
                <Button title='Go back' action={() => router.back()} classNames='btn-error' />
            </div>
        </section>
    )
}