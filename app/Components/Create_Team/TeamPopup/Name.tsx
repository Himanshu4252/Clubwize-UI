import { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onAfter: () => void;
  closeAfter: () => void;
  
}

export default function Name({ isOpen, onClose, onAfter , closeAfter}: ModuleProps) {
  const [groupName, setGroupName] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
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
            <span className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">✔</span>
            <span className="text-green-500">Name</span>
          </div>
          <span className="mx-4 text-gray-300">—</span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">3</span>
            <span className="text-gray-400">Picture</span>
          </div>
        </div>

        <div className="relative mb-6 space-y-2">
          <label>Enter Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={handleInputChange}
            placeholder="Enter group name..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex justify-end mt-6 gap-5">
          <button onClick={closeAfter} className="text-gray-800 border px-2 text-sm rounded border-gray-200">Previews</button>
          <button
            onClick={onAfter}
            className={`px-4 py-2 text-sm text-white rounded ${groupName ? "bg-green-500" : "bg-green-200"}`}
            disabled={!groupName}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
