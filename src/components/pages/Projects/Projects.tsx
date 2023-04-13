import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <h2 className="title-section">Un petit aperçu de mes connaissances.</h2>
      <Project
        link="https://rowing-logbook.mathisbarre.com"
        text="🚣‍♀️ Rowing logbook"
        description="Cahier de sorties numérique pour clubs d'aviron"
      />
      <Project
        link="/projets/groupomania"
        text="🌐 Groupomania"
        description="Dernier projet du parcours développeur web chez Openclassrooms."
      />
      <Project
        link="https://tapandgo.mathisbarre.com"
        text="🚲 TapAndGo"
        description="Test technique Beapp. Application web de localisation de stations de vélo. Et plus !"
      />
    </section>
  );
}

interface ProjectProps {
  link: string;
  text: string;
  description: string;
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
  );
}
