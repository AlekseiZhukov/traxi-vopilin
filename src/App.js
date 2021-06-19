import React, {useState} from 'react';
import './App.css';
import StickySlider from "./components/StickySlider/StickySlider";
import Header from "./components/Header/Header";
import Section2 from "./components/Section2";
import CarsSlider from "./components/Cars";
import Section6 from "./components/Section6/Section6";
import Conditions from "./components/Conditions/Conditions";

const  App = () => {

    const [condition, setCondition] = useState(false)

    const handleOnCondition = () => {
        setCondition(true)
    }
    const handleOffCondition = () => {
        setCondition(false)
    }

  return (
    <div className="App">
        <Header conditionOn = {handleOnCondition}/>
        <StickySlider conditionOn = {handleOnCondition}/>
        <Section2 />
        <CarsSlider />
        <Section6 />
        {condition && <Conditions conditionOff = {handleOffCondition} />}
    </div>
  );
}

export default App;
