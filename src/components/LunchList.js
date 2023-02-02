import MenuItem from "./MenuItem";
import { useState } from "react";

const LUNCH_ITEMS = [
  { id: 1, description: "Ham Sandwich", price: "3" },
  { id: 2, description: "Tomato Dill Soup", price: "6" },
  { id: 3, description: "Veggie Quiche", price: "14" },
];

function LunchList() {
  return (
    <p>
      I am lunch menu
      <MenuItem></MenuItem>
    </p>
  );
}

export default LunchList;
