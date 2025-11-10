import { neon } from "@neondatabase/serverless";
import Button from "../button";

export default async function Recipe() {
  const sql = neon(process.env.DATABASE_URL!);
  const recipes = await sql`SELECT * FROM recipes`;
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="flex flex-wrap gap-6 justify-center py-5">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="card glass w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={
                    recipe.image ||
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt={recipe.title}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{recipe.title}</h2>
                <p>{recipe.description}</p>
              </div>
              <Button id={recipe.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
