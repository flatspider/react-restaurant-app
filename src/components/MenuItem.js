// This item needs to have a menu array passed down.
// Then destructure it and print out the values.
// {menu.description} and {menu.price} get printed.

function MenuItem({ items, placeCheckOutItemInCart, removeButton }) {
  if (removeButton) {
    // if remove button is true, render remove from list
  } else {
    // render the add to check out button
  }

  return (
    <tr>
      <td>{items.description}</td>
      <td>${items.price}</td>
      <td>
        <button
          className="btn btn-primary check"
          onClick={() => placeCheckOutItemInCart({ items })}
        >
          ADD TO CART
        </button>
      </td>
    </tr>
  );
}

export default MenuItem;
