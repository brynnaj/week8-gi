function sharePizza(x, y) {
  // Calculate the number of slices each person would get
  let slicesPerPerson = x / y;

  // Format the number to two decimal places
  slicesPerPerson = slicesPerPerson.toFixed(2);

  // Return the interpolated string
  return `Each person gets ${slicesPerPerson} slices of pizza from our ${x}-slice pizza.`;
}


console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3)); 