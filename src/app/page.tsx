import Header from "./components/header";
import Footer from "./components/footer/footer";
import SectionAboutUs from "./sections/aboutUs";
import SectionCarousel from "./sections/carousel";
import SectionMap from "./sections/map";
import SectionZoomCards from "./sections/zoomCards";
import SectionSkills from "./sections/skills";
import SectionBeneficts from "./sections/beneficts";
import SectionOurServices from "./sections/ourServices";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        <SectionCarousel />
        <SectionAboutUs />
        <SectionBeneficts />
        <SectionOurServices />
        <SectionZoomCards />
        <SectionSkills />
        <SectionMap />
      </main >
      <Footer />
    </>
  )
}