import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import authBg from "../assets/auth-bg.jpg"
import { Button, Input } from "../components"

function SignUp() {
  return (
    <section className="flex h-screen items-stretch">
      <form
        action=""
        className="flex flex-1 flex-col justify-center px-8 md:px-20 lg:px-[136px] md:flex-grow-0"
      >
        <h1 className="font-bold text-PINK text-4xl md:text-5xl mb-2">
          RocketMovies
        </h1>
        <p className="text-GRAY_400 text-sm">
          Aplicação para acompanhar tudo que assistir.
        </p>
        <h2 className="font-medium text-2xl my-12 text-white">
          Crie sua conta
        </h2>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <div className="flex flex-col items-center gap-[42px]">
          <Button label="Cadastrar" color="BACKGROUND_600" />
          <Link to="/" className="flex flex-row items-center gap-2 text-PINK">
            <FiArrowLeft className="text-xl" />
            Voltar para o login
          </Link>
        </div>
      </form>
      <aside className="hidden md:block flex-1 ">
        <img
          src={authBg}
          alt="Background Image"
          className="object-cover bg-center h-full w-full"
        />
      </aside>
    </section>
  )
}

export default SignUp
