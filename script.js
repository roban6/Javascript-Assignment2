document.getElementById("orderBtn").addEventListener("click", function () {
  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const ingredients = document.getElementById("ingredients").value.split(",").map(i => i.trim());
  const sweetness = document.getElementById("sweetness").value;

  const smoothie = new Smoothie(size, base, ingredients, sweetness);

  document.getElementById("output").innerHTML = smoothie.description();
  document.getElementById("smoothieImg").style.display = "block";
});
// script.js
class Smoothie {
  constructor(size, base, ingredients, sweetness) {
    this.size = size;
    this.base = base;
    this.ingredients = ingredients;
    this.sweetness = sweetness;
  }

  // Price calculator
  calculatePrice() {
    const ingredientPrices = {
      Banana: 1,
      Mango: 1.5,
      Spinach: 0.5,
      Strawberry: 1.25,
      Protein: 2,
      Blueberry: 1.25,
      Pineapple: 1.5
    };

    let total = 4; // base price for smoothie

    this.ingredients.forEach(ing => {
      let cleaned = ing.trim();
      if (ingredientPrices[cleaned]) {
        total += ingredientPrices[cleaned];
      }
    });

    return total.toFixed(2);
  }

  // Output description including price
  description() {
    return `
      <h3>Your Smoothie</h3>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
      <p><strong>Sweetness:</strong> ${this.sweetness}</p>
      <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
    `;
  }
}
