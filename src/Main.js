import "./styles.css";
import { useState } from "react";
export function Main() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function submitDetails(event) {
    event.preventDefault();
    console.log("submit details of ingeridents");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    setIngredients((data) => [...data, newIngredient]);
  }
  return (
    <>
      <main>
        <form className="add-ingredient" onSubmit={submitDetails}>
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
