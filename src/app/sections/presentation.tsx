import Link from "next/link";

interface ISectionPresentationProps {
    title: string;
    subtitle: string[];
}

const SectionPresentation: React.FC<ISectionPresentationProps> = ({ title, subtitle }) => {
    return (
        <section className="w-screen h-auto" style={{
            backgroundImage: `url('/assets/images/photos/pasillo_blanco.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="h-[478px] flex flex-col gap-10 justify-center items-center">
                <div className="text-white text-5xl font-bold">
                    {title}
                </div>
                <div className="text-white text-lg font-bold flex gap-6">
                    <Link href="/" className="text-blue-500 hover:text-white">Home</Link>
                    {subtitle.map((item, _) => (
                        <>
                            <span>//</span>
                            <span>{item}</span>
                        </>))}

                </div>
            </div>
        </section>
    );
}

export default SectionPresentation;