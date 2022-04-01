import eventList from "./eventList.data"
import EventText from "./EventText"
import { foo, getYearColor, parseDate } from "./history.utils"

export default function History() {
  return (
    <section>
      <h2 className="title-section">Mon parcours</h2>

      <ul>
        {eventList.map((event) => {
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