import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './Components/Button';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';
import Collaboration from './Components/Collaboration';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Roadmap from './Components/Roadmap';
import Footer from './Components/Footer';


//button gradient is an svg through which we are giving gradient effect to the button
function App() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
     <Header></Header>
     <Hero></Hero>
     <Benefits></Benefits>
     <Collaboration></Collaboration>
     <Services></Services>
     <Pricing></Pricing>
     <Roadmap></Roadmap>
     <Footer></Footer>

    </div>

    </>
  )
}

export default App