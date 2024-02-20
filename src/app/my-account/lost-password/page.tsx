import SectionPresentation from "@/app/sections/presentation";

const Page = () => {
    return (
        <main className="flex flex-col items-center gap-16 pb-16">
            <SectionPresentation title="Lost Password" subtitle={["My Account", "Lost Password"]} />
        </main>
    );
}

export default Page;