// This item needs to have a menu array passed down.
// Then destructure it and print out the values.
// {menu.description} and {menu.price} get printed.

function MenuItem({ items }) {
  return (
    <div className="menu-item">
      <label>This should be a food description:{items.description} </label>
      <label>Food price:{items.price} </label>
    </div>
  );
}

export default MenuItem;
