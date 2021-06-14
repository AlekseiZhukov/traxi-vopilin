import './App.css';
import StickySlider from "./components/StickySlider/StickySlider";
import Header from "./components/Header/Header";
import Section2 from "./components/Section2";
import CarsSlider from "./components/Cars";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";

function App() {
  return (
    <div className="App">
        <Header />
        <StickySlider />
        <Section2 />
        <CarsSlider />
        <Section5 />
        <Section6 />
    </div>
  );
}

export default App;
