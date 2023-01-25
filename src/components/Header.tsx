import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import Input from "./Input"

function Header() {
  return (
    <header className="lg:flex sm:justify-between md:items-center sm:flex-col md:flex-row py-4 px-12 lg:h-[116px] mb-10 border-b border-BORDER_500 ">
      <h1 className="text-2xl sm:text-3xl font-bold text-PINK ">
        RocketMovies
      </h1>

      <Input icon={AiOutlineSearch} placeholder="Pesquisar pelo título" />

      <div className="flex items-center gap-3 justify-end">
        <div className="flex flex-col items-end">
          <strong className="font-bold text-sm leading-5 lg:text-base text-WHITE_100">
            Gustavo Batista
          </strong>
          <button
            className="text-sm leading-5 font-normal text-GRAY_200 lowercase"
            type="submit"
          >
            sair
          </button>
        </div>

        <Link to="/profile">
          <img
            src="https://github.com/gustavohdab.png"
            alt="Foto do usuário"
            className="w-16 h-16 rounded-full border-[3px] border-BORDER_500 md:items-end"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
