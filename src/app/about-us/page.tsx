import SectionAboutUs from "../sections/aboutUs";
import SectionPresentation from "../sections/presentation";
import SectionSkills from "../sections/skills";
import SectionTeam from "../sections/team";

const Page = () => {
    return (
        <main className="flex flex-col gap-16">
            <SectionPresentation title="About Us"
                subtitle={["About Us"]}
            />
            <SectionAboutUs />
            <SectionTeam />
            <SectionSkills />
        </main >
    );
}

export default Page;