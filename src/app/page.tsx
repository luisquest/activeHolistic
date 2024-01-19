import Beneficts from "./components/list/beneficts/beneficts";
import Products from "./components/list/products/products";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import SectionAboutUs from "./sections/aboutUs";
import SectionCarousel from "./sections/carousel";
import SectionMap from "./sections/map";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        {/* CAROUSEl */}
        <SectionCarousel />
        {/* ABOUT US */}
        <SectionAboutUs />
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
                  <span className="absolute w-60 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative transition duration-300 group-hover:text-white ease text-nowrap">Productos →</span>
                </button>
              </div>
              {/* PRODUCTS */}
              <div>
                <Products />
              </div>
            </div>
          </div>
        </section >
        <SectionMap />
      </main >
      <Footer />
    </>
  )
}