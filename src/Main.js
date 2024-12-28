import "./styles.css";
export function Main() {
  const ingredients = ["chicken", "pepper", "Tomato"];
  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function submitDetails(event) {
    event.preventDefault();
    console.log("submit details of ingeridents");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredients.push(newIngredient);
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
