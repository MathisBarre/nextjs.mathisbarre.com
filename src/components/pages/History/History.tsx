export default function History() {
  interface Event {
    date: string,
    eventName: string,
    link?: string
  }

  const history: Event[] = [
    {
      date: "2022-03-31",
      eventName: '📢 Mon premier talk avec "React Nantes" & Beapp',
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6915626007525769216/"
    },
    {
      date: "2022-03-28",
      eventName: '🎓 Apprentissage de Symfony avec Beapp'
    },
    {
      date: "2021-21-18",
      eventName: '📱 Premier projet professionnel avec React Native'
    },
    {
      date: "2021-10-18",
      eventName: '📱 Début du CDI en tant que développeur web et mobile chez Beapp'
    },
    {
      date: "2021-08-20",
      eventName: '🎓 Validation du dernier projet de mon parcours Openclassrooms',
      link: "/docs/diplome-oc.pdf"
    },
    {
      date: "2021-04-05",
      eventName: '✍️ Publication de mon premier article technique',
      link: "https://devs.coffee/blog/javascript-localstorage-demistifie"
    },
    {
      date: "2021-01-25",
      eventName: '🎥 Publication de la vidéo la plus vue de ma chaîne !',
      link: "https://www.youtube.com/watch?v=5_itnizDhxc&t=511s"
    },
    {
      date: "2021-12-15",
      eventName: '☕ Lancement de la première version de devs.coffee',
      link: "https://devs.coffee/"
    },
    {
      date: "2020-08-31",
      eventName: "🦁 Début de l'alternance chez Lion Coach avec Openclassrooms",
      link: "https://www.linkedin.com/posts/lioncoach_internationalprogrammersday-programmersday-activity-6710457041162395648-AjWB?utm_source=linkedin_share&utm_medium=member_desktop_web"
    },
    {
      date: "2020-08-23",
      eventName: '🎥 Première vidéo YouTube',
      link: "https://www.youtube.com/watch?v=32edLkGuAi8"
    },
    {
      date: "2020-05-05",
      eventName: '💼 Création de ma micro-entreprise'
    },
    {
      date: "2019-12-14",
      eventName: '🎓 Obtention du certificat Javascript freecodecamp',
      link: "https://www.freecodecamp.org/certification/mathis/javascript-algorithms-and-data-structures"
    },
    {
      date: "2019-10-09",
      eventName: '💼 Début développement de mon premier projet professionnel'
    },
    {
      date: "2019-09-16",
      eventName: '🎓 Obtention de la certification HTML/CSS freecodecamp',
      link: "https://www.freecodecamp.org/certification/mathis/responsive-web-design"
    },
    {
      date: "2019-08-13",
      eventName: '🎓 Début du bootcamp freecodecamp'
    },
    {
      date: "2017-09-19",
      eventName: '🎓 Premier cours Openclassrooms (Javascript)'
    },
    {
      date: "2016-08-21",
      eventName: '🎓 Premier cours codecademy (HTML)'
    },
  ]

  function parseDate(date: string) {
    return date.split("-").reverse()
  }

  function getYearColor(year: keyof typeof color) {

    const color = {
      "2022": "bg-blue-900",
      "2021": "bg-blue-700",
      "2020": "bg-blue-500",
      "2019": "bg-blue-300",
      "2018": "bg-blue-100",
      "2017": "bg-blue-100",
      "2016": "bg-blue-100",
    }
    return color[year]
  }

  type foo = "2022" | "2021" | "2020" | "2019" | "2018" | "2017" | "2016"

  return (
    <section>
      <h2 className="title-section">Mon parcours</h2>

      <ul>
        {history.map((event) => {
          const dateArray = parseDate(event.date)

          return (
            <li key={event.eventName + event.date} className="mb-2">
              <time dateTime={event.date}>
                <span className={`dateFragment w-8 mr-1 bg-opacity-50 ${getYearColor(dateArray[2] as foo)}`}>{dateArray[1]}</span> <span className={`dateFragment w-16 mr-2 bg-opacity-50 ${getYearColor(dateArray[2] as foo)}`}>{dateArray[2]}</span>
              </time>
              <EventText link={event.link}>{event.eventName}</EventText>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

interface EventTextProps {
  link?: string,
  children: React.ReactNode
}

function EventText({ link, children }: EventTextProps) {
  if (link) {
    return (
      <a href={link} className="hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-1 align-middle" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    )
  }

  return <span>
    {children}
  </span>
}