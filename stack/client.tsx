import { StackClientApp } from "@stackframe/stack";
// Import the client-side Stack class.
// This handles authentication and session management inside the browser (client-side).

// Create and export a new Stack client app instance.
export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  // This tells Stack to store authentication tokens using Next.js cookies.
  // ✅ Benefits:
  // - Keeps the user logged in across page reloads.
  // - Works securely with Next.js Server Components.
  // - Allows both client and server to share the same authentication session.
});
