import IconsAnimatedListData from "../data/iconsAnimatedList";

const SectionIconsAnimatedList = () => {
    return (
        <section className="self-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-start justify-between text-center divide-x">
                {IconsAnimatedListData.map((item, i) => (
                    <div key={i} className="flex flex-col gap-4 items-center p-4 md:p-14 group">
                        <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-3">
                            {item.iconImage}
                        </div>

                        <div className="text-lg font-bold">{item.title}</div>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            {item.subtitle.map((subtitle, j) => (
                                <div key={j}>
                                    {subtitle}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionIconsAnimatedList;