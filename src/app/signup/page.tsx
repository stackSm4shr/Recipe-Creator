import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign Up
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div className="text-center">
            <p className="text-gray-700">Already have an account ?</p>
            <button className="btn">
                  <Link href="/signin">
                    Sign In
                  </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
