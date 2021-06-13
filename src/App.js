import logo from './logo.svg';
import './App.css';
import StickySlider from "./components/StickySlider/StickySlider";
import Header from "./components/Header/Header";
import Section2 from "./components/Section2";
import CarsSlider from "./components/Cars";

function App() {
  return (
    <div className="App">
        <Header />
        <StickySlider />
        <Section2 />
        <CarsSlider />
    </div>
  );
}

export default App;
