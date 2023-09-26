import AboutUs from "@/components/AboutUs";
import BlueInnovationHub from "@/components/BlueInnovationHub";
import FocusAreas from "@/components/FocusAreas";
import Footer from "@/components/Footer";
import History from "@/components/History";
import Initiatives from "@/components/Initiatives";
import Introduction from "@/components/Introduction";
import Main from "@/components/Main";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="">
      <Main />
      <div className="text-dark">
        <Introduction />
        <FocusAreas />
        <History />
        <Initiatives />
        <AboutUs />
        <BlueInnovationHub />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}
