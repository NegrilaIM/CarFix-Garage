import './App.css';
import AboutUs from './Components/AboutUs';
import Carousel from './Components/Carousel';
import CompanyDetails from './Components/CompanyDetails';
import HamburgerMenu from './Components/Header/HamburgerMenu';
import NavBar from './Components/Header/NavBar';
import Program from './Components/Program';
import Servicii from './Components/Servicii';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <NavBar />
      <Program />
      <Carousel />
      <AboutUs />
      <Servicii />
      <CompanyDetails />
    </div>
  );
}

export default App;
