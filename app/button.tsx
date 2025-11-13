"use client";
// This tells Next.js that this component runs on the client side (in the browser)

import { useRouter } from "next/navigation";
// Import the useRouter hook from Next.js — it lets us navigate between pages programmatically

type ButtonProps = {
  id: string | number; // The ID of the recipe (passed in as a prop)
};

// Button component
export default function Button({ id }: ButtonProps) {
  const router = useRouter(); 
  // Get access to the Next.js router so we can navigate to other pages

  return (
    <button
      className="btn btn-primary max-w-24 self-center mb-6" // Tailwind styling for appearance and layout
      type="button"
      onClick={() => router.push(`/recipe/${id}`)} 
      // When the button is clicked, go to the recipe details page (e.g., /recipe/1)
    >
      Recipe
    </button>
  );
}
