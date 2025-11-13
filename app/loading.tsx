export default function Loading() {
  // This component displays a loading spinner and text — shown while a page or data is loading.
  return (
    <>
      {/* 
        A flex container to center the spinner and text.
        Tailwind classes:
        - flex: enables Flexbox layout
        - my-5: adds vertical margin
        - gap-3: adds spacing between spinner and text
        - items-center: centers vertically
        - justify-center: centers horizontally
        - inset-0: helps center relative to its container if needed
      */}
      <div className="flex my-5 gap-3 items-center justify-center inset-0">
        {/* 
          DaisyUI loading spinner
          'loading-infinity' gives an infinity-style spinner
          'loading-xl' makes it extra large for better visibility
        */}
        <span className="loading loading-infinity loading-xl"></span>

        {/* Simple text label next to the spinner */}
        <p className="text-lg font-semibold">Loading</p>
      </div>
    </>
  );
}
