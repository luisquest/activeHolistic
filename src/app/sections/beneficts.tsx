import Beneficts from "../components/list/beneficts/beneficts";

const SectionBeneficts = () => {
    return (
        <section className="flex bg-blue-200 w-full flex-col justify-center items-center py-20">
            <div className="container">
                <div className="flex flex-col gap-12 items-center py-20 px-20">
                    <div className="text-center">
                        <h6 className="font-semibold">Nuestros</h6>
                        <h2 className="text-6xl font-bold mt-3">
                            SERVICIOS
                        </h2>
                    </div>
                </div>
                <div>
                    <Beneficts />
                </div>
            </div>
        </section >
    );
}

export default SectionBeneficts;