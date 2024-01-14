import Image from "next/image";
import Carrousel from "./components/carousel";
import Header from "./components/header";
import Beneficts from "./components/list/beneficts/beneficts";
import Products from "./components/list/products/products";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        <section>
          <Carrousel />
        </section>
        {/* ABOUT */}
        <section className="self-center">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-14 items-center lg:justify-center py-4">
              <div className="flex gap-4 justify-center items-end">
                <Image src="/assets/images/photos/pasillo_blanco.jpg" alt="imagen 1" width={230} height={318} className="hidden md:block" />
                <Image src="/assets/images/photos/protesis_pierna.jpg" alt="imagen 2" width={315} height={439} />
              </div>
              <div className="flex flex-col gap-6 justify-center items-center text-center">
                <div className="text-center">
                  <h6 className="text-xs md:text-base font-semibold">ABOUT COMPANY</h6>
                  <h2 className="text-4xl md:text-6xl font-bold mt-3">
                    High Sensitive<br />Bionic Prosthesis
                  </h2>
                  <h5 className="text-md md:text-lg font-bold mt-3">The field where technology meets humanity</h5>
                </div>

                <div className="max-w-[480px]">Prosthetics is a rapidly advancing field of biomedical engineering that focuses on the design, development, and fabrication of artificial limbs and other devices that can help people with physical disabilities.</div>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-5">
                  <button className="rounded-full px-14 py-5 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative transition duration-300 group-hover:text-white ease">More info →</span>
                  </button>
                  <button className="flex gap-2 justify-center items-center self-center px-4 h-6 ">
                    <span className="bg-blue-100 p-4 rounded-full"><Image src="/assets/icons/phone.svg"
                      alt="Menu"
                      width={27}
                      height={34}
                      priority
                    />
                    </span>+51 980980980</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BENEFICTS */}
        <section className="flex bg-blue-200 w-full flex-col justify-center items-center py-20">
          <div className="container">
            <div className="flex flex-col gap-12 items-center py-20 px-20">
              <div className="text-center">
                <h6 className="font-semibold">CLINIC BENEFITS</h6>
                <h2 className="text-6xl font-bold mt-3">
                  Our Capabilities
                </h2>
              </div>
            </div>
            <div>
              <Beneficts />
            </div>
          </div>
        </section >
        {/* OUR SERVICES */}
        <section className="self-center ">
          <div className="container ">
            <div className="flex flex-col gap-12 items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-12 items-center text-center">
                <div className="text-center">
                  <h6 className="font-semibold">OUR SERVICES</h6>
                  <h2 className="text-6xl font-bold mt-3">
                    <span className="text-blue-500">We Provide</span><br />
                    Safe and Useful<br />
                    Prosthetics
                  </h2>
                </div>
                <p>
                  Prosthetics also has the potential to enhance healthcare outcomes by improving the mobility and independence of patients,
                  reducing healthcare costs, and improving overall quality of life.
                </p>
                <button className="rounded-full px-14 py-5 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative transition duration-300 group-hover:text-white ease">Productos →</span>
                </button>
              </div>
              {/* PRODUCTS */}
              <div>
                <Products />
              </div>
            </div>
          </div>
        </section >
        <Footer />
      </main >
    </>
  )
}