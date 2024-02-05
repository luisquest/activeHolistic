const SectionJustText = () => {
    return (
        <section className="flex justify-center items-center py-56" style={{
            backgroundImage: `url('/assets/images/photos/hospital.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="container flex flex-col justify-center text-center">
                <div className="text-[48px] md:text-[100px] leading-[1.1em] md:tracking-[-1px] font-bold mb-24">
                    <div className="text-blue-400">Leading & Modern</div>
                    <div className="text-white">Bionic Technologies</div>
                </div>
                <div >
                    <button className="rounded-full w-[200px] md:w-64 px-8 py-3 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950 h-[64px]">
                        <span className="absolute w-[300px] h-0 transition-all duration-300 origin-center rotate-90 -translate-x-24 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative transition duration-300 group-hover:text-white ease font-semibold">Read More →</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SectionJustText;