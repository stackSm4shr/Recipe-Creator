"use client"; 
// This tells Next.js that this component runs on the client side (in the browser).

import { useState } from "react";
import UploadImg from "./UploadImage"; // Component for uploading an image
import { createRecipeAction } from "../actions/createRecipe"; // Function that sends form data to the server

export default function RecipeFormClient() {
  // 'imageUrl' will hold the URL of the uploaded image
  const [imageUrl, setImageUrl] = useState<string>("");

  // 'submitting' tracks whether the form is currently being submitted
  const [submitting, setSubmitting] = useState(false);

  // This function handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from reloading on submit

    // If the user hasn't uploaded an image, show a warning and stop the function
    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }

    // Create a FormData object from the form inputs
    const form = new FormData(e.currentTarget as HTMLFormElement);

    // Add the uploaded image URL to the form data
    form.append("imageUrl", imageUrl);

    // Mark the form as submitting (disables the button and shows loading text)
    setSubmitting(true);

    try {
      // Try sending the form data to the server
      await createRecipeAction(form);
      alert("Recipe submitted successfully!");
    } catch (err) {
      // If something goes wrong, show an error message
      console.error("Error submitting recipe:", err);
      alert("Failed to submit recipe.");
    } finally {
      // Always set submitting back to false when finished
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit} // When the form is submitted, run handleSubmit
      className="flex flex-col gap-3 max-w-xl p-6" // Tailwind styling for layout and spacing
    >
      {/* Input for the recipe title */}
      <input
        name="title"
        placeholder="Recipe title"
        className="border p-2 rounded glass"
        required
      />

      {/* Textarea for a short description */}
      <textarea
        name="description"
        placeholder="Short description"
        className="border p-2 rounded glass"
        rows={3}
        required
      />

      {/* Textarea for ingredients */}
      <textarea
        name="ingredients"
        placeholder="Ingredients"
        className="border p-2 rounded glass"
        rows={8}
        required
      />

      {/* Textarea for recipe steps/instructions */}
      <textarea
        name="recipe"
        placeholder="Recipe"
        className="border p-2 rounded glass"
        rows={8}
        required
      />

      {/* Image upload component */}
      <div className="self-center">
        {/* UploadImg lets the user upload an image. 
            Once uploaded, it calls setImageUrl() with the new image URL. */}
        <UploadImg onUploaded={setImageUrl} />
      </div>

      {/* Submit button */}
      <div className="self-center">
        <button
          className="btn btn-primary mt-4"
          disabled={!imageUrl || submitting} 
          // Button is disabled if no image is uploaded or the form is submitting
        >
          {submitting ? "Submitting..." : "Submit Recipe"}
          {/* Shows "Submitting..." while the form is being processed */}
        </button>
      </div>
    </form>
  );
}
