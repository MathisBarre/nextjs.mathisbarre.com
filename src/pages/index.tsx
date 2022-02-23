import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import bannerImg from "../../public/images/banner.png"

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

function Intro() {
  return (
    <section>
      <div className="relative flex items-center justify-center py-16 overflow-hidden rounded">
        <Image src={bannerImg} layout="fill" objectFit="cover" className="z-0" alt="" />
        <h1 className="z-10 flex flex-col text-center">
          <span className="text-2xl font-bold sm:text-4xl">Mathis Barré</span>
          <span className="text-sm sm:text-base opacity-80">Développeur React et React Native</span>
        </h1>
      </div>

      <h2 className="title-section">Qui suis-je ?</h2>
      <p className="text-gray-200 text-justify break-words">
        Je suis un jeune développeur web et mobile français qui passe du temps à faire <a className="link" href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">du contenu</a> et <a className="link" href="https://devs.coffee">des projets</a> sur mon temps libre ! J'essaie d'être toujours plus compétent dans ce que je fais. J'ai récemment appris le développement mobile, et je me spécialise dans le développement front-end en explorant des notions tels que les tests et l'architecture. Mon prochain objectif est de devenir plus polyvalent en maitrisant aussi le développement back-end.
      </p>
    </section>
  )
}

function Projects() {
  return (
    <section>
      <h2 className="title-section">Un petit aperçu de mes connaissances.</h2>
      <Project link="/projets/groupomania" text="🌐 Groupomania" description='Dernier projets du parcours développeur web chez Openclassrooms.' />
      <Project link="https://github.com/MathisBarre/TapAndGo" text="🚲 TapAndGo" description="Test technique BeApp. Application web de localisation de stations de vélo. Et plus !" />
      <Project link="https://devs.coffee" text="☕ devs.coffee" description="Un compagnon pour ta formation de développeur web." />
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
    <Link href={link}>
      <a className="block mb-2 group">
        <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold sm:text-xl">{text}</h3>
          <p>{description}</p>
        </section>
      </a>
    </Link>
  )
}

