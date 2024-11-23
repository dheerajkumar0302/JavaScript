//8. Create a List of Items and Their Prices (increased by 10%)

const items = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Pencil", price: 10 },
];

// Use map to create a new array with updated prices (increased by 10%).

function list(items) {
  let itemList = items.map((ele) => ({
    name: ele.name,
    price: (ele.price * 110) / 100,
  }));
  return itemList;
}

console.log(list(items));
