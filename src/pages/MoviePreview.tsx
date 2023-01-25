import { FiArrowLeft, FiClock } from "react-icons/fi"
import { ButtonText, Header, Rating, Tag } from "../components"
import { MovieTempDescription } from "../temp/movie-description"

interface MoviePreviewProps {
  title?: string
  author?: string
}

function MoviePreview({ title, author }: MoviePreviewProps) {
  return (
    <article className="flex flex-col h-screen pb-6">
      <Header />
      <main className="max-w-[1137px] mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <ButtonText title="Voltar" icon={FiArrowLeft} to="/" />
        <header className="flex items-center gap-4 flex-wrap">
          <h1 className="text-4xl font-medium py-6 pr-2 text-WHITE">
            Interstellar
          </h1>
          <Rating rating={3} fontSize={24} />
        </header>
        <div className="flex items-center pb-10">
          <img
            src="https://github.com/gustavohdab.png"
            alt="Foto do usuário"
            className="w-6 h-6 rounded-full border-[2px] border-BORDER_500"
          />
          <p className="flex m-2 text-WHITE_100">Por Gustavo Batista</p>
          <p className="flex items-center gap-2 text-WHITE_100">
            <FiClock className="text-PINK text-xl" /> 22/01/2023
          </p>
        </div>

        <footer className="flex flex-wrap">
          <Tag title="Ação" />
          <Tag title="Drama" />
          <Tag title="Ficção Científica" />
        </footer>
        <MovieTempDescription />
      </main>
    </article>
  )
}

export default MoviePreview
