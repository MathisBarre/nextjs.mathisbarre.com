export default function Projects() {
  return (
    <section className="box-border max-w-5xl px-2 mx-auto">
      <div className="container py-24 mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center">Mes derniers projet<span className="text-primary">.</span></h2>
        <h3 className="mt-8 mb-2 text-xl">En tant que freelance</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            img={{
              url: "./images/projects/arnodva.png",
              alt: "arnodva"
            }}
            link="https://arnodva.com" />
          <Project
            img={{
              url: "./images/projects/BeYou.png",
              alt: "beYou"
            }}
            link="https://beyou-lgbt.fr"
            big
          />
          <Project
            img={{
              url: "./images/projects/isba.png",
              alt: "isba éditions"
            }}
            link="https://isba-editions.com/" />
        </div>
        <h3 className="mt-8 mb-2 text-xl">Side projects</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            img={{
              url: "./images/projects/devs-coffee.png",
              alt: "devs.coffee"
            }}
            link="https://devs.coffee" />
          <Project
            img={{
              url: "./images/projects/developers-sources.png",
              alt: ""
            }}
            link="https://developerssources.now.sh/" />
          <Project
            img={{
              url: "./images/projects/chatbox.png",
              alt: "chatbox"
            }}
            link="http://chatbox.mathisbarre.com/"
          />
        </div>
        <h3 className="mt-8 mb-2 text-xl">Projets d'étude</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            img={{
              url: "./images/projects/orinoco.png",
              alt: "orinoco"
            }}
            link="https://orinoco.mathisbarre.com" />
          <Project
            img={{
              url: "./images/projects/ohmyfood.png",
              alt: "ohmyfood"
            }}
            link="https://ohmyfood.mathisbarre.com" />
          <Project
            img={{
              url: "./images/projects/reservia.png",
              alt: "Reservia"
            }}
            link="https://reservia.mathisbarre.com" />
        </div>
      </div>
    </section>
  )
}

interface IprojectProps {
  img: {
    url: string,
    alt: string
  }
  link: string
  big?: boolean
}

function Project({ img, link, big }: IprojectProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="duration-200 transform rounded cursor-pointer aspect-w-16 aspect-h-9 bg-primary-800 hover:scale-105 hover:rotate-2"
    >
      <img className="rounded" src={img.url} alt={img.alt} />
    </a>
  )
}