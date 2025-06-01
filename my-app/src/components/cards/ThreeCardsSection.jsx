import CardWithDots from "./CardWithDots"

const ThreeCardsSection = () => {
  return (
    <div className="px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-2xl">
        <CardWithDots title="LinkedIn" description="1" type="linkedin" />

        <CardWithDots title="Send Email" description="2" type="email" />

        <CardWithDots title="Github" description="3" type="github" />
      </div>
    </div>
  )
}

export default ThreeCardsSection
