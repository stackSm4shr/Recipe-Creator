import { neon } from "@neondatabase/serverless";
import { stackServerApp } from "@/stack/server";

export default async function Page() {
  const user = await stackServerApp.getUser();
  async function create(formData: FormData) {
    "use server";
    const sql = neon(process.env.DATABASE_URL!);

    const title = formData.get("title");
    const description = formData.get("description");
    const ingredients = formData.get("ingredients");
    const recipe = formData.get("recipe");

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof ingredients !== "string" ||
      typeof recipe !== "string" ||
      !title.trim() ||
      !description.trim() ||
      !ingredients.trim() ||
      !recipe.trim()
    ) {
      throw new Error("All fields are required.");
    }

    await sql`
      INSERT INTO recipes (title, description, ingredients, recipe, user_id)
      VALUES (${title}, ${description}, ${ingredients},${recipe} , ${user?.id})
    `;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/29/06/15/tomatoes-1867744_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <form
          action={create}
          className="flex flex-col gap-3 max-w-xl min-w-md p-6"
        >
          <input
            type="text"
            name="title"
            placeholder="Recipe title"
            className="border p-2 rounded glass"
            required
          />
          <textarea
            name="description"
            placeholder="Short description"
            className="border p-2 rounded  glass"
            rows={3}
            required
          />
          <textarea
            name="ingredients"
            placeholder="Ingredients (one per line or comma separated)"
            className="border p-2 rounded  glass"
            rows={8}
            required
          />
          <textarea
            name="recipe"
            placeholder="Recipe"
            className="border p-2 rounded  glass"
            rows={8}
            required
          />
          <div className="self-center">
            <button type="submit" className="btn btn-primary">
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
