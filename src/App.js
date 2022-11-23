import Header from "./components/Header";
import Section1 from "./Sections/Section1";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Section2 from "./Sections/Section2";
import EmptySection from "./Sections/EmptySection";
import Section4 from "./Sections/Section4";
import PartnersSection from "./Sections/PartnersSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <EmptySection/>
      <Section4/>
      <PartnersSection/>
      <Footer/>
    </div>
  );
}

export default App;
