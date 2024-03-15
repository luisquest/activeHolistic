import SectionPresentation from "@/app/sections/presentation";

const Page = () => {
    return (
        <main className="flex flex-col items-center gap-16 pb-16">
            <SectionPresentation title="Lost Password" subtitle={["Mi cuenta", "Lost Password"]} />
        </main>
    );
}

export default Page;