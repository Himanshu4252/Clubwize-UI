import { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onThen: () => void;
  closeThen: () => void;
}

export default function Picture({ isOpen, onClose, onThen ,closeThen }: ModuleProps) {
  const [imageUploaded, setImageUploaded] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUploaded(true);
    } else {
      setImageUploaded(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-10">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-2xl font-medium text-gray-700">Create new team</h2>
          <button onClick={onClose} className="text-gray-400">
            X
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-between mt-10 mb-6">
          <div className="flex items-center space-x-4">
            <span className="flex items-center justify-center w-6 h-6 bg-gray-300 text-gray-400 rounded-full">
              1
            </span>
            <span className="text-gray-400">Members</span>
          </div>
          <span className="mx-4 text-gray-300">—</span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-400">2</span>
            <span className="text-gray-400">Name</span>
          </div>
          <span className="mx-4 text-gray-300">—</span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">✔</span>
            <span className="text-green-500">Picture</span>
          </div>
        </div>

        <div className="relative mb-6 space-y-2">
          <label className="text-gray-800 font-bold mb-2">
            Profile Photo
          </label>
          <input
            type="file"
            className="w-full bg-gray-100 border-2 rounded-md px-5 py-5"
            onChange={handleImageUpload}
          />
        </div>

        <div className="flex justify-end mt-6 gap-5">
          <button onClick={closeThen} className="text-gray-800 border px-2 text-sm rounded border-gray-200">Previews</button>
          <button
            onClick={onThen}
            className={`px-4 py-2 text-sm text-white rounded ${imageUploaded ? "bg-green-500" : "bg-green-200"}`}
            disabled={!imageUploaded}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
