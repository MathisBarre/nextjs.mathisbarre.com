import Image from "next/image";
import bannerImg from "../../../../public/images/banner.png";

export default function Intro() {
  return (
    <section>
      <div className="relative flex items-center justify-center py-16 overflow-hidden rounded">
        <Image
          src={bannerImg}
          layout="fill"
          objectFit="cover"
          className="z-0"
          alt=""
        />
        <h1 className="z-10 flex flex-col text-center">
          <span className="text-2xl font-bold sm:text-4xl">Mathis Barré</span>
          <span className="text-sm sm:text-base opacity-80">
            Développeur TypeScript
          </span>
        </h1>
      </div>

      <h2 className="title-section">Qui suis-je ?</h2>
      <p className="text-gray-200 ">
        Je suis un développeur fullstack (mobile/web/back) typescript français
        passionné par son travail. J&apos;ai commencé à développer en 2016 et je
        n&apos;ai pas arrêté depuis. J&apos;ai travaillé sur de nombreux projets
        personnels et professionnels, ce qui m&apos;a permis d&apos;acquérir
        beaucoup d&apos;expériences. Je suis de nature curieuse, j&apos;aime
        apprendre et tester de nouvelles choses.
      </p>
    </section>
  );
}
