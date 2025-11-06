"use client";
import { useUser } from "@stackframe/stack";
import Link from "next/link";

export default function LoginHelper() {
  const user = useUser();

  if (!user) {
    return (
      <>
        {" "}
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </>
    );
  }

  return (
    <>
      {" "}
      <li>
        <Link href="/settings">Settings</Link>
      </li>
      <li>
        <Link href="/handler/sign-out">Logout</Link>
      </li>
    </>
  );
}
