import SkillsData from "../data/skills";

const SectionSkills = () => {
    return (
        <section className="self-center">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-14 items-center lg:justify-center py-4 min-h-max">
                    <div className="flex flex-col gap-8 w-full text-center lg:text-start">
                        <div className="text-sm font-mono font-semibold leading-tight tracking-widest">MEAT OUR TEAM</div>
                        <div className="text-6xl font-bold">
                            <span className="text-blue-500">Motor Skills</span> <br />
                            Guarantee You<br />
                            a Comfortable Life
                        </div>
                        {SkillsData.map((skill, i) => (
                            <div className="flex gap-4 items-start border-b-2 border-gray-200 py-8 ">
                                <div className="text-3xl text-blue-600 font-bold">
                                    {skill.id}
                                </div>
                                <div className="w-7/12">
                                    <div className="text-xl font-bold mb-3">{skill.title}</div>
                                    <div className="text-sm">{skill.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full ">
                        <img src="/assets/images/photos/woman_pierna_protesis.jpg" className="max-w-full h-full" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SectionSkills;