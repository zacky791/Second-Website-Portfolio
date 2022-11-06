import { Fragment,useState } from "react";
import AboutMe from "./Component/AboutMe";
import BackgroundImg from "./Component/Backgroundimg";
import Contact from "./Component/Contact";
import HomePage from "./Component/HomePage";
import Navbar from "./Component/Navbar";
import NavbarMobile from "./Component/NavbarMobile";
import Portfolio from "./Component/Portfolio";

function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCart = () => {
    setCartIsShown(true)
  }

  const hideCart = () => {
    setCartIsShown(false)
  }

  
  return (
  <Fragment>
    <BackgroundImg>
    <Navbar showCart={showCart}/>
    { cartIsShown && <NavbarMobile hideCart={hideCart}/>}
    <HomePage/>
    </BackgroundImg> 
    <AboutMe/>
    <Portfolio/>
    <Contact/>
  </Fragment>
  )
}

export default App;
