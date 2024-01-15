import SectionPresentation from "../sections/presentation";

const Page = () => {
    return (
        <main className="flex flex-col gap-16">
            <SectionPresentation title="Contact"
                subtitle={["Contact"]}
            />
        </main >
    );
}

export default Page;