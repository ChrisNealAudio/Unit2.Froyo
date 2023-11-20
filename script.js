// Create a prompt for the user so they can input the ice cream flavors
const userInput = prompt(
  "Please enter ice cream flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings
const flavorsArray = userInput.split(",");

// Count the occurrences of each flavor
function countFlavor(flavors) {
  const flavorCount = {};
  flavors.forEach((flavor) => {
    flavor = flavor.trim();
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });
  return flavorCount;
}

const flavorFrequencies = countFlavor(flavorsArray);

// Display the table for the user
console.table(flavorFrequencies);
