export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-2 box-border">
      <div className="container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-16">Mes derniers projet<span className="text-primary">.</span></h2>
        <h3 className="text-xl mb-2 mt-8">En tant que freelance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            link="https://beyou-lgbt.fr" />
          <Project
            img={{
              url: "./images/projects/isba.png",
              alt: "isba éditions"
            }}
            link="https://isba-editions.com/" />
        </div>
        <h3 className="text-xl mb-2 mt-8">Side projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <h3 className="text-xl mb-2 mt-8">Projets d'étude</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
}

function Project({ img, link }: IprojectProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link} className="cursor-pointer aspect-w-16 aspect-h-9 bg-primary-800 rounded transform hover:scale-105 hover:rotate-2 duration-200">
      <img className="rounded" src={img.url} alt={img.alt} />
    </a>
  )
}