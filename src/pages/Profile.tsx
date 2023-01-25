import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Button, Input } from "../components"

function Profile() {
  return (
    <section>
      <header className="w-full h-36 bg-PINK/10 flex items-center px-6 md:px-8 lg:px-40">
        <Link to="/" className="">
          <FiArrowLeft size={26} className="text-PINK" />
        </Link>
      </header>
      <form className="max-w-[340px] -mt-[120px] mx-auto p-5 relative">
        <figure className="mb-16 w-[186px] h-[186px] mx-auto relative">
          <img
            src="https://github.com/gustavohdab.png"
            alt="Foto do usuário"
            className="w-[186px] h-[186px] rounded-full border-[3px] border-BORDER_500 mx-auto "
          />
          <label
            htmlFor="avatar"
            className="w-[48px] h-[48px] bg-PINK rounded-full flex items-center justify-center absolute right-0 bottom-2 cursor-pointer"
          >
            <FiCamera className="text-black" />
            <input type="file" id="avatar" className="hidden " />
          </label>
        </figure>
        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="email" />
        <fieldset className="mt-6">
          <Input placeholder="Senha atual" icon={FiLock} type="password" />
          <Input placeholder="Nova senha" icon={FiLock} type="password" />
        </fieldset>
        <Button label="Salvar" disabled color="BACKGROUND_600" />
      </form>
    </section>
  )
}

export default Profile
