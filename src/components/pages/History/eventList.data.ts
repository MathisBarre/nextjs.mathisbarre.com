interface Event {
  date: string;
  eventName: string;
  link?: string;
}

const eventList: Event[] = [
  {
    date: "2022-03-31",
    eventName: '📢 Mon premier talk avec "React Nantes" & Beapp',
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6915626007525769216/",
  },
  {
    date: "2022-03-28",
    eventName: "🎓 Apprentissage de Symfony avec Beapp",
  },
  {
    date: "2021-21-18",
    eventName: "📱 Premier projet professionnel avec React Native",
  },
  {
    date: "2021-10-18",
    eventName:
      "📱 Début du CDI en tant que développeur web et mobile chez Beapp",
  },
  {
    date: "2021-08-20",
    eventName: "🎓 Validation du dernier projet de mon parcours Openclassrooms",
    link: "/docs/diplome-oc.pdf",
  },
  {
    date: "2021-04-05",
    eventName: "✍️ Publication de mon premier article technique",
    link: "https://devs.coffee/blog/javascript-localstorage-demistifie",
  },
  {
    date: "2021-01-25",
    eventName: "🎥 Publication de la vidéo la plus vue de ma chaîne !",
    link: "https://www.youtube.com/watch?v=5_itnizDhxc&t=511s",
  },
  {
    date: "2021-12-15",
    eventName: "☕ Lancement de la première version de devs.coffee",
    link: "https://devs.coffee/",
  },
  {
    date: "2020-08-31",
    eventName: "🦁 Début de l'alternance chez Lion Coach avec Openclassrooms",
    link: "https://www.linkedin.com/posts/lioncoach_internationalprogrammersday-programmersday-activity-6710457041162395648-AjWB?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    date: "2020-08-23",
    eventName: "🎥 Première vidéo YouTube",
    link: "https://www.youtube.com/watch?v=32edLkGuAi8",
  },
  {
    date: "2020-05-05",
    eventName: "💼 Création de ma micro-entreprise",
  },
  {
    date: "2019-12-14",
    eventName: "🎓 Obtention du certificat Javascript freecodecamp",
    link: "https://www.freecodecamp.org/certification/mathis/javascript-algorithms-and-data-structures",
  },
  {
    date: "2019-10-09",
    eventName: "💼 Début développement de mon premier projet professionnel",
  },
  {
    date: "2019-09-16",
    eventName: "🎓 Obtention de la certification HTML/CSS freecodecamp",
    link: "https://www.freecodecamp.org/certification/mathis/responsive-web-design",
  },
  {
    date: "2019-08-13",
    eventName: "🎓 Début du bootcamp freecodecamp",
  },
  {
    date: "2017-09-19",
    eventName: "🎓 Premier cours Openclassrooms (Javascript)",
  },
  {
    date: "2016-08-21",
    eventName: "🎓 Premier cours codecademy (HTML)",
  },
];
export default eventList;
