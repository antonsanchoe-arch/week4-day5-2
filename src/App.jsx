import { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import "./App.css";

function App() {
  
  const [count, setCount] = useState(1);

  
  function increase() {
    setCount(count + 1);
  }

  
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Exponents Counter</h1>

     
      <Counter count={count} increase={increase} decrease={decrease} />

      
      <ExponentTwo count={count} />
      <ExponentThree count={count} />
      <ExponentFour count={count} />
      <ExponentFive count={count} />
      <ExponentSix count={count} />
    </div>
  );
}

export default App;
