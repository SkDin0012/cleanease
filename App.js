//import logo from './logo.svg';
import './App.css';
import Footer from './Components/View/Footer';
import Header from './Components/View/Header';
import Maincontent from './Components/View/Maincontent';
import Prices from './Components/View/Prices';
import Service from './Components/View/Service';
import TESTIMONIALS from './Components/View/TESTIMONIALS';
import WhyUs from './Components/View/WhyUs';
function App() {
  return (
    <div>
      <Header/>
    <Maincontent/>
    <WhyUs/>
    <Service/>
  <Prices/><br/>
  <TESTIMONIALS/>
      <Footer />

    </div>
  );
}

export default App;
