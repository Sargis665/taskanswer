import Main from "./components/main";
import About from "./components/about"
import Info from "./components/info"
import Features from "./components/features"
import Strategic from "./components/strategic"
import Awards from "./components/awards"
import Services from "./components/services"
import Contact from "./components/contact";
function Home() {
    return (
      <div>
         <Main /> 
         <About />
         <Info />
         <Features />
         <Strategic /> 
         <Awards />
         <Services />
          <Contact />
      </div>
    );
  }
  
  export default Home;
  