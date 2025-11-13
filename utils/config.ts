import "server-only";
// This ensures the file is only ever imported and executed on the server side.
// It helps protect sensitive data (like your API keys) from being exposed to the browser.

import { PinataSDK } from "pinata";
// Import the official Pinata SDK, which allows you to upload and access files on IPFS.

export const pinata = new PinataSDK({
  // Create a new Pinata client instance that can be used across your app.

  pinataJwt: `${process.env.PINATA_JWT}`,
  // Private Pinata JWT (JSON Web Token) from Pinata account.
  // This is used to authenticate and authorize uploads to your Pinata account.
  // ⚠️ Make sure this key is only available on the server (NEVER in client-side code).

  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`,
  // The base URL of your public Pinata gateway.
  // Example: "https://gateway.pinata.cloud/ipfs"
  // The "NEXT_PUBLIC" prefix allows this to be safely used in client code (it's not secret).
});
