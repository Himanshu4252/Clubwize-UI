"use client";
import React, { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onThen: () => void;
}

export default function Verify({ isOpen, onClose, onThen }: ModuleProps){
  const [postalVerification, setPostalVerification] = useState(true);

  if (!isOpen) return null;
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <p className="text-sm">
        {" "}
        <span className="underline">
          <a href="/preference">Preferences</a>
        </span>{" "}
        &gt; Verification{" "}
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">
          Verifications
        </h2>
        <hr className="mb-5" />
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <label className="block text-gray-600 mb-2">Node name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

           
            <div>
              <label className="block text-gray-600 mb-2">Legal name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-gray-600 mb-2">Phone number</label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-gray-200 border rounded-l-md">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border-t border-r border-b rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            
            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <label className="block text-gray-600 mb-2">Pin code</label>
              <input
                type="text"
                placeholder="Enter pin code"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            
            <div>
              <label className="block text-gray-600 mb-2">Country</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-gray-600 mb-2">State</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select State</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
              </select>
            </div>

            
            <div>
              <label className="block text-gray-600 mb-2">City</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select City</option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>

         
          <div>
            <label className="block text-gray-600 mb-2">
              Address (Location)
            </label>
            <textarea
              placeholder="Write address..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

         
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={postalVerification}
              onChange={() => setPostalVerification(!postalVerification)}
              className="mr-2 focus:ring-green-500"
            />
            <label className="text-gray-600">
              Send a postal verification code to verify the physical address
            </label>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">
                What type document upload?
              </label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select document</option>
                <option>Aadhar</option>
                <option>Passport</option>
                <option>Driver's License</option>
                <option>Voter ID</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                Verify Business registration
              </label>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-1 text-center cursor-pointer hover:bg-gray-50">
                <span className="text-gray-500">+ Drag or Upload a file</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onThen}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
