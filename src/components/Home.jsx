import Header from "./Header";
import FrontPage from "./FrontPage";
import About from "./About";
import Mission from "./Mission";
import Partners from "./Partners";
import Team from "./Team";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home">
          <Header shouldLogoChange={false}/>
          <FrontPage />
          <About />
          <Mission />
          <Partners />
          <Team />
          <Testimonials />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
}
