import "./styles.css";
import { useState } from "react";
import { ClaudRecipe } from "./claudRecipe";
import { Ingredients } from "./ingredients";
export function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function submitDetails(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((data) => [...data, newIngredient]);
  }
  function getRecipe() {
    setRecipe((prev) => !prev);
  }
  return (
    <>
      <main>
        <form className="add-ingredient" action={submitDetails}>
          <input
            type="text"
            name="ingredient"
            placeholder="Add Ingredients"
            aria-label="add-ingredients"
          />
          <button type="submit">+ Add ingredient</button>
        </form>
        <Ingredients
          ingredientsList={ingredientsList}
          ingredients={ingredients}
          handleRecipe={getRecipe}
        />
        {recipe ? <ClaudRecipe /> : null}
      </main>
    </>
  );
}
