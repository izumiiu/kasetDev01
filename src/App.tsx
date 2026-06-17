import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlide from "./components/HeroSlide";
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";
import News from "./components/News";
import NewsPage from "./components/NewsPage";
import EventCalendar from "./components/EventCalendar";
import EquipmentServiceSteps from "./components/EquipmentServiceSteps";
import SampleProcess from "./components/SampleProcess";
import FormDownloads from "./components/FormDownloads";
import Contact from "./components/Contact";
import GmpPage from "./components/GmpPage";
import IdeaServicesPage from "./components/IdeaServicesPage";
import InstrumentPage from "./components/InstrumentPage";
import InstrumentDetail from "./components/InstrumentDetail";
import Footer from "./components/Footer";

function getRoute() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isContact = route.startsWith("/contact");
  const isNews = route === "/news";
  const isGmp = route.startsWith("/certificate/gmp");
  const isIdeaServices = route.startsWith("/service/idea-services");
  const isInstrument = route.startsWith("/instrument/");
  const instrumentSlug = isInstrument ? route.replace("/instrument/", "") : "";
  const isInstrumentDetail = route.startsWith("/instrument-detail/");
  const instrumentDetailId = isInstrumentDetail ? route.replace("/instrument-detail/", "") : "";

  return (
    <div className="min-h-screen font-thai">
      <Navbar />
      {isNews ? (
        <NewsPage />
      ) : isContact ? (
        <Contact />
      ) : isGmp ? (
        <GmpPage />
      ) : isIdeaServices ? (
        <IdeaServicesPage />
      ) : isInstrumentDetail ? (
        <InstrumentDetail id={instrumentDetailId} />
      ) : isInstrument ? (
        <InstrumentPage slug={instrumentSlug} />
      ) : (
        <main>
          <HeroSlide />
          <WhyUs />
          <News />
          <EventCalendar />
          <Service />
          <EquipmentServiceSteps />
          <SampleProcess />
          <FormDownloads />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
