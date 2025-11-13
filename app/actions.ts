"use server";
// This tells Next.js that this function runs on the server only.
// That means it can safely access environment variables and the database.

import { neon } from "@neondatabase/serverless";
// Import the Neon client for running SQL queries on your PostgreSQL database (hosted on Neon).

// This function fetches user details from the database using their user ID.
export async function getUserDetails(userId: string | undefined) {
  // 1. Ensure the database connection string exists.
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
    // If it's missing, stop execution and throw an error.
  }

  // 2. If no userId was provided (e.g., user not logged in), return null.
  if (!userId) {
    return null;
  }

  // 3. Create a SQL client using the Neon connection URL.
  const sql = neon(process.env.DATABASE_URL!);

  // 4. Query the database for a user that matches the provided user ID.
  // The table 'neon_auth.users_sync' stores user information synced from the auth system.
  const [user] =
    await sql`SELECT * FROM neon_auth.users_sync WHERE id = ${userId};`;

  // 5. Return the first (and likely only) matching user record.
  return user;
}
