import "./App.css";
import { useState } from "react";
import DessertList from "./components/DessertList";
import LunchList from "./components/LunchList";

function App() {
  // Establish what initial state is.
  // Should be lunch.
  const [menuSelection, setMenuSelection] = useState("a");

  return (
    <div className="App container mt-5">
      <header className="App-header">
        <h1>BRICK STREET CAFE - Open 12 to 3</h1>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("a");
          }}
        >
          LUNCH
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("b");
          }}
        >
          DESSERT
        </button>
      </header>
      {menuSelection === "a" && <LunchList />}
      {menuSelection === "b" && <DessertList />}
      {/* Under the header, establish what form should be rendered. 
      {selection === "a" && <LunchList />}
      {selection === "b" && <DessertList />} Should the check out function be passed through to these two forms?
      <CheckOut checkOut={checkOut} /> 
      */}
    </div>
  );
}

export default App;
