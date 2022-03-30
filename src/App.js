import React, { useState } from "react";
import "./styles.css";

//  elemento
const elemento = (
  <div>
    <h2>Curso react </h2>
  </div>
); //  JSX
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Olá Dev")
);
//

//  componente funcional: Funcional Component
export default function App(props) {
  const [i, setI] = useState(1);
  //let i = '123'

  const increment = () => {
    //i = i + 1
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={increment}> Incrementar </button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
    </div>
  );
}
