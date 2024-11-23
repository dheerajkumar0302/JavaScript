//6. Find the Most Expensive Product

const products = [
  { name: "Table", price: 200 },
  { name: "Chair", price: 150 },
  { name: "Couch", price: 800 },
  { name: "Bed", price: 1000 },
];

function expensiveProduct(products) {
  console.log(products.reduce((x, y) => (y.price > x.price ? y : x)));
}

expensiveProduct(products);
