import IProducts from "@/app/data/interfaces/iproducts";
import Link from "next/link";

interface ITemplateList {
    product: IProducts,
    className?: string
}

const TemplateList: React.FC<ITemplateList> = ({ product, className }) => {
    const { iconImage, title, description, price, redirect } = product;

    return (
        <div className={`grid md:grid-cols-12 justify-items-center md:items-center gap-4 md:gap-6 py-8 mx-6 text-center md:text-start ${className}`}>
            <div className="md:col-span-2">
                <Link href={redirect}>
                    <img src={iconImage} alt="imagen 1" className="rounded-full w-28 h-full hover:border-4 hover:border-blue-700" />
                </Link>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3">
                <Link href={redirect} className="text-2xl font-bold">{title}</Link>
                <div>{description}</div>
            </div>
            <div className="md:col-span-2 text-lg font-bold">
                S/. {price}
            </div>
            <div className="md:col-span-3">
                <button className="rounded-full px-8 py-4 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative transition duration-300 group-hover:text-white ease text-md font-bold text-nowrap">Read More →</span>
                </button>
            </div>
        </div>
    );
}

export default TemplateList;