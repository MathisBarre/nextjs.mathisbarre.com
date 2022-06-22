export type ProjectSummary = {
  id: string
  title: string
  description: string
  slug: string
}

export type ProjectSummaryDto = {
  _id : string
  title: string
  description: string
  slug: {
    current: string
  }
}