import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/global.css'

import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
    const [show_screen, setShowScreen] = useState(false)

    useEffect(() => {
        setShowScreen(true)
    }, [])

    return (
        <>
            {show_screen ?
                <>
                    <DefaultSeo
                        defaultTitle="Luke's Home"
                        description='Student / Programmer'
                        openGraph={{
                            type: "wesite",
                            title: "Luke's Home",
                            description: "Student / Programmer",
                            siteName: "Luke's HomePage",
                            url: "https://luke256.dev",
                            images: [
                                {
                                    url: "https://luke256.dev/FlameSword.png",
                                    alt: "Flame Sword",
                                    type: "image/png"
                                },
                            ],
                        }}
                        twitter={{
                            handle: '@luke02561',
                            cardType: "summary"
                        }}
                    />
                    <Component {...pageProps} />
                    <Analytics />
                </>
                : ''}
        </>
    );
}