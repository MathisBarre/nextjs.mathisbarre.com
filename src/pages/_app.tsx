import { useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from "next/head"
import '../styles/globals.css'
import splitbee from '@splitbee/web';

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    })
  }, [])

  return (
    <>
      <Head>
        <meta property="og:image" content="https://mathisbarre.com/images/overview.png" />
        <meta property="twitter:image" content="https://mathisbarre.com/images/overview.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
