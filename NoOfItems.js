//3. Count the Number of Items in Stock
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 50, inStock: false },
  { name: "Keyboard", price: 70, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
];

function calculateNoOfItems(products) {
  let count = products.filter((ele) => ele.inStock == true).length;
  return count;
}

console.log(calculateNoOfItems(products));
