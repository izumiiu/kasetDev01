import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlide from "./components/HeroSlide";
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";
import News from "./components/News";
import EventCalendar from "./components/EventCalendar";
import EquipmentServiceSteps from "./components/EquipmentServiceSteps";
import SampleProcess from "./components/SampleProcess";
import FormDownloads from "./components/FormDownloads";
import Contact from "./components/Contact";
import GmpPage from "./components/GmpPage";
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
  const isGmp = route.startsWith("/certificate/gmp");

  return (
    <div className="min-h-screen font-thai">
      <Navbar />
      {isContact ? (
        <Contact />
      ) : isGmp ? (
        <GmpPage />
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
