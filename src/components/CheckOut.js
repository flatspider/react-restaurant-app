import MenuItem from "./MenuItem";

function CheckOut({ checkOutItems }) {
  const checkOutHTML = checkOutItems.map((item) => (
    <MenuItem items={item} key={item.id} />
  ));

  return (
    <div>
      <p>TIME TO PAY FOR FOOD</p>
      <h1>Your food: {checkOutHTML}</h1>
    </div>
  );
}

export default CheckOut;
