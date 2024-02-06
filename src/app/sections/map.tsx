import dynamic from 'next/dynamic'

const DynamicGoogleMap = dynamic(() => import('../components/maps/googleMap'), {
    loading: () => <p>Loading...</p>,
})


const SectionMap = () => {
    return (
        <section className="w-screen">
            <DynamicGoogleMap />
        </section>
    );
}

export default SectionMap;