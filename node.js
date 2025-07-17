import { HashMap } from "./hash-map.js";

const data = [
  ["apple", "red"],
  ["banana", "yellow"],
  ["carrot", "orange"],
  ["dog", "brown"],
  ["elephant", "gray"],
  ["frog", "green"],
  ["grape", "purple"],
  ["hat", "black"],
  ["ice cream", "white"],
  ["jacket", "blue"],
  ["kite", "pink"],
  ["lion", "golden"],
  ["monkey", "brownish"],
  ["nail", "transparent"],
  ["otter", "grey"],
  ["penguin", "black and white"],
  ["quince", "yellowey"],
  ["rod", "steel"],
  ["tank", "camouflage"],
];

const test = new HashMap();
test.show();

for (const item of data) {
  test.set(...item);
  test.show();
  console.log("Length", test.length(), "Occupancy", test.occupancy());
  console.log(`Load factor: ${test.loadFactor()}\n`);
}
