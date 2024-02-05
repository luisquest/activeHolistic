import Products from "../components/list/products/products";

const SectionOurServices = () => {
    return (
        <section className="self-center ">
            <div className="container ">
                <div className="flex flex-col gap-12 items-center justify-center">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="text-center lg:text-start">
                            <h6 className="font-semibold">OUR SERVICES</h6>
                            <h2 className="text-6xl font-bold mt-3">
                                <span className="text-blue-500">We Provide</span><br />
                                Safe and Useful<br />
                                Prosthetics
                            </h2>
                        </div>
                        <p className="text-center text-lg">
                            Prosthetics also has the potential to enhance healthcare outcomes by improving the mobility and independence of patients,
                            reducing healthcare costs, and improving overall quality of life.
                        </p>
                        <button className="rounded-full px-14 min-w-48 py-5 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                            <span className="absolute w-60 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative transition duration-300 group-hover:text-white ease text-nowrap">Productos →</span>
                        </button>
                    </div>
                    {/* PRODUCTS */}
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="hidden lg:block lg:w-2/6">
                            <img src="/assets/images/photos/legs.png" alt="Products" />
                        </div>
                        <Products className="w-full lg:w-4/6" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SectionOurServices;