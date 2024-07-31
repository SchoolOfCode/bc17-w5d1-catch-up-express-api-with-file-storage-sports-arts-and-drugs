import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


// Get all recipes
app.get('/recipes', async (req, res) => {
  const recipes = await getRecipes();
  res.json(recipes);
});

//Get recipes by ID
app.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await getRecipeByID(req.params.id);
    if (recipe) {
      res.send(recipe);
    } else {
      res.status(404).send({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).send({ error: "Failed to get recipe" });
  }
});

// Create a recipe
app.post("/api/recipes", async (req, res) =>{
  try {
  const recipe = await createRecipe
  }
})