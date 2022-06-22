import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: '9lz37i6k',
  dataset: 'production',
  apiVersion: '2022-06-22', // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
})