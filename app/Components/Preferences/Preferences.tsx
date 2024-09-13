"use client";
import React, { useState } from "react";
import Verify from "./Verify";
import Status from "./Status";
import Verified from "./Verified";

type PrivacySettingKeys = "seeForm" | "joinForum" | "postOnForum";

const Preferences = () => {
  const [privacySettings, setPrivacySettings] = useState({
    seeForm: true,
    joinForum: false,
    postOnForum: false,
  });
  const [contentApproval, setContentApproval] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  // State to manage visibility of Preferences, Verify, and Status
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isVerifiedOpen, setIsVerifiedopen] = useState(false)
  // Handle privacy settings toggle
  const handleToggle = (setting: PrivacySettingKeys) => {
    setPrivacySettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  // Show Verify component when "Verify now" is clicked
  const handleVerifyClick = () => {
    setIsVerifyOpen(true); // Open the Verify component
    setIsVerified(true);   // Mark as verified
  };

  // Close Verify and open Status after verifying
  const handleThenClick = () => {
    setIsVerifyOpen(false);
    setIsStatusOpen(true);
  };

  // Close Status after moving to the next step
  const handleNextClick = () => {
    setIsStatusOpen(false);
    setIsVerifiedopen(true)
  };

  // Close Preferences when Verify is opened
  if (isVerifyOpen) {
    return (
      <Verify 
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        onThen={handleThenClick}
      />
    );
  }

  // Close Preferences and open Status when verification is done
  if (isStatusOpen) {
    return (
      <Status
        isOpen={isStatusOpen}
        onClose={() => setIsStatusOpen(false)}
        onNext={handleNextClick}
      />
    );
  }

  if (isVerifiedOpen) {
    return (
      <Verified 
      isOpen={isVerifiedOpen}
      />
    )
  }

  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="flex justify-center items-center space-x-2 my-3">
        <hr className="w-1/4" />
        <p className="text-xs">Preferences</p>
        <hr className="w-1/4" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-1">
          Privacy settings
        </h2>
        <hr className="mb-3" />
        <div className="flex items-center justify-between py-2 border-b border-gray-200">
          <p className="text-gray-700">Anyone can see the form</p>
          <button
            onClick={() => handleToggle("seeForm")}
            className={`relative inline-flex items-center h-6 w-11 focus:outline-none ${
              privacySettings.seeForm ? "bg-green-500" : "bg-gray-300"
            } rounded-full`}
          >
            <span
              className={`${
                privacySettings.seeForm ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </button>
        </div>

        {/* Other privacy toggles omitted for brevity */}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-1">
          Content Control
        </h2>
        <hr className="mb-3" />
        <div className="flex items-center justify-between py-2">
          <p className="text-gray-700">
            Content needs approval before being visible to the group.
          </p>
          <button
            onClick={() => setContentApproval(!contentApproval)}
            className={`relative inline-flex items-center h-6 w-11 focus:outline-none ${
              contentApproval ? "bg-green-500" : "bg-gray-300"
            } rounded-full`}
          >
            <span
              className={`${
                contentApproval ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-1">
          Verification
        </h2>
        <hr className="mb-3" />
        <div className="flex justify-between mb-4">
          <p className="text-gray-700 text-sm">
            Verify your Gretchen Lehner nodes right now for a stunning appearance.
          </p>
          <button
            onClick={handleVerifyClick}
            className="text-green-500 font-medium text-sm hover:underline"
          >
            Verify now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
