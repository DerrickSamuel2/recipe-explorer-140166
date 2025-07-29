/**
 * REST API/GraphQL Placeholder Stubs for frontend integration.
 * Replace with real API calls to backend when available.
 */

const mockRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    cuisine: "Italian",
    ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"],
    instructions: "Stretch dough, add sauce, cheese, basil, bake at 500°F for 10 minutes.",
    description: "A fresh and simple classic pizza.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id: 2,
    title: "Sushi Rolls",
    cuisine: "Japanese",
    ingredients: ["Rice", "Nori", "Fish", "Avocado", "Soy Sauce"],
    instructions: "Lay out nori, spread rice, add fillings, roll tightly, slice.",
    description: "Hand-rolled sushi with fresh ingredients.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c"
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    cuisine: "Mexican",
    ingredients: ["Pork", "Pineapple", "Tortilla", "Onion", "Cilantro"],
    instructions: "Grill pork, sauté pineapple, fill tortilla, top with onions & cilantro.",
    description: "Sweet and savory pork tacos with fresh pineapple.",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0"
  }
];

export async function fetchRecipes() {
  // PUBLIC_INTERFACE
  // Simulate network delay
  return new Promise(resolve => setTimeout(() => resolve(mockRecipes), 300));
}

// PUBLIC_INTERFACE
export async function fetchCuisines() {
  // Unique cuisines from recipes
  return [...new Set(mockRecipes.map(r => r.cuisine))];
}

// PUBLIC_INTERFACE
export async function fetchIngredients() {
  // Unique ingredients from all recipes
  return [...new Set(mockRecipes.flatMap(r => r.ingredients))];
}
