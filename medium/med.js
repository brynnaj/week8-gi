function calculateSlicesOfPizza(x, y) {
  // Calculate the number of slices each person would get
  let slicesPerPerson = x / y;

  // Format the number to two decimal places
  slicesPerPerson = slicesPerPerson.toFixed(2);

  // Return the interpolated string
  return `Each person gets ${slicesPerPerson} slices of pizza from our ${x}-slice pizza.`;
}

// Example usage
console.log(calculateSlicesOfPizza(8, 2));