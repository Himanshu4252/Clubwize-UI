import { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function For({ isOpen, onClose}: ModuleProps) {
  const [imageUploaded, setImageUploaded] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUploaded(true);
    } else {
      setImageUploaded(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (imageUploaded) {
       window.location.href ="/debate/for";
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-2xl font-medium text-gray-700">Add new for point</h2>
          <button onClick={onClose} className="text-gray-400">
            X
          </button>
        </div>
        <hr />
        

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="openingFor" className="text-sm font-medium">
              Write your words
            </label>
            
          </div>
          <textarea
            id="openingFor"
            placeholder="Write words..."
            className="w-full border p-3 rounded-lg h-28"
          />
        </div>

        <div className="relative mb-6 space-y-2">
          <label className="text-gray-800 font-bold mb-2">
            Files/Media
          </label>
          <input
            type="file"
            className="w-full bg-gray-100 border-2 rounded-md px-5 py-5"
            onChange={handleImageUpload}
          />
        </div>

        <div className="flex justify-end mt-6 gap-5">
          <button onClick={onClose} className="text-gray-800 border px-2 text-sm rounded border-gray-200">Cancel</button>
          <button
          onClick={handleButtonClick}
            className={`px-4 py-2 text-sm text-white rounded ${imageUploaded ? "bg-green-500" : "bg-green-200"}`}
            disabled={!imageUploaded}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
