const SectionSkeleton = () => {
    return (
        <section className="flex justify-center items-center h-screen my-4">
            <div className="container w-full bg-white animate-pulse">
                <div className="animate-pulse flex space-x-4">
                    <div className="flex flex-col gap-5 w-full h-screen max-h-screen">
                        <div className="bg-gray-400 rounded w-full h-2/5"></div>
                        <div className="flex w-full h-1/5 gap-4">
                            <div className="bg-gray-400 rounded w-1/3 h-full"></div>
                            <div className="bg-gray-400 rounded w-1/3 h-full"></div>
                            <div className="bg-gray-400 rounded w-1/3 h-full"></div>
                        </div>
                        <div className="bg-gray-400 rounded w-full h-2/5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSkeleton;
