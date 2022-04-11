import Image from "next/image"
import bannerImg from "../../../../public/images/banner.png"

export default function Intro() {
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
      <p className="text-gray-200 ">
        Je suis un jeune développeur web et mobile français qui passe du temps à faire <a className="link" href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">du contenu</a> et <a className="link" href="https://devs.coffee">des projets</a> sur mon temps libre ! J&apos;ai récemment appris le développement mobile, et je me spécialise dans le développement front-end en explorant les tests, l&apos;architecture et autre. Mon prochain objectif est de devenir plus polyvalent en maitrisant aussi le développement back-end.
      </p>
    </section>
  )
}