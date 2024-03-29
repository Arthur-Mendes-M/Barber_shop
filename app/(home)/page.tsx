import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="p-5">
        <h2 className="text-2xl">Olá, Arthur</h2>
        <p>{
          format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })
        }</p>
      </section>

      <section className="px-5">
        <Search />
      </section>
    </main>
  );
}
