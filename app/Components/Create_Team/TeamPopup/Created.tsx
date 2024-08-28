import head from "../../../../public/assets/Onboarding/header.png";
import Image from "next/image";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Created({ isOpen, onClose }: ModuleProps) {
    if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 mr-5 mt-5"
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={head} alt="head" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg font-medium">Created Successfully 🥳</h1>
              <p className="text-center text-xs w-3/4 text-gray-400 mt-2 mb-4">
                Creating a code of conduct for a social media group is essential
                to maintain a positive and respectful online{" "}
              </p>
              <a href="/clubwise">
              <button className="border p-2 rounded-xl text-sm mb-4">View Node</button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
