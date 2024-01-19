import SectionAboutUs from "../sections/aboutUs";
import SectionPresentation from "../sections/presentation";
import SectionTeam from "../sections/team";

const Page = () => {
    return (
        <main className="flex flex-col gap-16">
            <SectionPresentation title="About Us"
                subtitle={["About Us"]}
            />
            <SectionAboutUs />
            <SectionTeam />
        </main >
    );
}

export default Page;