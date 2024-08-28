"use client";
import React, { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void; 
}

export default function Create({ isOpen, onClose, onNext }: ModuleProps) {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [nodeName, setNodeName] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const isFormComplete = () => {
    return (
      profilePhoto &&
      nodeName.trim() !== "" &&
      about.trim() !== "" &&
      location.trim() !== "" &&
      description.trim() !== ""
    );
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create node</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                ✓
              </div>
              <span className="ml-2 text-green-500">Details</span>
            </div>
            <span className="mx-4 text-gray-300">—</span>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                2
              </div>
              <span className="ml-2 text-gray-500">Module</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select profile photo
              </label>
              <div className="mt-1 flex items-center">
                <input
                  className="flex justify-center items-center w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setProfilePhoto(e.target.files[0]);
                    } else {
                      setProfilePhoto(null);
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter node name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                About
              </label>
              <textarea
                placeholder="Write text..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select location
              </label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select location</option>
                <option value="Location 1">Location 1</option>
                <option value="Location 2">Location 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Write text..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-5">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Previews
            </button>
            <button
              onClick={onNext}
              className={`px-4 py-2 rounded-md ${
                isFormComplete()
                  ? "bg-green-500 text-white"
                  : "bg-green-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormComplete()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
