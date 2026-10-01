const recipes = [
  {
    image: "images/photo-1.avif",
    rating: 4.5,
    reviews: 156,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    title: "Mediterranean Quinoa Bowl",
    subtitle: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    prepTime: 20,
    cookTime: 35,
    servings: "2 people",
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing"
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    nutrition: [
      { label: "Calories", value: "480 kcal", icon: "fa-solid fa-fire", color: "bg-orange" },
      { label: "Protein", value: "18g", icon: "fa-solid fa-dumbbell", color: "bg-blue" },
      { label: "Carbohydrates", value: "58g", icon: "fa-solid fa-wheat-awn", color: "bg-yellow" },
      { label: "Fat", value: "20g", icon: "fa-solid fa-droplet", color: "bg-red" },
      { label: "Fiber", value: "10g", icon: "fa-solid fa-leaf", color: "bg-green" },
      { label: "Sodium", value: "540mg", icon: "fa-solid fa-cube", color: "bg-pink" }
    ],
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein"
    ]
  },
  {
    image: "images/photo-2.avif",
    rating: 4.8,
    reviews: 302,
    difficulty: "Medium",
    cuisine: "Thai",
    title: "Spicy Thai Basil Chicken",
    subtitle: "Fragrant stir-fried chicken with chili and Thai basil",
    prepTime: 15,
    cookTime: 15,
    servings: "3 people",
    ingredients: [
      "500g chicken breast, minced",
      "4 cloves garlic, chopped",
      "3 Thai chilies, sliced",
      "1 cup Thai basil leaves",
      "2 tbsp fish sauce",
      "1 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 eggs (for fried egg topping)"
    ],
    instructions: [
      "Heat oil in a wok over high heat, add garlic and chilies.",
      "Add minced chicken and stir-fry until cooked through.",
      "Add fish sauce, soy sauce, and oyster sauce, mix well.",
      "Toss in Thai basil leaves until just wilted.",
      "Fry eggs sunny-side up in a separate pan.",
      "Serve chicken over rice topped with a fried egg."
    ],
    nutrition: [
      { label: "Calories", value: "420 kcal", icon: "fa-solid fa-fire", color: "bg-orange" },
      { label: "Protein", value: "35g", icon: "fa-solid fa-dumbbell", color: "bg-blue" },
      { label: "Carbohydrates", value: "20g", icon: "fa-solid fa-wheat-awn", color: "bg-yellow" },
      { label: "Fat", value: "22g", icon: "fa-solid fa-droplet", color: "bg-red" },
      { label: "Fiber", value: "3g", icon: "fa-solid fa-leaf", color: "bg-green" },
      { label: "Sodium", value: "890mg", icon: "fa-solid fa-leaf", color: "bg-pink" }
    ],
    tips: [
      "Use holy basil if you can find it for a more authentic flavor",
      "Cook on high heat quickly to keep the chicken tender",
      "Adjust chilies to control the spice level",
      "Serve immediately while the basil is fragrant"
    ]
  },
  {
    image: "images/photo-3.avif",
    rating: 4.7,
    reviews: 210,
    difficulty: "Medium",
    cuisine: "Italian",
    title: "Classic Margherita Pizza",
    subtitle: "Simple pizza with tomato, mozzarella, and fresh basil",
    prepTime: 90,
    cookTime: 12,
    servings: "4 people",
    ingredients: [
      "500g pizza dough",
      "200g crushed San Marzano tomatoes",
      "250g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "3 tbsp olive oil",
      "Salt to taste",
      "1 tsp dried oregano",
      "Semolina flour for dusting"
    ],
    instructions: [
      "Preheat oven with a pizza stone to the highest setting.",
      "Stretch the dough into a round base on floured surface.",
      "Spread crushed tomatoes evenly, leaving a border for the crust.",
      "Add mozzarella slices and a drizzle of olive oil.",
      "Bake for 8-12 minutes until the crust is golden and blistered.",
      "Top with fresh basil leaves right before serving."
    ],
    nutrition: [
      { label: "Calories", value: "560 kcal", icon: "fa-solid fa-fire", color: "bg-orange" },
      { label: "Protein", value: "22g", icon: "fa-solid fa-dumbbell", color: "bg-blue" },
      { label: "Carbohydrates", value: "65g", icon: "fa-solid fa-wheat-awn", color: "bg-yellow" },
      { label: "Fat", value: "24g", icon: "fa-solid fa-droplet", color: "bg-red" },
      { label: "Fiber", value: "4g", icon: "fa-solid fa-leaf", color: "bg-green" },
      { label: "Sodium", value: "760mg", icon: "fa-solid fa-leaf", color: "bg-pink" }
    ],
    tips: [
      "Let the dough rest at room temperature before stretching",
      "Use the highest oven temperature possible for a crispy crust",
      "Don't overload with toppings or the crust will get soggy",
      "Fresh mozzarella releases less water if drained well first"
    ]
  },
  {
    image: "images/photo-4.avif",
    rating: 4.3,
    reviews: 98,
    difficulty: "Easy",
    cuisine: "American",
    title: "Avocado Toast Deluxe",
    subtitle: "Crunchy sourdough topped with creamy avocado and egg",
    prepTime: 10,
    cookTime: 5,
    servings: "1 person",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1 poached egg",
      "1 tsp lemon juice",
      "Chili flakes",
      "Cherry tomatoes, halved",
      "Salt and pepper",
      "Extra virgin olive oil"
    ],
    instructions: [
      "Toast the sourdough slices until golden and crisp.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Spread the mashed avocado generously over the toast.",
      "Top with a poached egg and halved cherry tomatoes.",
      "Sprinkle with chili flakes and a drizzle of olive oil.",
      "Serve immediately while the toast is still warm."
    ],
    nutrition: [
      { label: "Calories", value: "340 kcal", icon: "fa-solid fa-fire", color: "bg-orange" },
      { label: "Protein", value: "12g", icon: "fa-solid fa-dumbbell", color: "bg-blue" },
      { label: "Carbohydrates", value: "30g", icon: "fa-solid fa-wheat-awn", color: "bg-yellow" },
      { label: "Fat", value: "20g", icon: "fa-solid fa-droplet", color: "bg-red" },
      { label: "Fiber", value: "9g", icon: "fa-solid fa-leaf", color: "bg-green" },
      { label: "Sodium", value: "310mg", icon: "fa-solid fa-leaf", color: "bg-pink" }
    ],
    tips: [
      "Use ripe avocados that give slightly when pressed",
      "Add a splash of vinegar to the water for cleaner poached eggs",
      "Toast the bread well so it doesn't go soggy under the avocado",
      "A sprinkle of feta cheese is a great optional addition"
    ]
  }
];

