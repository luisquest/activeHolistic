const SectionTeam = () => {
    return (
        <section className="w-full flex flex-col items-center py-[218px]"
            style={{
                backgroundImage: "url('/assets/images/photos/team.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-14 items-center lg:justify-center py-4 w-full"
                >
                    <div className="w-1/2"></div>
                    <div className="flex flex-col gap-8 w-1/2">
                        <div className="text-sm font-mono font-semibold leading-tight tracking-widest">MEAT OUR TEAM</div>
                        <div className="text-4xl font-bold">
                            <span className="text-blue-500">Our Qualified Doctors</span> <br />
                            on Guard of Your Health <br />
                            and Comfort
                        </div>
                        <p className="italic w-11/12">“Prosthetics biomedicine is not just about creating replacement limbs.
                            It’s about enabling people to reclaim their abilities and pursue their passions.”</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold">Leonardo Martens</div>
                                <div className="text-xs">Head physician</div>
                            </div>
                            <img src="/assets/images/photos/firma.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTeam;