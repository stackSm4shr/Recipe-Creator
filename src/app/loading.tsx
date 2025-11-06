export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <>
      <div className="flex my-5 gap-3 items-center justify-center inset-0">
        <span className="loading loading-spinner loading-xl"></span>
        <p className="text-lg font-semibold">Loading</p>
      </div>
    </>
  );
}
