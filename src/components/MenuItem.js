// This item needs to have a menu array passed down.
// Then destructure it and print out the values.
// {menu.description} and {menu.price} get printed.

function MenuItem({
  items,
  placeCheckOutItemInCart,
  removeButton,
  removeItemFromCart,
  checkOut,
}) {
  let itemContent = "";

  if (checkOut) {
    itemContent = <h1>✔</h1>;
  }

  if (removeButton && !checkOut) {
    // if remove button is true, render remove from list
    itemContent = (
      <button
        className="btn btn-primary check"
        onClick={() => removeItemFromCart({ items })}
      >
        Remove from cart
      </button>
    );
  } else if (!checkOut) {
    // render the add to check out button
    itemContent = (
      <button
        className="btn btn-primary check"
        onClick={() => placeCheckOutItemInCart({ items })}
      >
        ADD TO CART
      </button>
    );
  }

  return (
    <tr>
      <td>{items.description}</td>
      <td>${items.price}</td>
      <td>{itemContent}</td>
    </tr>
  );
}

export default MenuItem;
