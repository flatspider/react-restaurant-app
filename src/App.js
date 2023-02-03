import "./App.css";
import { useState } from "react";
import MenuForm from "./components/MenuForm";
import CheckOut from "./components/CheckOut";

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

  const placeCheckOutItemInCart = (items) => {
    alert(items); // This returns a unique ID string.
    // Where should the check out live? The state should be passed to CheckOut.
    const checkOutCopy = [...checkOutItems]; // This should be adding to an array.
    checkOutCopy.push(items);
    setCheckOutItems(checkOutCopy); // Not updating the state value.
    console.log(checkOutItems);
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
        <MenuForm
          placeCheckOutItemInCart={placeCheckOutItemInCart}
          chooseMenu={"lunch"}
        />
      )}
      {menuSelection === "b" && (
        <MenuForm
          placeCheckOutItemInCart={placeCheckOutItemInCart}
          chooseMenu={"dessert"}
        />
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
