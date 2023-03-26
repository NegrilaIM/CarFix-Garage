import './App.css';
import AboutUs from './Components/AboutUs';
import Carousel from './Components/Carousel';
import HamburgerMenu from './Components/Header/HamburgerMenu';
import NavBar from './Components/Header/NavBar';
import Program from './Components/Program';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <NavBar />
      <Program />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
