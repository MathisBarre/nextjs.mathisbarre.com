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
        J&apos;aime construire. Je m&apos;intéresse au développement web,
        front-end et back-end, au développement mobile, au product design, à
        l&apos;UI/UX design, au product discovery, et à tout ce qui touche à la
        création de projets numériques.
      </p>
    </section>
  );
}
