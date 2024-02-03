import NewsLetterIcon from "../components/icons/newsltetter";

const SectionSuscribeNow = () => {
    return (
        <section className="bg-cyan-500 flex justify-center items-center min-h-28">
            <div className="container flex justify-center">
                <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center justify-center py-10 md:py-16 w-full max-w-[1000px]">
                    <NewsLetterIcon width="100px" height="120px" className="text-cyan-950" />
                    <div className="md:w-2/6 text-3xl font-bold text-cyan-950 tracking-tighter">
                        Subscribe now
                        <br />
                        <span className="text-white">to our newletter</span>
                    </div>
                    <div className="w-full mt-8 md:mt-0">
                        <div className="relative">
                            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-center rounded-full mx-6 md:mx-0">
                                <input
                                    type="text"
                                    placeholder="Your Email ..."
                                    className="p-4 rounded-full focus:outline-none focus:border-blue-500 flex-1 h-16 w-full"
                                />
                                <span className="md:absolute right-0 flex items-center">
                                    <div className="md:col-span-3">
                                        <button className="rounded-full px-12 md:px-24 py-4 overflow-hidden relative group cursor-pointer font-medium bg-cyan-950 hover:bg-white transition-all duration-700 text-white h-16">
                                            <span className="relative transition duration-300 group-hover:text-cyan-700 ease text-md font-bold">  Suscribe →</span>
                                        </button>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionSuscribeNow;