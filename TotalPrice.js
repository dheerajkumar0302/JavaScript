// 9. Find Total Price of Items with Quantity Above 2

const cart = [
  { name: "Shoes", price: 500, quantity: 1 },
  { name: "Shirt", price: 300, quantity: 3 },
  { name: "Pants", price: 800, quantity: 2 },
];

function totalSum(cart) {
  console.log(
    cart
      .filter((ele) => ele.quantity > 2)
      .map((ele) => ele.price * ele.quantity)
      .reduce((x, y) => x + y, 0)
  );
}

totalSum(cart);
