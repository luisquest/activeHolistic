import BenefictsData from "@/app/data/beneficts";
import CardFlip from "../../cards/CardFlip";

const Beneficts = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {BenefictsData.map((benefict, index) => (
                <CardFlip
                    key={index}
                    title={benefict.title}
                    description={benefict.description}
                    iconImage={benefict.iconImage}
                    backImage={benefict.backImage}
                />
            )
            )}
        </div>
    );
}

export default Beneficts;