function History() {
  const history = [
    {
      date: "2021-10-18",
      eventName: '📱 Début du CDI en tant que développeur web et mobile chez BeApp'
    },
    {
      date: "2021-08-20",
      eventName: '🎓 Validation du dernier projet de mon parcours Openclassrooms'
    },
    {
      date: "2021-04-05",
      eventName: '✍️ Publication de mon premier article technique'
    },
    {
      date: "2021-01-25",
      eventName: '🎥 Publication de la vidéo la plus vue de ma chaîne !'
    },
    {
      date: "2021-12-15",
      eventName: '☕ Lancement de la première version de devs.coffee'
    },
    {
      date: "2020-08-31",
      eventName: "🦁 Début de l'alternance chez Lion Coach avec Openclassrooms"
    },
    {
      date: "2020-08-23",
      eventName: '🎥 Première vidéo YouTube'
    },
    {
      date: "2020-05-05",
      eventName: '💼 Création de ma micro-entreprise'
    },
    {
      date: "2019-12-14",
      eventName: '🎓 Obtention du certificat Javascript freecodecamp'
    },
    {
      date: "2019-10-09",
      eventName: '💼 Début développement de mon premier projet professionnel'
    },
    {
      date: "2019-09-16",
      eventName: '🎓 Obtention de la certification HTML/CSS freecodecamp'
    },
    {
      date: "2019-08-13",
      eventName: '🎓 Début du bootcamp freecodecamp'
    },
    {
      date: "2017-09-19",
      eventName: '🎓 Premier cours Openclassrooms (Javascript)'
    },
    {
      date: "2016-08-21",
      eventName: '🎓 Premier cours codecademy (HTML)'
    },
  ]

  function parseDate(date: string) {
    return date.split("-").reverse()
  }

  return (
    <section>
      <h2 className="title-section">Mon parcours</h2>

      <ul>
        {history.map((event) => {
          const dateArray = parseDate(event.date)
          return (
            <li className="mb-2">
              <time dateTime={event.date}>
                <span className="dateFragment w-8 mr-1">{dateArray[0]}</span> <span className="dateFragment w-8 mr-1">{dateArray[1]}</span> <span className="dateFragment w-16 mr-2">{dateArray[2]}</span>
              </time>
              <span>{event.eventName}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Technologies() {
  return (
    <section>
      <h2 className="title-section">Quels sont les technologies que je maitrise ?</h2>
      <p className="mb-2 text-gray-200 text-justify break-words">J'adore travailler avec <span className="bold">tailwindcss</span>, <span className="bold">React</span> et <span className="bold">Next.js</span> avec <span className="bold">TypeScript</span> quand je fais du développement front-end. Mais j'ai aussi appris <span className="bold">Vue.js</span> durant mon alternance chez Lion Coach. J'apprends le développement mobile en <span className=" bold">React Native</span> grâce à BeApp, c'est actuellement ce que je fais au quotidien.</p>
      <p className="mb-2 text-gray-200 text-justify break-words">
        Durant mon année d'alternance, j'ai appris les rudiments du back-end. Je connais <span className="bold">express.js</span> mais je préfère <span className="bold">fastify</span> avec <span className="bold">Prisma ORM</span>. J'ai pour objectif moyen terme d'approfondir mes connaissances en back-end <span className="bold">Node.js</span> mais aussi en <span className="bold">PHP</span> avec <span className="bold">Symphony</span>.
      </p>
    </section >
  )
}

function SocialNetworks() {
  return (
    <section className="mt-8">
      <h2 className="title-section">Rejoignez-moi !</h2>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        <SocialNetwork link="https://github.com/MathisBarre" iconUrl="/images/icons/github.svg" hoverClass="hover:bg-[#181717]" alt="GitHub" />
        <SocialNetwork link="https://linkedin.com/in/mathis-barre" iconUrl="/images/icons/linkedin.svg" hoverClass="hover:bg-[#0A66C2]" alt="LinkedIn" />
        <SocialNetwork link="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g" iconUrl="/images/icons/youtube.svg" hoverClass="hover:bg-[#FF0000]" alt="YouTube" />
        <SocialNetwork link="https://twitter.com/LeMathisBarre" iconUrl="/images/icons/twitter.svg" hoverClass="hover:bg-[#1DA1F2]" alt="Twitter" />
        <SocialNetwork link="https://www.twitch.tv/mathisbarre_" iconUrl="/images/icons/twitch.svg" hoverClass="hover:bg-[#9146FF]" alt="Twitch" />
        <SocialNetwork link="https://www.malt.fr/profile/mathisbarre" iconUrl="/images/icons/malt.svg" hoverClass="hover:bg-[#ff5c57]" alt="Malt" />
      </div>

      <div className="flex items-center justify-center h-16 mt-2 border border-gray-600 rounded">
        contact@mathisbarre.com
      </div>
    </section>
  )
}

interface SocialNetworkProps {
  link: string
  iconUrl: string
  hoverClass: string
  alt: string
}

function SocialNetwork({ link, iconUrl, hoverClass, alt }: SocialNetworkProps) {
  return (
    <a href={link}>
      <div className={`duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer ${hoverClass} hover:border-none`}><Image width="24" height="24" src={iconUrl} alt={alt} /></div>
    </a>
  )
}

function Contact() {
  return (
    <section>
      <h2 className="flex flex-col flex-wrap items-start md:items-center md:flex-row title-section">
        <span>Lancer une discussion.</span>
      </h2>

      <form action="https://formspree.io/f/xeqvzpnz" method="POST">
        <div className="flex flex-col mb-2">
          <label htmlFor="_replyto" className="mb-1 font-bold">Adresse e-mail</label>
          <input type="_replyto" name="_replyto" id="_replyto" className="p-2 text-gray-900 rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-1 font-bold">Message</label>
          <textarea name="message" id="message" className="p-2 text-gray-900 rounded" rows={6}></textarea>
        </div>
        <input type="submit" value="Envoyer la lettre d'amour" className="block w-full p-2 rounded cursor-pointer text-primary-700 bg-primary-200 hover:bg-primary-500" />
      </form>
    </section>
  )
}