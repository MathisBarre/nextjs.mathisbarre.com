import eventList from "./eventList.data";
import EventText from "./EventText";
import { foo, parseDate } from "./history.utils";

export function getYearColor(year: keyof typeof color) {
  const color = {
    "2023": "bg-blue-900",
    "2022": "bg-blue-800",
    "2021": "bg-blue-700",
    "2020": "bg-blue-500",
    "2019": "bg-blue-300",
    "2018": "bg-blue-100",
    "2017": "bg-blue-100",
    "2016": "bg-blue-100",
  };

  return color[year];
}

export default function History() {
  return (
    <section>
      <h2 className="title-section">Mon parcours</h2>

      <ul>
        {eventList.map((event) => {
          const dateArray = parseDate(event.date);

          return (
            <li key={event.eventName + event.date} className="mb-2">
              <time dateTime={event.date}>
                <span
                  className={`dateFragment w-8 mr-1 bg-opacity-50 ${getYearColor(
                    dateArray[2] as foo
                  )}`}
                >
                  {dateArray[1]}
                </span>{" "}
                <span
                  className={`dateFragment w-16 mr-2 bg-opacity-50 ${getYearColor(
                    dateArray[2] as foo
                  )}`}
                >
                  {dateArray[2]}
                </span>
              </time>
              <EventText link={event.link}>{event.eventName}</EventText>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
