import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        {/* METADATA */}
        <title>Mathis Barré, web developer</title>
        <meta name="description" content="French guy who mainly does front-end web development." />

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="container max-w-3xl px-4 py-16 mx-auto sm:px-6">
        <h1 className="text-2xl font-bold sm:text-4xl">Hey, I'm Mathis Barré <img className="align-baseline h-7 sm:h-9 hand-animation" src="/images/emoji/waving-hand-flip.png" alt="" /></h1>
        <p className="text-gray-200">I'm glad to see you here ! Take a cup of coffee ☕ and make a tour !</p>

        <h2 className="mt-12 mb-2 text-xl font-bold sm:text-3xl">Who am I ?</h2>
        <p className="text-gray-200">I am a french guy who mainly does front-end web development. I also occasionally try to teach what I know by making videos on my <a className="text-pink-500 animated-underline" href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">YouTube channel</a>. On the side, I'm currently trying to grow <a className="text-pink-500 animated-underline" href="https://devs.coffee">devs.coffee</a> where I write some blog posts.</p>

        <h2 className="mt-12 mb-2 text-xl font-bold sm:text-3xl">The three projects I'm the most proud of.</h2>
        <a href="https://devs.coffee" target="_blank" rel="noreferrer noopener" className="block mb-2 group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">☕ devs.coffee</h3>
            <p>A website that aim to support students in web development until they find a job.</p>
          </section>
        </a>
        <a href="https://arnodva.com" target="_blank" rel="noreferrer noopener" className="block mb-2 group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">🤖 Arnodva</h3>
            <p>I migrated Wix website to a Next.js website with built-in internationnalization.</p>
          </section>
        </a>
        <a href="https://orinoco-v2.mathisbarre.com" target="_blank" rel="noreferrer noopener" className="block group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">🛒 Orinoco</h3>
            <p>The MVP of an e-commerce website (school project).</p>
          </section>
        </a>

        <h2 className="mt-12 mb-2 text-xl font-bold sm:text-3xl">What are the technologies I'm good with ?</h2>
        <p className="mb-2 text-gray-200">
          I do love working with <span className="font-bold text-pink-500">tailwindcss</span>, <span className="font-bold text-pink-500">React</span> and <span className="font-bold text-pink-500">Next.js</span> when I'm doing front-end web development. But I also learned <span className="font-bold text-pink-500">Vue.js</span> during my internship at Lion Coach. I do use <span className="font-bold text-pink-500">TypeScript</span> with long-term projects.
        </p>

        <p className="mb-2 text-gray-200">
          On the back-end development side, I know <span className="font-bold text-pink-500">Express.js</span> but I prefer <span className="font-bold text-pink-500">Fastify</span> with <span className="font-bold text-pink-500">Prisma ORM</span> and <span className="font-bold text-pink-500">MySQL</span>. I do know basic usage of SQL and NoSQL database.
        </p>

        <p className="text-gray-200">
          I don't do mobile development for now but I plan to learn <span className="font-bold text-pink-500">React Native</span>, <span className="font-bold text-pink-500">Flutter</span> or <span className="font-bold text-pink-500">Ionic</span> with <span className="font-bold text-pink-500">Capacitor</span>.
        </p>

        <section>
          <h2 className="mt-12 mb-2 text-xl font-bold sm:text-3xl">Join me on</h2>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            <a href="https://github.com/MathisBarre">
              <div className="duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 hover:bg-[#181717] hover:border-none"><Image width="24" height="24" src="/images/icons/github.svg" /></div>
            </a>
            <a href="https://linkedin.com/in/mathis-barre">
              <div className="duration-75 flex items-center justify-center h-16 border text-white fill-current border-gray-600 rounded cursor-pointer hover:bg-[#0A66C2] hover:border-none"><Image width="24" height="24" src="/images/icons/linkedin.svg" className="text-white fill-current" /></div>
            </a>
            <a href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">
              <div className="duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 hover:bg-[#FF0000] hover:border-none"><Image width="24" height="24" src="/images/icons/youtube.svg" /></div>
            </a>
            <a href="https://twitter.com/LeMathisBarre">
              <div className="duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 hover:bg-[#1DA1F2] hover:border-none"><Image width="24" height="24" src="/images/icons/twitter.svg" /></div>
            </a>
            <a href="https://www.twitch.tv/mathisbarre_">
              <div className="duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 hover:bg-[#9146FF] hover:border-none"><Image width="24" height="24" src="/images/icons/twitch.svg" /></div>
            </a>
            <a href="https://www.malt.fr/profile/mathisbarre">
              <div className="duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer hover:bg-gray-800 hover:bg-[#ff5c57] hover:border-none"><Image width="24" height="24" src="/images/icons/malt.svg" /></div>
            </a>
          </div>
        </section>


        <h2 className="flex flex-col flex-wrap items-start mt-12 mb-2 text-xl font-bold md:items-center md:flex-row sm:text-3xl">
          <span>Engage in a discussion</span>
          <span className="block w-4 h-2"></span>
          <span className="relative inline-flex items-center p-1 text-sm font-normal text-green-400 border border-green-400 rounded">
            <span className="inline-block w-2 h-2 ml-1 mr-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="absolute inline-block w-2 h-2 ml-1 mr-2 bg-green-400 rounded-full"></span>
            Available for hire in <span className="ml-1 font-bold"> September 2021</span>
          </span>
        </h2>
        <form action="https://formspree.io/f/xeqvzpnz" method="POST">
          <div className="flex flex-col mb-2">
            <label htmlFor="_replyto" className="font-bold">Your email</label>
            <input type="_replyto" name="_replyto" id="_replyto" className="p-2 text-gray-900 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="font-bold">Your message</label>
            <textarea name="message" id="message" className="p-2 text-gray-900 rounded" rows={6}></textarea>
          </div>
          <input type="submit" value="Send your love letter" className="block w-full p-2 bg-pink-700 rounded cursor-pointer hover:bg-pink-800" />
        </form>
      </main>
    </>
  )
}