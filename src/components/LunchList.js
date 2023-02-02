import MenuItem from "./MenuItem";
import { useState } from "react";

const LUNCH_ITEMS = [
  { id: 1, description: "Ham Sandwich", price: "3" },
  { id: 2, description: "Tomato Dill Soup", price: "6" },
  { id: 3, description: "Veggie Quiche", price: "14" },
];

// I do not want to add items to my LunchItems array.
// I want to add them to a new check out array.

const lunchHTML = LUNCH_ITEMS.map((item) => <MenuItem items={item} />);

console.log(lunchHTML);

function LunchList() {
  return (
    <p>
      I am lunch menu
      {lunchHTML}
    </p>
  );
}

export default LunchList;
