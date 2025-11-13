import RecipeFormClient from "../components/RecipeFormClient";
// Import the RecipeFormClient component — this is the form users fill out to submit a new recipe.

export default function Page() {
  return (
    <>
      {/* Main page container */}
      <div className="flex flex-col items-center justify-center">
        
        {/* Hero section with a full-page background image */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/29/06/15/tomatoes-1867744_1280.jpg)",
              // A decorative background image (food-themed)
          }}
        >
          <div className="hero-overlay"></div>
          {/* Optional transparent overlay on top of the background for visual effect */}

          {/* The recipe form component (where users can enter and upload their recipes) */}
          <RecipeFormClient />
        </div>
      </div>
    </>
  );
}