let currentIndex = 0;

const els = {
  image: document.getElementById("recipeImage"),
  rating: document.getElementById("ratingValue"),
  reviews: document.getElementById("reviewCount"),
  difficulty: document.getElementById("badgeDifficulty"),
  cuisine: document.getElementById("badgeCuisine"),
  title: document.getElementById("recipeTitle"),
  subtitle: document.getElementById("recipeSubtitle"),
  prepTime: document.getElementById("prepTime"),
  cookTime: document.getElementById("cookTime"),
  servings: document.getElementById("servings"),
  warningBanner: document.getElementById("warningBanner"),
  warningText: document.getElementById("warningText"),
  ingredientsList: document.getElementById("ingredientsList"),
  instructionsList: document.getElementById("instructionsList"),
  nutritionGrid: document.getElementById("nutritionGrid"),
  tipsList: document.getElementById("tipsList"),
  tryAgainBtn: document.getElementById("tryAgainBtn")
};

function renderRecipe(recipe) {
  els.image.src = recipe.image;
  els.image.alt = recipe.title;
  els.rating.textContent = recipe.rating;
  els.reviews.textContent = `(${recipe.reviews} reviews)`;
  els.difficulty.textContent = recipe.difficulty;
  els.cuisine.textContent = recipe.cuisine;
  els.title.textContent = recipe.title;
  els.subtitle.textContent = recipe.subtitle;
  els.prepTime.textContent = `${recipe.prepTime} min`;
  els.cookTime.textContent = `${recipe.cookTime} min`;
  els.servings.textContent = recipe.servings;

  const totalTime = recipe.prepTime + recipe.cookTime;
  if (totalTime > 45) {
    els.warningBanner.style.display = "flex";
    els.warningText.textContent = `This recipe requires more than 45 minutes to prepare. Plan accordingly!`;
  } else {
    els.warningBanner.style.display = "none";
  }

  els.ingredientsList.innerHTML = recipe.ingredients
    .map((item, i) => `
      <div class="ingredient-row">
        <span class="num-circle">${i + 1}</span> ${item}
      </div>
    `).join("");

  els.instructionsList.innerHTML = recipe.instructions
    .map((step, i) => `
      <div class="instruction-row">
        <span class="num-circle-lg">${i + 1}</span>
        <p>${step}</p>
      </div>
    `).join("");

  els.nutritionGrid.innerHTML = recipe.nutrition
    .map(n => `
      <div class="nutrition-item">
        <div class="nutri-icon ${n.color}"><i class="bi ${n.icon}"></i></div>
        <div class="nutri-text"><span>${n.label}</span></div>
        <div class="nutri-value">${n.value}</div>
      </div>
    `).join("");

  els.tipsList.innerHTML = recipe.tips
    .map(tip => `
      <div class="tip-row">
        <i class="fa-solid fa-circle-check"></i>
        <span>${tip}</span>
      </div>
    `).join("");

  const ingredientsTabBtn = document.getElementById("ingredients-tab");
  const tabInstance = bootstrap.Tab.getOrCreateInstance(ingredientsTabBtn);
  tabInstance.show();

  document.querySelector(".scrollable-content").scrollTop = 0;
}

els.tryAgainBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % recipes.length; // ينتقل للوصفة اللي بعدها، ولو خلص الأرايه يرجع لأول واحدة
  renderRecipe(recipes[currentIndex]);
});

renderRecipe(recipes[0]);