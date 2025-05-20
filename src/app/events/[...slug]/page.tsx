import { events } from "@/app/data/events"
type Prop = {
  params: {slug: string[]}
}
const CatchAll = async({ params }: Prop) => {
  const param = await params
  const pathname = param.slug.join("/")
  const currentEvent = events.filter(event=>(event.slug.join("/")=== pathname))[0]
  return (
    <div>
      
      <h1>{currentEvent.title}</h1>
      <p>{currentEvent.description}</p>
    </div>
  )
}

export default CatchAll