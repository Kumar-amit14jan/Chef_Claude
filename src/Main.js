import "./styles.css";
import { useState } from "react";
export function Main() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function submitDetails(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((data) => [...data, newIngredient]);
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
      </main>
      <ul>{ingredientsList}</ul>
    </>
  );
}
