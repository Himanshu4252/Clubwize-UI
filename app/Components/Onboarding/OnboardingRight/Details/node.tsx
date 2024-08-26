import Image from "next/image";
import Logo from "../../../../../public/assets/Component 4.png";


export default function Node() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-8/12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mb-2">
            Hey, Welcome to Clubwize 👋
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Welcome to the team, rookie! Get ready to crush it with Clubwize!
          </p>

          <div className="flex justify-center my-10">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  1
                </div>
                <span className="ml-2 text-gray-500">Details</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  2
                </div>
                <span className="ml-2 text-gray-500">Picture</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  3
                </div>
                <span className="ml-2 text-gray-500">Interest</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                  ✓
                </div>
                <span className="ml-2 text-green-500">Node</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700">Search Node</h2>
            <div className="relative flex items-center my-5">
              <input
                type="text"
                placeholder="AI_Next"
                className="p-2 pl-5 border rounded-md w-full"
              />
            </div>
          </div>

          <div className="mb-6 flex mt-20">
            <input
              type="checkbox"
              className="mr-2"
            //   checked={termsAccepted}
            //   onChange={handleTermsChange}
            />
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-green-500 underline">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-5 col-span-2">
            <a href="/onboarding/search">
              <button
                type="button"
                className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Back
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
