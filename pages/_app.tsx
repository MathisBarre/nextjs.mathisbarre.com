import { AppProps } from 'next/app'
import Head from "next/head"
import "tailwindcss/tailwind.css"
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
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
