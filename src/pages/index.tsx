import Head from "next/head"
import Contact from "../components/pages/Contact/Contact"
import History from "../components/pages/History/History"
import Intro from "../components/pages/Intro/Intro"
import Projects from "../components/pages/Projects/Projects"
import SocialNetworks from "../components/pages/SocialNetworks/SocialNetworks"
import Technologies from "../components/pages/Technologies/Technologies"

export default function Home() {
  return (
    <>
      <Head>
        {/* METADATA */}
        <title>Mathis Barré, développeur web</title>
        <meta name="description" content="Personnal website of Mathis Barré, React and React Native developer." />

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="container max-w-3xl px-4 pt-4 pb-16 mx-auto sm:pt-16 sm:px-6">
        <Intro />
        <Projects />
        <History />
        <Technologies />
        <SocialNetworks />
        <Contact />
      </main>
    </>
  )
}