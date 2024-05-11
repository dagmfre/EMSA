import Header from "./Header";
import FrontPage from "./FrontPage";
import About from "./About";
import Mission from "./Mission";
import Partners from "./Partners";
import Team from "./Team";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <FrontPage />
      <About />
      <Mission />
      <Partners />
      <Team />
    </div>
  );
}
