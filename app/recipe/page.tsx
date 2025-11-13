import { neon } from "@neondatabase/serverless"; 
// Import Neon’s serverless client — used to run SQL queries on a Neon (PostgreSQL) database.

import Button from "../button"; 
// Import a Button component (likely used for actions like viewing or deleting a recipe).

export default async function Recipe() {
  // Create a SQL client using your Neon database connection URL
  const sql = neon(process.env.DATABASE_URL!);

  // Fetch all recipes from the 'recipes' table
  const recipes = await sql`SELECT * FROM recipes`;

  // Return the UI that displays all recipes
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero section with a background image */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg)", // Background photo
        }}
      >
        <div className="hero-overlay"></div> 
        {/* Optional overlay (like a dark tint) over the background */}

        {/* Container for recipe cards */}
        <div className="flex flex-wrap gap-6 justify-center py-5">
          {recipes.map((recipe) => (
            // Loop through all recipes and render one card per recipe
            <div key={recipe.id} className="card glass w-96 shadow-sm">
              {/* Recipe image */}
              <figure className="px-10 pt-10">
                <img
                  src={
                    recipe.image_url ||
                    "https://cdn.pixabay.com/photo/2015/11/20/16/27/apple-1053466_1280.jpg"
                    // Fallback image if no image_url is available
                  }
                  alt={recipe.title}
                  className="rounded-xl"
                />
              </figure>

              {/* Card content: title and description */}
              <div className="card-body items-center text-center">
                <h2 className="card-title">{recipe.title}</h2>
                <p>{recipe.description}</p>
              </div>

              {/* Custom Button component — probably links to recipe details or other actions */}
              <Button id={recipe.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
