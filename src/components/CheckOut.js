import MenuItem from "./MenuItem";

function CheckOut({ checkOutItems }) {
  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      <h1>Your food: {checkOutItems}</h1>
    </div>
  );
}

export default CheckOut;
