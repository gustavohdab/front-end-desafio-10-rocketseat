import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Header, Movie } from "../components"

function Home() {
  return (
    <main className="flex flex-col h-screen pb-6">
      <Header />
      <section className="container mx-auto px-4">
        <header className="flex items-center justify-between mb-9">
          <h2 className="text-3xl text-WHITE">Meus filmes</h2>
          <Link
            to="/new"
            color="BACKGROUND_600"
            className="flex items-center gap-2 bg-PINK py-3 px-8 rounded-lg"
          >
            <FiPlus className="text-xl" />
            Adicionar filme
          </Link>
        </header>
        <div className="overflow-y-auto overflow-x-hidden scroll-m-2 max-h-[650px] custom-scrollbar ">
          <Movie
            title="O Poderoso chefão"
            rating={5}
            description="
            A saga de uma família de imigrantes italianos em Nova York, que se torna uma das mais poderosas e influentes famílias do mundo.
            "
            tags={["Ação", "Drama", "Crime"]}
          />
          <Movie
            title="O Poderoso chefão"
            rating={3}
            description="
            A saga de uma família de imigrantes italianos em Nova York, que se torna uma das mais poderosas e influentes famílias do mundo.
            "
            tags={["Ação", "Drama", "Crime"]}
          />
        </div>
      </section>
    </main>
  )
}

export default Home
