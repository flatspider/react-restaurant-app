import MenuItem from "./MenuItem";
import { useState } from "react";

const DESSERT_ITEMS = [
  { id: 1, description: "Sweet Potato Pie", price: "9" },
  { id: 2, description: "Sara's Coconut Cake", price: "9" },
  { id: 3, description: "24 Karot Cake", price: "9" },
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
