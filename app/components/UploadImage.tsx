"use client";

import { useState } from "react";

export default function UploadImg({
  onUploaded,
}: {
  onUploaded: (url: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);

    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });

      const signedUrl = await res.json();
      console.log("URL from upimg: ", signedUrl);
      onUploaded(signedUrl);
    } catch (e) {
      console.error("Upload error:", e);
    }

    setUploading(false);
  };

  return (
    <div className="flex gap-3 items-center">
      <input
        type="file"
        className="hidden"
        id="fileInput"
        onChange={(e) => setFile(e.target?.files?.[0] ?? null)}
      />

      <label htmlFor="fileInput" className="btn btn-secondary">
        Choose Image
      </label>

      <button
        type="button"
        className="btn btn-primary"
        disabled={!file || uploading}
        onClick={uploadFile}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}
