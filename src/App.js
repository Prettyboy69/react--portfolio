import React from 'react';
import './App.css';
import SideBar from './component/sidebar/SideBar';
import Portfolio from './component/portfolio/Portfolio';
import Home from './component/Home/Home';
import About from './component/About/About';
import Service from './component/services/Service';
import Resume from './component/Resume/Resume';
import Testimonials from './component/Testimonial/Testimonials';
import Pricing from './component/Pricing/Pricing';
import Contact from './component/Contact/Contact';
import Blog from './component/blog/Blog';



const App= ()=>{
   
   return(
    <>
     <SideBar/>
     <main className="main">
      <Home />
      <About/>
      <Service/>
      <Resume/>
      <Portfolio/>
      <Blog/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
     </main>


      </>
   )
}
export default App;