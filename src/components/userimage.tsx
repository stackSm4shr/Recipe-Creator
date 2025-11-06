"use client";
import { useUser } from "@stackframe/stack";

export default function UserImage() {
  const user = useUser();
  if (!user) {
    return (
      <>
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </>
    );
  }

  return (
    <>
      <img
        alt="Tailwind CSS Navbar component"
        src={
          user.profileImageUrl
            ? user.profileImageUrl
            : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
      />
    </>
  );
}
