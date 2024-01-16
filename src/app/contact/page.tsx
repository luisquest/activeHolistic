import SectionIconList from "../sections/iconsList";
import SectionMap from "../sections/map";
import SectionPresentation from "../sections/presentation";

const Page = () => {
    return (
        <main className="flex flex-col gap-16">
            <SectionPresentation title="Contact"
                subtitle={["Contact"]}
            />
            <SectionIconList />
            <SectionMap />
        </main >
    );
}

export default Page;