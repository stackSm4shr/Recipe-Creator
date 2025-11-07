import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Your Recipes. Your Legacy.
            </h1>
            <p className="mb-5">
              ForkLore helps you craft, organize, and preserve the flavors and
              stories that make your kitchen unique.
            </p>
            <button className="btn btn-primary">
              <Link href="/handler/sign-up">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
