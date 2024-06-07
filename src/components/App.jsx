import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OurStory from "./OurStory";
import { ParallaxProvider } from "react-scroll-parallax";
import Committees from "./Committees";
import TrainersPool from "./TrainersPool";
import Score from "./committees/Score";
import Scome from "./committees/Scome";
import Scoph from "./committees/Scoph";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/trainers-pool" element={<TrainersPool />} />
        <Route path="/committees/score" element={<Score />} />
        <Route path="/committees/scome" element={<Scome />} />
        <Route path="/committees/scoph" element={<Scoph />}/>
        {/* // <Route path="/committees/scope" element={< />} />
        // <Route path="/committees/scorp" element={< />} />
        // <Route path="/committees/scoph" element={< />} />
        // <Route path="/committees/scora" element={< />} />  */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
