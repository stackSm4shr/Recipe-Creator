"use server";

import { neon } from "@neondatabase/serverless";
import { stackServerApp } from "@/stack/server";

export async function createRecipeAction(formData: FormData) {
  const user = await stackServerApp.getUser();
  const sql = neon(process.env.DATABASE_URL!);

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const ingredients = formData.get("ingredients") as string;
  const recipe = formData.get("recipe") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!title || !description || !ingredients || !recipe) {
    throw new Error("Missing required fields");
  }

  await sql`
    INSERT INTO recipes (title, description, ingredients, recipe, image_url, user_id)
    VALUES (${title}, ${description}, ${ingredients}, ${recipe}, ${imageUrl}, ${user?.id})
  `;
}
