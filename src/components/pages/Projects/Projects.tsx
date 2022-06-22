import Link from "next/link"
import { ProjectSummary } from "../../../types/ProjectSummary"

type ProjectsProps = {
  projectsSummary: ProjectSummary[]
}

export default function Projects({projectsSummary}: ProjectsProps) {
  return (
    <section>
      <h2 className="title-section">Un petit aperçu de mes connaissances.</h2>
      {projectsSummary.map((projectSummary) => {
        return (
          <Project key={projectSummary.id} projectSummary={projectSummary} />
        )
      })}
      <Project projectSummary={{
        id: "TAP_AND_GO",
        title: "🚲 TapAndGo",
        description: "Test technique Beapp. Application web de localisation de stations de vélo. Et plus !",
        slug: "https://tapandgo.mathisbarre.com"
      }} />
      <Project projectSummary={{
        id: "DEVS_COFFEE",
        title: "☕ devs.coffee",
        description: "Un compagnon pour ta formation de développeur web.",
        slug: "https://devs.coffee"
      }} />
    </section>
  )
}

interface ProjectProps {
  projectSummary: ProjectSummary
}

function Project({ projectSummary }: ProjectProps) {
  const link = projectSummary.slug.startsWith("http") ? projectSummary.slug : `projets/${projectSummary.slug}`

  return (
    <Link href={link}>
      <a className="block mb-2 group">
        <section className="p-4 duration-75 border border-gray-700 rounded group-hover:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold sm:text-xl">{projectSummary.title}</h3>
          <p>{projectSummary.description}</p>
        </section>
      </a>
    </Link>
  )
}