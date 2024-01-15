import SectionAboutUs from "../sections/aboutUs";
import SectionPresentation from "../sections/presentation";

const Page = () => {
    return (
        <main className="flex flex-col gap-16">
            <SectionPresentation title="About Us"
                subtitle={["About Us"]}
            />
            {/* ABOUT US */}
            <SectionAboutUs />
        </main >
    );
}

export default Page;