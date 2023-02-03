// This item needs to have a menu array passed down.
// Then destructure it and print out the values.
// {menu.description} and {menu.price} get printed.

function MenuItem({ items, placeCheckOutItemInCart }) {
  return (
    <div className="menu-item">
      <label>This should be a food description:{items.description} </label>
      <label>Food price:{items.price} </label>
      <button
        className="btn btn-primary check"
        onClick={() => placeCheckOutItemInCart(items.id)}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default MenuItem;
