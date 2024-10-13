import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./scrollToTop";  
import routes from "./routes";  

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <ParallaxProvider>
      <ScrollToTop />  
      <Routes>
        {routes.map(({ path, element: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
