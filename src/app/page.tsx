import Image from "next/image";
import Carrousel from "./components/carousel";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        <section>
          <Carrousel />
        </section>
        <section>
          <div className="flex flex-col gap-12">
            <div className="flex gap-4 justify-center items-end py-6">
              <Image src="/assets/images/photos/pasillo_blanco.jpg" alt="imagen 1" width={230} height={318} />
              <Image src="/assets/images/photos/protesis_pierna.jpg" alt="imagen 2" width={315} height={439} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div>ABOUT COMPANY</div>
              <div>High Sensitive Bionic Prosthesis</div>
              <div> The field where technology meets humanity</div>
              <div className="max-w-[480px]">Prosthetics is a rapidly advancing field of biomedical engineering that focuses on the design, development, and fabrication of artificial limbs and other devices that can help people with physical disabilities.</div>
              <div className="flex gap-8 justify-center items-center whitespace-nowrap">
                <button className="px-4 h-6">More Info →</button>
                <button className="flex gap-2 justify-center items-center self-center px-4 h-6 ">
                  <span><Image src="/assets/icons/phone.svg"
                    alt="Menu"
                    width={27}
                    height={34}
                    priority
                  /></span>+51 980980980</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-blue-200">
            <div className="flex gap-4 justify-center items-end py-6">
              <Image src="/assets/images/photos/pasillo_blanco.jpg" alt="imagen 1" width={230} height={318} />
              <Image src="/assets/images/photos/protesis_pierna.jpg" alt="imagen 2" width={315} height={439} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div>ABOUT COMPANY</div>
              <div>High Sensitive Bionic Prosthesis</div>
              <div> The field where technology meets humanity</div>
              <div className="max-w-[480px]">Prosthetics is a rapidly advancing field of biomedical engineering that focuses on the design, development, and fabrication of artificial limbs and other devices that can help people with physical disabilities.</div>
              <div className="flex gap-8 justify-center items-center whitespace-nowrap">
                <button className="px-4 h-6">More Info →</button>
                <button className="flex gap-2 justify-center items-center self-center px-4 h-6 ">
                  <span><Image src="/assets/icons/phone.svg"
                    alt="Menu"
                    width={27}
                    height={34}
                    priority
                  /></span>+51 980980980</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}