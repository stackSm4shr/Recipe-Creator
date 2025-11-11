"use client";

import { useState } from "react";
import UploadImg from "./UploadImage";
import { createRecipeAction } from "../actions/createRecipe";

export default function RecipeFormClient() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }

    const form = new FormData(e.currentTarget as HTMLFormElement);
    form.append("imageUrl", imageUrl);

    setSubmitting(true);

    try {
      await createRecipeAction(form);
      alert("Recipe submitted successfully!");
    } catch (err) {
      console.error("Error submitting recipe:", err);
      alert("Failed to submit recipe.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-xl p-6"
    >
      <input
        name="title"
        placeholder="Recipe title"
        className="border p-2 rounded glass"
        required
      />
      <textarea
        name="description"
        placeholder="Short description"
        className="border p-2 rounded glass"
        rows={3}
        required
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients"
        className="border p-2 rounded glass"
        rows={8}
        required
      />
      <textarea
        name="recipe"
        placeholder="Recipe"
        className="border p-2 rounded glass"
        rows={8}
        required
      />
      <div className="self-center">
        <UploadImg onUploaded={setImageUrl} />
      </div>
      <div className="self-center">
        <button
          className="btn btn-primary mt-4"
          disabled={!imageUrl || submitting}
        >
          {submitting ? "Submitting..." : "Submit Recipe"}
        </button>
      </div>
    </form>
  );
}
