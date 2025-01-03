import "./styles.css";
export function ClaudRecipe() {
  return (
    <>
      <section>
        <h2>Suggested recipe:</h2>
        <div className="ingredientListFromClaud">
          <p>
            Based on your available ingredients, I would recommend making a
            Creamy Garlic Parmesan Chicken dish. Here’s the recipe:
          </p>
          <br />
          <h3>Ingredients:</h3>
          <ul>
            <li>4 boneless, skinless chicken breasts</li>
            <li>Salt and pepper to taste</li>
            <li>2 tablespoons olive oil</li>
            <li>4 cloves garlic, minced</li>
            <li>1 cup heavy cream</li>
          </ul>
          <h3>Instructions:</h3>
          <ol>
            <li>
              Season the Chicken: Season the chicken breasts with salt and
              pepper on both sides.
            </li>
            <li>
              Cook the Chicken: In a large skillet, heat the olive oil over
              medium-high heat. Add the chicken breasts and cook for 5-7 minutes
              on each side, or until golden brown and cooked through. Remove the
              chicken from the skillet and set it aside.
            </li>
            <li>
              Sauté Garlic: In the same skillet, reduce the heat to medium. Add
              the minced garlic and sauté for about 1 minute until fragrant.
            </li>
            <li>
              Make the Sauce: Add the heavy cream, chicken broth, and Italian
              seasoning to the skillet. Stir to combine and bring the mixture to
              a simmer.
            </li>
            <li>
              Add Parmesan: Stir in the Parmesan cheese and let it melt into the
              sauce. Continue to simmer for about 2-3 minutes until the sauce
              thickens slightly.
            </li>
            <li>
              Optional Add-ins: If using, add the fresh spinach and sun-dried
              tomatoes to the sauce. Cook for an additional 2-3 minutes until
              the spinach is wilted.
            </li>
            <li>
              Combine with Chicken: Return the chicken breasts to the skillet,
              spooning the sauce over them. Let everything simmer together for a
              couple of minutes until the chicken is heated through.
            </li>
            <li>
              Serve: Garnish with fresh parsley and serve the chicken with the
              creamy garlic Parmesan sauce over pasta, rice, or mashed potatoes.
            </li>
          </ol>
          <p>Enjoy!</p>
        </div>
      </section>
    </>
  );
}
