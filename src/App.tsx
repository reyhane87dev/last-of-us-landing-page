import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Ellie from "./sections/Ellie";
import SecondVideo from "./sections/SecondVideo";
import Final from "./sections/Final";
import Abby from "./sections/Abby";
import Outro from "./sections/Outro";
import FirstVideo from "./sections/FirstVideo";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FirstVideo />
        <Ellie />
        <SecondVideo />
        <Abby />
        <Final />
        <Outro />
      </main>
    </>
  );
}

export default App;
