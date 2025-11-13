import { neon } from "@neondatabase/serverless";
// Import Neon client to connect and run SQL queries on your database

export default async function RecipePage({
  params,
}: {
  params: { id: string }; // Dynamic route parameter (e.g., /recipe/1 → id = "1")
}) {
  const { id } = await params; 
  // Extract the recipe ID from the URL

  // Connect to the Neon database using the connection string from .env
  const sql = neon(process.env.DATABASE_URL!);

  // Fetch the recipe that matches the given ID
  const recipe = await sql`SELECT * FROM recipes WHERE id = ${id}`;

  // Since 'recipe' is an array (one item per row), take the first one
  const item = recipe[0];

  // If no recipe was found, show a simple message
  if (!item) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  // If a recipe was found, display its details
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Full-page hero section with background image */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        {/* Adds a transparent overlay on top of the background image */}

        {/* Main recipe card container */}
        <div className="max-w-5xl py-5">
          <div className="card glass shadow-sm py-5">
            
            {/* Recipe image */}
            <figure>
              <img
                src={
                  item.image_url ||
                  "https://cdn.pixabay.com/photo/2015/11/20/16/27/apple-1053466_1280.jpg"
                  // Fallback image if no image URL is found
                }
                alt={item.title}
                className="px-5"
              />
            </figure>

            {/* Recipe details section */}
            <div className="card-body">
              {/* Title */}
              <h2 className="card-title">{item.title}</h2>

              {/* Description */}
              <p className="underline">Description:</p>
              <p>{item.description}</p>

              {/* Ingredients */}
              <p className="underline">Ingredients:</p>
              <p>{item.ingredients}</p>

              {/* Recipe instructions */}
              <p className="underline">Recipe:</p>
              <p>{item.recipe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
