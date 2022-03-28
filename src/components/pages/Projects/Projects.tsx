import Link from "next/link"

export default function Projects() {
  return (
    <section>
      <h2 className="title-section">Un petit aperçu de mes connaissances.</h2>
      <Project link="/projets/groupomania" text="🌐 Groupomania" description='Dernier projets du parcours développeur web chez Openclassrooms.' />
      <Project link="https://github.com/MathisBarre/TapAndGo" text="🚲 TapAndGo" description="Test technique Beapp. Application web de localisation de stations de vélo. Et plus !" />
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