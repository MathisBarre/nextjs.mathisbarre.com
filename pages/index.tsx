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
        <Intro />
        <Projects />
        <Technologies />
        <SocialNetworks />
        <Contact />
      </main>
    </>
  )
}

function Intro() {
  return (
    <section>
      <h1 className="text-2xl font-bold sm:text-4xl">
        Hey, I'm Mathis Barré
        <img className="align-baseline h-7 sm:h-9 hand-animation" src="/images/emoji/waving-hand-flip.png" alt="" />
      </h1>
      <p className="mb-2 text-gray-200">I'm glad to see you here ! Take a cup of coffee ☕ and make a tour !</p>

      <section className="relative inline-flex items-center p-1 text-sm font-normal text-green-400 border border-green-400 rounded">
        <span className="inline-block w-2 h-2 ml-1 mr-2 bg-green-400 rounded-full animate-ping"></span>
        <span className="absolute inline-block w-2 h-2 ml-1 mr-2 bg-green-400 rounded-full"></span>
        Available for hire in <span className="ml-1 font-bold"> September 2021</span>
      </section>

      <h2 className="title-section">Who am I ?</h2>
      <p className="text-gray-200">
        I am a french guy who mainly does front-end web development. I also occasionally try to teach what I know by making videos on my <a className="link" href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">YouTube channel</a>. On the side, I'm currently trying to grow <a className="link" href="https://devs.coffee">devs.coffee</a> where I write some blog posts.
      </p>
    </section>
  )
}

function Projects() {
  return (
    <section>
      <h2 className="title-section">The three projects I'm the most proud of.</h2>
      <Project link="https://devs.coffee" text="☕ devs.coffee" description="A website that aim to support students in web development until they find a job." />
      <Project link="https://arnodva.com" text="🤖 Arnodva" description="I migrated Wix website to a Next.js website with built-in internationnalization." />
      <Project link="https://orinoco-v2.mathisbarre.com" text="🛒 Orinoco" description="The MVP of an e-commerce website (school project)." />
    </section>
  )
}

interface ProjectProps {
  link: string
  text: string
  description: string
}

function Project({ link, text, description }: ProjectProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener" className="block mb-2 group">
      <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
        <h3 className="mb-2 text-lg font-semibold sm:text-xl">{text}</h3>
        <p>{description}</p>
      </section>
    </a>
  )
}

function Technologies() {
  return (
    <section>
      <h2 className="title-section">What are the technologies I'm good with ?</h2>
      <p className="mb-2 text-gray-200">
        I do love working with <span className="bold">tailwindcss</span>, <span className="bold">React</span> and <span className="bold">Next.js</span> when I'm doing front-end web development. But I also learned <span className="bold">Vue.js</span> during my internship at Lion Coach. I do use <span className="bold">TypeScript</span> with long-term projects.
      </p>
      <p className="mb-2 text-gray-200">
        On the back-end development side, I know <span className="bold">Express.js</span> but I prefer <span className="bold">Fastify</span> with <span className="bold">Prisma ORM</span> and <span className="bold">MySQL</span>. I do know basic usage of SQL and NoSQL database.
      </p>
      <p className="text-gray-200">
        I don't do mobile development for now but I plan to learn <span className="bold">React Native</span>, <span className="bold">Flutter</span> or <span className="bold">Ionic</span> with <span className="bold">Capacitor</span>.
      </p>
    </section>
  )
}

function SocialNetworks() {
  return (
    <section>
      <h2 className="title-section">Join me !</h2>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        <SocialNetwork link="https://github.com/MathisBarre" iconUrl="/images/icons/github.svg" hoverClass="hover:bg-[#181717]" />
        <SocialNetwork link="https://linkedin.com/in/mathis-barre" iconUrl="/images/icons/linkedin.svg" hoverClass="hover:bg-[#0A66C2]" />
        <SocialNetwork link="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g" iconUrl="/images/icons/youtube.svg" hoverClass="hover:bg-[#FF0000]" />
        <SocialNetwork link="https://twitter.com/LeMathisBarre" iconUrl="/images/icons/twitter.svg" hoverClass="hover:bg-[#1DA1F2]" />
        <SocialNetwork link="https://www.twitch.tv/mathisbarre_" iconUrl="/images/icons/twitch.svg" hoverClass="hover:bg-[#9146FF]" />
        <SocialNetwork link="https://www.malt.fr/profile/mathisbarre" iconUrl="/images/icons/malt.svg" hoverClass="hover:bg-[#ff5c57]" />
      </div>
    </section>
  )
}

interface SocialNetworkProps {
  link: string
  iconUrl: string
  hoverClass: string
}

function SocialNetwork({ link, iconUrl, hoverClass }: SocialNetworkProps) {
  return (
    <a href={link}>
      <div className={`duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer ${hoverClass} hover:border-none`}><Image width="24" height="24" src={iconUrl} /></div>
    </a>
  )
}

function Contact() {
  return (
    <section>
      <h2 className="flex flex-col flex-wrap items-start md:items-center md:flex-row title-section">
        <span>Let's talk !</span>
        <span className="block w-4 h-2"></span>
      </h2>
      <form action="https://formspree.io/f/xeqvzpnz" method="POST">
        <div className="flex flex-col mb-2">
          <label htmlFor="_replyto" className="mb-1 font-bold">Your email</label>
          <input type="_replyto" name="_replyto" id="_replyto" className="p-2 text-gray-900 rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-1 font-bold">Your message</label>
          <textarea name="message" id="message" className="p-2 text-gray-900 rounded" rows={6}></textarea>
        </div>
        <input type="submit" value="Send your love letter" className="block w-full p-2 bg-pink-700 rounded cursor-pointer hover:bg-pink-800" />
      </form>
    </section>
  )
}