import Carrousel from "./components/carrousel";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        <section>
          <Carrousel />
        </section>
        <section>
          <div>asas

          </div><div>asas

          </div><div>asas

          </div><div>asas

          </div>
        </section>
      </main>
    </>
  )
}
