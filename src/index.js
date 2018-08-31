import React from "react";
import ReactDOM from "react-dom";
import Appartment from "./appartment";

import "./styles.css";
import list from "./list.json";

function App() {
  return (
    <div className="App">
      {list.map(appartment => (
        <Appartment key={appartment.id} appartment={appartment} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
