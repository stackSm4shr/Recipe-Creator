import RecipeFormClient from "../components/RecipeFormClient";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/29/06/15/tomatoes-1867744_1280.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <RecipeFormClient />
        </div>
      </div>
    </>
  );
}
