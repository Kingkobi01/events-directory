import Link from "next/link"
import { events } from "../data/events"
const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link href={`events/${event.slug.join("/")}`}>
            {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Events