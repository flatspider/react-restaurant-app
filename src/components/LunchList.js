import MenuItem from "./MenuItem";
import { useState } from "react";
import { nanoid } from "nanoid";

const LUNCH_ITEMS = [
  { id: nanoid(), description: "Ham Sandwich", price: "3" },
  { id: nanoid(), description: "Tomato Dill Soup", price: "6" },
  { id: nanoid(), description: "Veggie Quiche", price: "14" },
  { id: nanoid(), description: "Biscuit", price: "4" },
];

// I do not want to add items to my LunchItems array.
// I want to add them to a new check out array.

function LunchList({ addCheckOutItems }) {
  const lunchHTML = LUNCH_ITEMS.map((item) => (
    <MenuItem items={item} addCheckOutItems={addCheckOutItems} key={item.id} />
  ));

  return (
    <div>
      I am lunch menu
      {lunchHTML}
    </div>
  );
}

export default LunchList;
