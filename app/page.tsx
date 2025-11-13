import Link from "next/link";
// Import the Link component from Next.js for client-side navigation (no page reloads).

export default function Home() {
  // This is your main homepage component — displayed at the root URL "/".
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 
        A flex container that centers content both vertically and horizontally.
        Tailwind classes:
        - flex: enables Flexbox layout
        - flex-col: stacks children vertically
        - items-center: centers horizontally
        - justify-center: centers vertically
      */}

      <div
        className="hero min-h-screen"
        style={{
          // Add a large hero background image (full screen height)
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg)",
        }}
      >
        {/* 
          'hero' and 'min-h-screen' are DaisyUI + Tailwind utilities:
          - hero: creates a large banner section
          - min-h-screen: makes it take at least the full height of the viewport
        */}

        <div className="hero-overlay"></div>
        {/* A semi-transparent overlay for better contrast on top of the background image */}

        <div className="hero-content text-neutral-content text-center">
          {/* 
            Centers the main hero text and styles it with neutral text colors.
            - hero-content: centers content in the hero section
            - text-neutral-content: ensures readable text on colored backgrounds
            - text-center: centers text alignment
          */}

          <div className="max-w-md">
            {/* Limit text width to make it readable (especially on large screens) */}

            <h1 className="mb-5 text-5xl font-bold">
              Your Recipes. Your Legacy.
            </h1>
            {/* Large, bold headline to capture user attention */}

            <p className="mb-5">
              ForkLore helps you craft, organize, and preserve the flavors and
              stories that make your kitchen unique.
            </p>
            {/* A short descriptive tagline explaining the purpose of the app */}

            <button className="btn btn-primary">
              {/* 
                A call-to-action button styled using DaisyUI’s 'btn btn-primary' classes.
                Inside the button, a Link navigates users to the sign-up page.
              */}
              <Link href="/handler/sign-up">Stir the Lore</Link>
              {/* "Stir the Lore" is your creative way of saying “Get Started” or “Sign Up.” */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
