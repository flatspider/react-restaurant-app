import "./App.css";
import { useState } from "react";
import MenuForm from "./components/MenuForm";
import CheckOut from "./components/CheckOut";

function App() {
  const [checkOutItems, setCheckOutItems] = useState("");
  const [menuSelection, setMenuSelection] = useState("a");

  const placeCheckOutItemInCart = ({ items }) => {
    alert(items.description + " added to your cart.");
    const checkOutCopy = [...checkOutItems]; // This should be adding to an array.
    checkOutCopy.push(items);
    setCheckOutItems(checkOutCopy); // Not updating the state value.
    console.log(checkOutItems); // ID values are being added to state. I want the entire item added.
  };

  const removeItemFromCart = ({ items }) => {
    alert(items.description); // This returns a unique ID string.
    const checkOutCopy1 = [...checkOutItems];

    let deleteIndex = checkOutCopy1.findIndex(
      (item) => item.description === items.description
    );

    checkOutCopy1.splice(deleteIndex, 1);
    setCheckOutItems(checkOutCopy1); // Not updating the state value.
  };

  return (
    <div className="App container mt-5">
      <header className="App-header">
        <div className="top-banner">
          <img src="https://static.wixstatic.com/media/a895db_d25ab21086c64ec89c658622a8248f2e~mv2.jpg/v1/fill/w_402,h_478,al_c,lg_1,q_80,enc_auto/brickstreetcafelogo.jpg" />
          <h1 className="align-text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Cake Pick-Up</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>Closed</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>11am - 4pm</td>
                  <td>10am - 6:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>11am - 4pm</td>
                  <td>10am - 6:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>11am - 4pm</td>
                  <td>10am - 6:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>11am - 4pm</td>
                  <td>10am - 6:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>11am - 4pm</td>
                  <td>10am - 6:30pm</td>
                </tr>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Closed</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </h1>
        </div>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("a");
          }}
        >
          Lunch Menu
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => {
            setMenuSelection("b");
          }}
        >
          Dessert Menu
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
      {menuSelection === "c" && (
        <CheckOut
          checkOutItems={checkOutItems}
          removeItemFromCart={removeItemFromCart}
        />
      )}

      <button
        className="btn btn-danger check-out-btn"
        onClick={() => {
          setMenuSelection("c");
        }}
      >
        Check Out
      </button>
    </div>
  );
}

export default App;
