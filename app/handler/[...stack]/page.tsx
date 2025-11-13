import { StackHandler } from "@stackframe/stack";
// Import the StackHandler component from the Stack SDK.
// StackHandler is used to manage authentication, routing, and session handling for Stack apps.

import { stackServerApp } from "../../../stack/server";
// Import your server-side Stack app configuration.
// This contains settings like your API keys, user authentication logic, and backend connection.

export default function Handler(props: unknown) {
  // This component renders the StackHandler, which takes care of handling
  // all authentication routes and related logic provided by Stack.

  return (
    <StackHandler
      fullPage // This tells StackHandler to take up the full page (no embedding)
      app={stackServerApp} // Pass in your configured Stack app instance
      routeProps={props} // Pass route props from Next.js (used internally by Stack)
    />
  );
}
