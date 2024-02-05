import BenefictsData from "@/app/data/beneficts";
import CardFlip from "../../cards/CardFlip";

const Beneficts = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 px-[15px]">
            {BenefictsData.map((benefict, index) => (
                <CardFlip
                    key={index}
                    title={benefict.title}
                    description={benefict.description}
                    iconImage={benefict.iconImage}
                    backImage={benefict.backImage}
                    className="h-[273px] lg:h-[363px] px-[15px] lg:px-0"
                />
            )
            )}
        </div>
    );
}

export default Beneficts;