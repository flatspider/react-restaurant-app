import MenuItem from "./MenuItem";
import { useState } from "react";
import { nanoid } from "nanoid";

const DESSERT_ITEMS = [
  { id: nanoid(), description: "Sweet Potato Pie", price: "9" },
  { id: nanoid(), description: "Sara's Coconut Cake", price: "9" },
  { id: nanoid(), description: "24 Karot Cake", price: "9" },
];

const dessertHTML = DESSERT_ITEMS.map((item) => <MenuItem items={item} />);

function DessertList() {
  return (
    <p>
      I am dessert menu
      {dessertHTML}
    </p>
  );
}

export default DessertList;
