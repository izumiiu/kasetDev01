import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlide from "./components/HeroSlide";
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";
import News from "./components/News";
import Contact from "./components/Contact";
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

  return (
    <div className="min-h-screen font-thai">
      <Navbar />
      {isContact ? (
        <Contact />
      ) : (
        <main>
          <HeroSlide />
          <WhyUs />
          <Service />
          <News />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
