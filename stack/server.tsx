import "server-only";
// This directive ensures this file only runs on the server.
// It prevents it from being bundled or executed on the client side (for security reasons).

import { StackServerApp } from "@stackframe/stack";
// Imports the server-side version of Stack (used for authentication, sessions, and server actions).

import { stackClientApp } from "./client";
// Imports your client-side Stack configuration so the server app can share those settings.

// Create and export a server-side Stack app instance.
// It inherits configuration (like API keys, URLs, and settings) from the client-side app.
export const stackServerApp = new StackServerApp({
  inheritsFrom: stackClientApp,
});
