import { QueryClientProvider } from '@/providers/QueryClientProvider'
import type { Metadata } from 'next'
import Head from 'next/head'

import Menu from '@/components/layouts/Menu/Menu'
import './styles/globals.scss'
import { BurgerProvider } from '@/providers/BurgerProvider'
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Spinner from '@/components/ui/Spinner/Spinner'
import { Suspense } from 'react'
import PageTransitionContainer from '@/components/ui/PageTransitionContainer/PageTransitionContainer'
import { sofiaPro, laBelleAurore } from '../../public/fonts/fonts'

export const metadata: Metadata = {
    title: 'Portfolio Oliinyk Yevgenii',
    description: 'Welcome to my portfolio, showcasing my skills and projects as a junior front-end developer. Browse my work and get in touch to discuss collaboration opportunities.',
    icons: {
        icon: ['/favicon.ico']
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${sofiaPro.className} ${laBelleAurore.variable}`}>
                <QueryClientProvider>
                    <BurgerProvider>
                        <div className="app">
                            <Menu />
                            <div className='main-page'
                            >
                                <Header />
                                <main
                                    className="animation-container"
                                >
                                    {children}
                                </main>
                                {/* <Suspense fallback={
                                    <Spinner
                                        bg=''
                                        size='100px'
                                        color="#08fdd8"
                                    />}>
                                    
                                </Suspense> */}

                                <Footer />
                            </div>
                        </div>

                    </BurgerProvider>
                </QueryClientProvider>
            </body>
        </html >
    )
}
