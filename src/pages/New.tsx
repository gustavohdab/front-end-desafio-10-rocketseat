import { FiArrowLeft } from "react-icons/fi"
import {
  Button,
  ButtonText,
  Header,
  Input,
  NoteItem,
  Textarea,
} from "../components"

function New() {
  return (
    <section className="w-full mb-24 overflow-auto">
      <Header />
      <main className="max-w-6xl mx-auto mt-10 px-3 sm:px-6 md:px-10">
        <form>
          <header>
            <ButtonText title="Voltar" icon={FiArrowLeft} to="/" />
            <h1 className="mt-6 mb-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-WHITE_100">
              Novo filme
            </h1>
          </header>
          <div className="flex flex-col sm:flex-row  gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
          <Textarea placeholder="Observações" />
        </form>
        <div className="mt-10 mb-6">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-GRAY_300">
            Marcadores
          </h2>
          <div className="rounded-lg bg-BACKGROUND_900 h-full flex items-center mt-6 mb-10 flex-wrap">
            <NoteItem value="React" />
            <NoteItem isNew />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-6 md:gap-8 lg:gap-10">
            <Button
              label="Excluir filme"
              bgColor="BACKGROUND_900"
              color="PINK"
            />
            <Button label="Salvar alterações" color="#312E38" />
          </div>
        </div>
      </main>
    </section>
  )
}

export default New
