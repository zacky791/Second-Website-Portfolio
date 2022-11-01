import { Fragment } from "react";
import AboutMe from "./Component/AboutMe";
import BackgroundImg from "./Component/Backgroundimg";
import Contact from "./Component/Contact";
import HomePage from "./Component/HomePage";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";

function App() {
  return (
  <Fragment>
    <BackgroundImg>
    <Navbar/>
    <HomePage/>
    </BackgroundImg>
    <AboutMe/>
    <Portfolio/>
    <Contact/>
  </Fragment>
  )
}

export default App;
