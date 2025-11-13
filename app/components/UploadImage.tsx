"use client"; 
// This tells Next.js that this component runs on the client side (in the browser)

import { useState } from "react";

// This component handles uploading an image file
// It takes one prop: onUploaded, a function that receives the uploaded image URL
export default function UploadImg({
  onUploaded,
}: {
  onUploaded: (url: string) => void;
}) {
  // 'file' holds the image file selected by the user
  const [file, setFile] = useState<File | null>(null);

  // 'uploading' tracks whether the file is currently being uploaded
  const [uploading, setUploading] = useState(false);

  // This function uploads the selected file to the server
  const uploadFile = async () => {
    if (!file) return; // If no file is selected, stop
    setUploading(true); // Show uploading state

    try {
      // Create a new FormData object to send the file
      const data = new FormData();
      data.append("file", file); // Add the image file to the form data

      // Send the file to the /api/files endpoint (backend handles saving it)
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });

      // Get the response from the server — expected to be the uploaded file URL
      const signedUrl = await res.json();
      console.log("URL from upimg: ", signedUrl);

      // Pass the uploaded image URL back to the parent component (RecipeFormClient)
      onUploaded(signedUrl);
    } catch (e) {
      // If something goes wrong, log the error
      console.error("Upload error:", e);
    }

    // Upload is done (successful or failed)
    setUploading(false);
  };

  return (
    <div className="flex gap-3 items-center">
      {/* Hidden file input for selecting an image */}
      <input
        type="file"
        className="hidden"
        id="fileInput"
        onChange={(e) => setFile(e.target?.files?.[0] ?? null)} 
        // When a file is chosen, store it in 'file'
      />

      {/* Label styled as a button that triggers the hidden file input */}
      <label htmlFor="fileInput" className="btn btn-secondary">
        Choose Image
      </label>

      {/* Upload button */}
      <button
        type="button"
        className="btn btn-primary"
        disabled={!file || uploading} 
        // Disabled until a file is selected or while uploading
        onClick={uploadFile} 
        // When clicked, run the uploadFile() function
      >
        {uploading ? "Uploading..." : "Upload Image"} 
        {/* Changes text while uploading */}
      </button>
    </div>
  );
}
