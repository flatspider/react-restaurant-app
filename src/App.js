import "./App.css";
import { useState } from "react";
import DessertList from "./components/DessertList";
import LunchList from "./components/LunchList";
import CheckOut from "./components/CheckOut";

// This will have items added to it when ADD button is pressed.

// Have function here that is passed down to DessertItems and Lunch Items.

function App() {
  // Establish what initial state is.
  // Should be lunch.
  const [checkOut, setCheckOut] = useState("");

  const [menuSelection, setMenuSelection] = useState("a");

  // Have add menu item function here? That way you can switch back and forth?
  /*
  const addToCheckOut = (id) => {
    const checkOutCopy = [...checkOutCopy];
    checkOutCopy.push(thisMenuItem);
    setCheckOut(checkOutCopy);
  };
  */

  // const addItem = () => add to ...menu, menu

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
      {menuSelection === "c" && <CheckOut />}

      {/* Under the header, establish what form should be rendered. 
      {selection === "a" && <LunchList />}
      {selection === "b" && <DessertList />} Should the check out function be passed through to these two forms?
      <CheckOut checkOut={checkOut} /> 
      */}
      <button
        className="btn btn-danger"
        onClick={() => {
          setMenuSelection("c");
        }}
      >
        Render Check Out
      </button>
    </div>
  );
}

export default App;
