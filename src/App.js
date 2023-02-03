import "./App.css";
import { useState } from "react";
import DessertList from "./components/DessertList";
import LunchList from "./components/LunchList";
import CheckOut from "./components/CheckOut";

// May need to just list the menu list here.

// Then change what it is populated with based on the button.

// This will have items added to it when ADD button is pressed.

// Have function here that is passed down to DessertItems and Lunch Items.
// How do I pass an add item function to the menu Item?

// From here -> DessertList -> MenuItem
// Why do I need to pass it twice? The DessertList/LunchList are identically set up.
// But I need the data to render differently based on what is happening.

function App() {
  // Establish what initial state is.
  // Should be lunch.
  const [checkOutItems, setCheckOutItems] = useState("");

  const [menuSelection, setMenuSelection] = useState("a");

  // Have add menu item function here? That way you can switch back and forth?
  /*
  const addToCheckOut = (id) => {
    const checkOutCopy = [...checkOutCopy];
    checkOutCopy.push(thisMenuItem); // Where does this come from? 
    // Why not add whole item? Then just pass this list to CheckOut.js
    setCheckOut(checkOutCopy);
  };
  */

  const addCheckOutItems = (items) => {
    alert(items); // This returns a unique ID.
    // Pass the id into the lunch or dessert menus and return the item.
    // Add that item to your checkout.

    /*
    let checkOutCopy = [...checkOutItems]; // This should be adding to an array.
    checkOutCopy = [...checkOutCopy, item];
    setCheckOutItems(checkOutCopy);
    */
  };

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
      {menuSelection === "a" && (
        <LunchList addCheckOutItems={addCheckOutItems} />
      )}
      {menuSelection === "b" && (
        <DessertList addCheckOutItems={addCheckOutItems} />
      )}
      {menuSelection === "c" && <CheckOut checkOutItems={checkOutItems} />}

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
