"use client";
import React, { useState } from "react";
import Image from "next/image";
import card from "../../../public/assets/pef/card.svg";
import green from "../../../public/assets/pef/green.svg";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function Status({ isOpen, onClose, onNext }: ModuleProps) {
  const [pinCode, setPinCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinCode(e.target.value);
  };

  const handleVerifyClick = () => {
    if (pinCode === "600042") {
      setIsVerified(true);
    } else {
      setIsVerified(false); 
      alert("Invalid pin code. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <p className="text-sm my-5">
        {" "}
        <span className="underline">
          <a href="/preference">Preferences</a>
        </span>{" "}
        &gt; Verification{" "}
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          Verification Status
        </h2>

        <div className="border-t pt-4">
          <div className="flex items-center mb-2 space-x-2">
            <Image src={card} alt="card" />
            <span className="text-gray-700 font-medium">
              Address Verification
            </span>
          </div>

          {!isVerified && (
            <p className="text-sm text-orange-500 bg-orange-50 p-2 rounded mb-4">
              <strong>Note:</strong> You haven't verified your pin code. Please
              verify to get started with Clubwize.
            </p>
          )}

        
          <div>
            <label htmlFor="pincode">Enter pincode</label>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-green-500"
                placeholder="Enter code"
                value={pinCode}
                onChange={handlePinCodeChange}
              />
              <button
                onClick={handleVerifyClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Verify Number
              </button>
            </div>
          </div>
        </div>

        {isVerified && (
          <div className="border-t pt-4 flex items-center space-x-2">
            <Image src={green} alt="green" />
            <span className="text-gray-700">
              Business Registration Verification
            </span>
          </div>
        )}

        <div className="flex justify-end space-x-4 mt-40">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onNext}
            disabled={!isVerified}
          >
            Get Verified
          </button>
        </div>
      </div>
    </>
  );
}
