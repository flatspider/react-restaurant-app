import MenuItem from "./MenuItem";

function CheckOut({ checkOutItems }) {
  // Check out items is an array of objects.

  let subtotalHTML = 5; // add all of the prices listed in the cart.

  let checkOutHTML = <p>Hello</p>;

  if (checkOutItems == []) {
    checkOutHTML = <p>There is nothing currently in your cart.</p>;
  } else {
    checkOutHTML = checkOutItems.map((item) => (
      <div>
        <MenuItem items={item} key={item.id} removeButton={true} />
      </div>
    ));
  }

  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      {checkOutHTML}
      <h3>Your current subtotal is:{subtotalHTML}</h3>
    </div>
  );
}

export default CheckOut;
