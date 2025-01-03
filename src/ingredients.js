import "./styles.css";
export function Ingredients(props) {
  console.log(props);
  return (
    <>
      <section className="ingredientContainerList">
        {props.ingredients.length > 0 ? <h2>Ingredients in hands:</h2> : null}
        <ul>{props.ingredientsList}</ul>
        {props.ingredients.length >= 4 ? (
          <div className="recepi-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button
              className="get-recipe"
              type="submit"
              onClick={props.handleRecipe}
            >
              Get a recipe
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}
