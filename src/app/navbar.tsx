import { getUserDetails } from "@/app/actions";
import { stackServerApp } from "@/stack";
import Link from "next/link";
import Image from "next/image";

export async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Forklore</a>
      </div>
      <div className="flex gap-2">
        <Link href="/" className="self-center">
          Home
        </Link>
        <div className="divider divider-horizontal divider-primary h-6 self-center"></div>
        <Link href="/recipe" className="self-center pe-5">
          Recipe
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {userProfile ? (
              <Image
                src={userProfile?.raw_json.profile_image_url}
                alt="User avatar"
                width={32}
                height={32}
                className="w-10 rounded-full"
              />
            ) : (
              <div className="w-10 rounded-full">
                <img
                  alt="Placeholder avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            )}
          </div>
          <ul
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {userProfile ? (
              <li>
                <a href={app.accountSettings}>Settings</a>
              </li>
            ) : null}
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
