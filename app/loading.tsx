export default function Loading() {
  return (
    <>
      <div className="flex my-5 gap-3 items-center justify-center inset-0">
        <span className="loading loading-infinity loading-xl"></span>
        <p className="text-lg font-semibold">Loading</p>
      </div>
    </>
  );
}
