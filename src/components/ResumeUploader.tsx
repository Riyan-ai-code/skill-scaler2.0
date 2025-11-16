"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function ResumeUploader() {
  return (
    <UploadButton<OurFileRouter>
      endpoint="resumeUploader"
      onClientUploadComplete={async (res) => {
        const fileUrl = res?.[0]?.url;

        if (!fileUrl) {
          alert("Upload failed!");
          return;
        }

        console.log("Uploaded resume URL:", fileUrl);

        // ⬅ Send file URL to your backend API
        await fetch("/api/resume/handle-upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fileUrl }),
        });

        alert("Resume uploaded & sent to backend successfully!");
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
