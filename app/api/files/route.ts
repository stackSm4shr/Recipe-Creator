import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/utils/config";
// Import Pinata client configuration (used to upload files to IPFS via Pinata)

// This route handles POST requests to /api/files (for image uploads)
export async function POST(request: NextRequest) {
  try {
    // Extract the form data sent from the client
    const data = await request.formData();

    // Get the file from the form data
    // 'file' is uploaded from the UploadImg component
    const file: File | null = data.get("file") as unknown as File;

    // Upload the file to Pinata's public IPFS storage
    // This returns a 'cid' (content ID) that uniquely identifies the file on IPFS
    const { cid } = await pinata.upload.public.file(file);

    // Convert the CID into a usable gateway URL
    // This creates a link that anyone can use to access the uploaded image
    const url = await pinata.gateways.public.convert(cid);

    // Send the image URL back to the client (UploadImg)
    return NextResponse.json(url, { status: 200 });
  } catch (e) {
    // If something goes wrong, log the error and return a 500 error response
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
