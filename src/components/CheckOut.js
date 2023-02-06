import MenuItem from "./MenuItem";

function CheckOut({ checkOutItems }) {
  // Check out items is an array of objects.

  let checkOutHTML = <p>Hello</p>;

  if (checkOutItems == null) {
    checkOutHTML = <p>NOTHING HERE</p>;
  } else {
    checkOutHTML = checkOutItems.map((item) => (
      <div>
        <MenuItem items={item} key={item.id} />
        <button>Remove Item</button>
      </div>
    ));
  }

  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      <h1>Your food: </h1>
      <h2>{checkOutHTML}</h2>
    </div>
  );
}

export default CheckOut;
