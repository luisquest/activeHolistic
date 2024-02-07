import Footer from "./components/footer/footer";
import Header from "./components/header";
import SectionAboutUs from "./sections/aboutUs";
import SectionBeneficts from "./sections/beneficts";
import SectionCarousel from "./sections/carousel";
import SectionIconsAnimatedList from "./sections/iconsAnimatedList";
import SectionJustText from "./sections/justText";
import SectionMap from "./sections/map";
import SectionZoomCardsSuscribeNow from "./sections/mix/SectionZoomsCardsSuscribeNow";
import SectionOurServices from "./sections/ourServices";
import SectionSkills from "./sections/skills";
import SectionSuccessStories from "./sections/successStories";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16">
        <SectionCarousel />
        <SectionAboutUs />
        <SectionBeneficts />
        <SectionOurServices />
        <SectionZoomCardsSuscribeNow />
        <SectionSkills />
        <SectionJustText />
        <SectionIconsAnimatedList />
        <SectionSuccessStories />
        <SectionMap />
      </main >
      <Footer />
    </>
  )
}