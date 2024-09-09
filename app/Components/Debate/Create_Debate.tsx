"use client";
import React from "react";

interface CreateDebateProps {
  onClose: () => void;
}

const CreateDebate: React.FC<CreateDebateProps> = ({ onClose }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 p-5">
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="topic" className="text-sm font-medium">
              Debate Topic
            </label>
            ?
          </div>
          <input
            id="topic"
            type="text"
            placeholder="Enter topic"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="closingDate" className="text-sm font-medium">
              Closing date if any
            </label>
            ?
          </div>
          <input
            id="closingDate"
            type="date"
            placeholder="DD-MM-YYYY"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="significance" className="text-sm font-medium">
              Significance
            </label>
            ?
          </div>
          <input
            id="significance"
            type="text"
            placeholder="Significance"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="targetAudience" className="text-sm font-medium">
              Target Audience
            </label>
            ?
          </div>
          <input
            id="targetAudience"
            type="text"
            placeholder="Select Audience"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="tags" className="text-sm font-medium">
              Tags
            </label>
            ?
          </div>
          <input
            id="tags"
            type="text"
            placeholder="Tags..."
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="files" className="text-sm font-medium">
              Files/Media
            </label>
            ?
          </div>
          <div className="border-dashed border-2 rounded-lg p-4 text-center">
            <input id="files" type="file" className="w-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="openingFor" className="text-sm font-medium">
              Opening Comments (For)
            </label>
            ?
          </div>
          <textarea
            id="openingFor"
            placeholder="Write here..."
            className="w-full border p-3 rounded-lg h-28"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="openingAgainst" className="text-sm font-medium">
              Opening Comments (Against)
            </label>
            ?
          </div>
          <textarea
            id="openingAgainst"
            placeholder="Write here..."
            className="w-full border p-3 rounded-lg h-28"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Make this Debate public</span>
        </label>
      </div>
      <div className="flex justify-end mt-8 space-x-4">
        <button className="text-red-500" onClick={onClose}>
          Cancel
        </button>
        <button
          className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Save draft
        </button>
        <a href="/debate">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Publish
          </button>
        </a>
      </div>
    </> 
  );
};

export default CreateDebate;
