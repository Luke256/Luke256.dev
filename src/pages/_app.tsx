import type { AppProps } from 'next/app';
import '../styles/global.css'

import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const [show_screen, setShowScreen] = useState(false)

    useEffect(() => {
      setShowScreen(true)
    }, [])

    return (
        <>
          {show_screen ? <>
            <Component {...pageProps} />
          </> : ''}
        </>
    );
}