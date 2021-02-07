// IMPORT COMPONENTS ----------------//
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import Contact from "@/components/Contact"
import { GetStaticProps } from "next"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/* <Technologies /> */}
      {/* <Contact /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}