import { ProjectSummary, ProjectSummaryDto } from "../../types/ProjectSummary"
import sanityClient from "../sanityClient"

const query = `*[_type == "project"]{
  _id, 
  description, 
  slug, 
  title
}`

export async function getProjectsSummary(): Promise<ProjectSummary[]> {
  const response: ProjectSummaryDto[] = await sanityClient.fetch(query)

  return response.map((responseItem) => {
    return {
      id: responseItem._id,
      title: responseItem.title,
      description: responseItem.description,
      slug: responseItem.slug.current
    }
  })
}