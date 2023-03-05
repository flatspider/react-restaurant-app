import MenuItem from "./MenuItem";
import { useState } from "react";

function CheckOut({ checkOutItems, removeItemFromCart }) {
  // Check out items is an array of objects.

  const [checkOut, setCheckOut] = useState(false);

  let subtotalHTML = ""; // add all of the prices listed in the cart.
  let subtotal = 0;
  let checkOutHTML = <p>Hello</p>;

  for (let i = 0; i < checkOutItems.length; i++) {
    subtotal = parseFloat(subtotal) + parseFloat(checkOutItems[i].price);
  }

  subtotalHTML = subtotal;

  if (checkOutItems == []) {
    checkOutHTML = <p>There is nothing currently in your cart.</p>;
  } else {
    checkOutHTML = checkOutItems.map((item) => (
      <MenuItem
        checkOut={checkOut}
        items={item}
        key={item.id}
        removeButton={true}
        removeItemFromCart={removeItemFromCart}
      />
    ));
  }

  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      <div className="d-flex justify-content-center align-items-center">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{checkOutHTML}</tbody>
        </table>
      </div>
      <h3>Your current subtotal is: ${subtotal}</h3>
      {checkOut && <h3>The above order has been submitted.</h3>}
      {!checkOut && (
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCheckOut(true);
            localStorage.setItem(
              "checkOutItems",
              JSON.stringify(checkOutItems)
            );
          }}
        >
          Submit Order
        </button>
      )}
    </div>
  );
}

export default CheckOut;
