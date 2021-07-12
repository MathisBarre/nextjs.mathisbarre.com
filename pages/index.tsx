import Head from "next/head"

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
      <main className="container max-w-3xl px-6 py-16 mx-auto">
        <h1 className="text-4xl font-bold">Hey, I'm Mathis Barré <img className="align-baseline h-9 hand-animation" src="/images/emoji/waving-hand-flip.png" alt="" /></h1>
        <p className="text-gray-200">I'm glad to see you here ! Take a cup of coffee ☕ and make a tour !</p>

        <h2 className="mt-12 mb-2 text-3xl font-bold">Who am I ?</h2>
        <p className="text-gray-200">I am a french guy who mainly does front-end web development. I also occasionally try to teach what I know by making videos on my <a className="text-pink-500 animated-underline" href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">YouTube channel</a>. On the side, I'm currently trying to grow <a className="text-pink-500 animated-underline" href="https://devs.coffee">devs.coffee</a> where I write some blog posts.</p>

        <h2 className="mt-12 mb-2 text-3xl font-bold">The three projects I'm the most proud of.</h2>
        <a href="https://devs.coffee" target="_blank" rel="noreferrer noopener" className="block mb-2 group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">☕ devs.coffee</h3>
            <p>A website that aim to support students in web development until they find a job.</p>
          </section>
        </a>
        <a href="https://arnodva.com" target="_blank" rel="noreferrer noopener" className="block mb-2 group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">🤖 Arnodva</h3>
            <p>I migrated Wix website to a Next.js website with built-in internationnalization.</p>
          </section>
        </a>
        <a href="https://orinoco-v2.mathisbarre.com" target="_blank" rel="noreferrer noopener" className="block group">
          <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">🛒 Orinoco</h3>
            <p>The MVP of an e-commerce website (school project).</p>
          </section>
        </a>

        <h2 className="mt-12 mb-2 text-3xl font-bold">What are the technologies I'm good with ?</h2>
        <p className="mb-2 text-gray-200">
          I do love working with <span className="font-bold text-pink-500">tailwindcss</span>, <span className="font-bold text-pink-500">React</span> and <span className="font-bold text-pink-500">Next.js</span> when I'm doing front-end web development. But I also learned <span className="font-bold text-pink-500">Vue.js</span> during my internship in Lion Coach. I do use <span className="font-bold text-pink-500">TypeScript</span> with long-term projects.
        </p>

        <p className="mb-2 text-gray-200">
          On the back-end development side, I learned <span className="font-bold text-pink-500">Express.js</span> but I plan to switch to <span className="font-bold text-pink-500">Fastify</span> for low scope development. When I need a more powerfull framework, I use <span className="font-bold text-pink-500">Adonis</span>. I do know basic usage of SQL and NoSQL database.
        </p>

        <p className="text-gray-200">
          I don't do mobile development for now but I plan to learn <span className="font-bold text-pink-500">React Native</span>, <span className="font-bold text-pink-500">Flutter</span> or <span className="font-bold text-pink-500">Ionic</span> with <span className="font-bold text-pink-500">Capacitor</span>.
        </p>

        <h2 className="mt-12 mb-2 text-3xl font-bold">
          <span className="mr-4">Engage in a discussion</span>
          <span className="relative inline-flex items-center p-1 text-sm font-normal text-white text-green-400 transform -translate-y-1 border border-green-400 rounded">
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