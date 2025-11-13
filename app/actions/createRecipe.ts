"use server";
// This tells Next.js that this file runs on the server only —
// meaning it can safely use environment variables, database connections, and secure logic.

import { neon } from "@neondatabase/serverless";
// Import Neon’s client for running SQL queries on your Neon (PostgreSQL) database.

import { stackServerApp } from "@/stack/server";
// Import authentication or server-side app configuration (used to get the logged-in user).

// This async function handles creating (saving) a new recipe in the database.
export async function createRecipeAction(formData: FormData) {
  // Get the currently logged-in user (if authentication is set up)
  const user = await stackServerApp.getUser();

  // Create a database client using Neon connection URL
  const sql = neon(process.env.DATABASE_URL!);

  // Extract fields from the form data sent from RecipeFormClient
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const ingredients = formData.get("ingredients") as string;
  const recipe = formData.get("recipe") as string;
  const imageUrl = formData.get("imageUrl") as string;

  // Check that all required fields are filled out
  if (!title || !description || !ingredients || !recipe) {
    throw new Error("Missing required fields");
    // This prevents saving incomplete data
  }

  // Insert the new recipe into the 'recipes' table
  await sql`
    INSERT INTO recipes (title, description, ingredients, recipe, image_url, user_id)
    VALUES (${title}, ${description}, ${ingredients}, ${recipe}, ${imageUrl}, ${user?.id})
  `;
  // The ${...} syntax safely injects values into the SQL query
  // This adds a new row containing the recipe info, image URL, and the ID of the user who submitted it.
}
