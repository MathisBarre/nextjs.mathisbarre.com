export default function History() {
  const history = [
    {
      date: "2022-03-31",
      eventName: '📢 Mon premier talk avec "React Nantes" & Beapp à propos de React Native'
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
      eventName: '🎓 Validation du dernier projet de mon parcours Openclassrooms'
    },
    {
      date: "2021-04-05",
      eventName: '✍️ Publication de mon premier article technique'
    },
    {
      date: "2021-01-25",
      eventName: '🎥 Publication de la vidéo la plus vue de ma chaîne !'
    },
    {
      date: "2021-12-15",
      eventName: '☕ Lancement de la première version de devs.coffee'
    },
    {
      date: "2020-08-31",
      eventName: "🦁 Début de l'alternance chez Lion Coach avec Openclassrooms"
    },
    {
      date: "2020-08-23",
      eventName: '🎥 Première vidéo YouTube'
    },
    {
      date: "2020-05-05",
      eventName: '💼 Création de ma micro-entreprise'
    },
    {
      date: "2019-12-14",
      eventName: '🎓 Obtention du certificat Javascript freecodecamp'
    },
    {
      date: "2019-10-09",
      eventName: '💼 Début développement de mon premier projet professionnel'
    },
    {
      date: "2019-09-16",
      eventName: '🎓 Obtention de la certification HTML/CSS freecodecamp'
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
              <span>{event.eventName}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}