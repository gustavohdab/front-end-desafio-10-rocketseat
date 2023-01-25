import Rating from "./Rating"
import Tag from "./Tag"

interface MovieProps {
  title: string
  rating: number
  description: string
  tags: string[]
}

function Movie({ title, rating, description, tags }: MovieProps) {
  return (
    <button className="flex flex-col w-full gap-2 text-justify bg-PINK/10 p-8 rounded-2xl mb-6 last-of-type:mb-0 hover:filter hover:brightness-90 transition duration-200 ease-in">
      <h2 className="text-2xl font-bold capitalize text-WHITE">{title}</h2>
      <Rating rating={rating} fontSize={12} />
      <p className="py-4 text-GRAY_300 ">{description}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} title={tag} bgColor="bg-BACKGROUND_600" />
        ))}
      </div>
    </button>
  )
}

export default Movie
