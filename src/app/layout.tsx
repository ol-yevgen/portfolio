import { QueryClientProvider } from '@/providers/QueryClientProvider'
import { sofiaPro, laBelleAurore } from '../../public/fonts/fonts'
import { BurgerProvider } from '@/providers/BurgerProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Spinner from '@/components/ui/Spinner/Spinner'
import { Analytics } from '@vercel/analytics/react';
import Menu from '@/components/layouts/Menu/Menu'
import type { Metadata } from 'next'
import './styles/globals.scss'
import GoogleAnalytics from '@/components/GoogleAnalytics'
// import './styles/gpt.scss'

export const metadata: Metadata = {
    title: 'Portfolio Oliinyk Yevgenii',
    description: 'Welcome to my portfolio, showcasing my skills and projects as a junior front-end developer. Browse my work and get in touch to discuss collaboration opportunities.',
    icons: {
        icon: ['/favicon.ico']
    }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${sofiaPro.className} ${laBelleAurore.variable}`}>
                <GoogleAnalytics GA_TRACKING_ID={GA_MEASUREMENT_ID} />
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
                                    <Analytics />
                                </main>
                                <Footer />
                            </div>
                        </div>

                    </BurgerProvider>
                </QueryClientProvider>
                <SpeedInsights/>
            </body>
        </html >
    )
}
