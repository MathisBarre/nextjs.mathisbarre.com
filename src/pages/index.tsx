import Head from "next/head";
import Contact from "../components/pages/Contact/Contact";
import History from "../components/pages/History/History";
import Intro from "../components/pages/Intro/Intro";
import Projects from "../components/pages/Projects/Projects";
import SocialNetworks from "../components/pages/SocialNetworks/SocialNetworks";
import Technologies from "../components/pages/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-x-6 bg-primary-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          <a href="#social">
            <strong className="font-semibold">02 Août 2023</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Je suis actuellement à l&apos;écoute de nouvelles opportunités{""}
            <span className="ml-1" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </p>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <Head>
        {/* METADATA */}
        <title>Mathis Barré, développeur web</title>
        <meta
          name="description"
          content="Personnal website of Mathis Barré, React and React Native developer."
        />

        {/* FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="container max-w-3xl px-4 pt-4 pb-16 mx-auto sm:pt-16 sm:px-6">
        <Intro />
        <History />
        <Technologies />
        <Projects />
        <SocialNetworks />
        {/* <Contact /> */}
      </main>
    </>
  );
}
