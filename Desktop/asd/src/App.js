import Loader from "./components/Loader";
import Main from "./pages/Home/components/main";
import Header from "./components/Header";
import About from "./pages/Home/components/about/";
import Info from "./pages/Home/components/info"
import Features from "./pages/Home/components/features"
import Strategic from "./pages/Home/components/strategic"
import Awards from "./pages/Home/components/awards"
import Services from "./pages/Home/components/services"
import Contact from "./pages/Home/components/contact/Index";
function App() {
  
  return (
    <div className="App">
      
      <Header />
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

export default App;
