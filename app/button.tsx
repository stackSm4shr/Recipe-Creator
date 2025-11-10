"use client";
import { useRouter } from "next/navigation";

type ButtonProps = {
  id: string | number;
};

export default function Button({ id }: ButtonProps) {
  const router = useRouter();

  return (
    <button className="btn btn-primary max-w-24 self-center mb-6" type="button" onClick={() => router.push(`/recipe/${id}`)}>
      Recipe
    </button>
  );
}
