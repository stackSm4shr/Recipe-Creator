import { getUserDetails } from "@/app/actions";
// Imports a server action that fetches extra user info (from the database) using their user ID.

import { stackServerApp } from "@/stack/server";
// Imports your configured Stack app instance — used for authentication and route URLs.

import Link from "next/link";
import Image from "next/image";
// Imports Next.js components for navigation links and optimized images.

// This is a Server Component (async) — it runs on the server and can fetch user data securely.
export async function Navbar() {
  // 1️⃣ Get the currently authenticated user from Stack
  const user = await stackServerApp.getUser();

  // 2️⃣ Access pre-built authentication URLs from Stack (sign in, sign out, etc.)
  const app = stackServerApp.urls;

  // 3️⃣ Fetch more detailed user info (like profile picture) from your Neon database
  const userProfile = await getUserDetails(user?.id);

  // 4️⃣ Return the Navbar UI
  return (
    <div className="navbar bg-base-300 shadow-sm">
      {/* Navbar container with light background and small shadow */}

      <div className="flex-1">
        {/* Left section — app logo/title */}
        <a className="btn btn-ghost text-xl" href="/">
          Forklore
        </a>
      </div>

      {/* Right section — navigation links and user menu */}
      <div className="flex gap-2">
        {/* Always show Home link */}
        <Link href="/" className="self-center">
          Home
        </Link>

        {/* A small divider line between links */}
        <div className="divider divider-horizontal divider-primary h-6 self-center"></div>

        {/* "Recipes" link — shown for everyone */}
        {!userProfile ? (
          <Link href="/recipe" className="self-center pe-5">
            Recipes
          </Link>
        ) : (
          <Link href="/recipe" className="self-center">
            Recipes
          </Link>
        )}

        {/* If the user is logged in, show the "Create Recipe" link */}
        {userProfile ? (
          <>
            <div className="divider divider-horizontal divider-primary h-6 self-center"></div>
            <Link href="/createrecipe" className="self-center pe-5">
              Create Recipe
            </Link>
          </>
        ) : null}

        {/* User profile dropdown menu (avatar + options) */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {/* Show the user's avatar if available, otherwise a placeholder image */}
            {userProfile ? (
              userProfile.raw_json.profile_image_url ? (
                <Image
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="w-10 rounded-full"
                  src={userProfile.raw_json.profile_image_url}
                />
              ) : (
                <div className="w-10 rounded-full">
                  <img
                    alt="Placeholder avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              )
            ) : (
              <div className="w-10 rounded-full">
                <img
                  alt="Placeholder avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            )}
          </div>

          {/* Dropdown menu content — changes based on login status */}
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {/* Show account settings if logged in */}
            {userProfile ? (
              <li>
                <a href={app.accountSettings}>Settings</a>
              </li>
            ) : null}

            {/* Show Sign In and Sign Up if user not logged in */}
            {!userProfile ? (
              <li>
                <a href={app.signIn}>Sign In</a>
              </li>
            ) : null}
            {!userProfile ? (
              <li>
                <a href={app.signUp}>Sign Up</a>
              </li>
            ) : null}

            {/* Show Logout if user is logged in */}
            {userProfile ? (
              <li>
                <a href={app.signOut}>Logout</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
