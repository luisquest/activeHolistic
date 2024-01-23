import IconsListData from "../data/iconsList";

const SectionIconList = () => {
    return (
        <section className="self-center">
            <div className="container w-screen py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-start justify-between text-center">
                    {IconsListData.map((item, i) => (
                        <div key={i} className="flex flex-col gap-4 items-center">
                            {item.iconImage}
                            <div className="text-2xl font-bold">{item.title}</div>
                            <div className="flex flex-col gap-2 text-base text-gray-600">
                                {item.subtitle.map((subtitle, j) => (
                                    <div key={j}>
                                        {subtitle}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionIconList;