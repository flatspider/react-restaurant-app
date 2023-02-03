import MenuItem from "./MenuItem";
import { useState } from "react";
import { nanoid } from "nanoid";

const MENU_ITEMS = [
  {
    id: nanoid(),
    description: "Sweet Potato Pie",
    price: "9",
    category: "dessert",
  },
  {
    id: nanoid(),
    description: "Sara's Coconut Cake",
    price: "9",
    category: "dessert",
  },
  {
    id: nanoid(),
    description: "24 Karot Cake",
    price: "9",
    category: "dessert",
  },
  { id: nanoid(), description: "Ham Sandwich", price: "3", category: "lunch" },
  {
    id: nanoid(),
    description: "Tomato Dill Soup",
    price: "6",
    category: "lunch",
  },
  {
    id: nanoid(),
    description: "Veggie Quiche",
    price: "14",
    category: "lunch",
  },
  { id: nanoid(), description: "Biscuit", price: "4", category: "lunch" },
];

// I do not want to add items to my LunchItems array.
// I want to add them to a new check out array.
// Look for a value to be passed in.
function MenuForm({ addCheckOutItems, chooseMenu }) {
  const filteredArray = MENU_ITEMS.filter(
    (item) => item.category === chooseMenu
  );

  const lunchHTML = filteredArray.map((item) => (
    <MenuItem items={item} addCheckOutItems={addCheckOutItems} key={item.id} />
  ));

  return (
    <div>
      I am lunch menu
      {lunchHTML}
    </div>
  );
}

export default MenuForm;
