"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/Component 4.png";
import eye from "../../../../public/assets/LFR/img/eye.png";
import view from "../../../../public/assets/LFR/img/view.png";

function Reset() {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState<
    boolean | null
  >(null);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean | null>(
    null
  );
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginAttempted(true);

    const isCurrentPasswordCorrect = currentPassword === "qwerty";
    setIsCurrentPasswordValid(isCurrentPasswordCorrect);
    
    const doNewPasswordsMatch = newPassword === confirmPassword;
    setIsNewPasswordValid(doNewPasswordsMatch);

    if (isCurrentPasswordCorrect && doNewPasswordsMatch) {
      window.location.href = "/Reset/Success";
      console.log("Password reset successful!");
    }

    
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg- p-10 rounded-lg">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Reset Password <span>🔑</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
          Your new password must be different from the previous one.
        </p>

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isCurrentPasswordValid === null
                ? ""
                : isCurrentPasswordValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type={isPasswordVisible ? "text" : "password"}
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter Current Password"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <Image src={view} alt="eye" width={20} />
            ) : (
              <Image src={eye} alt="eye" width={20} />
            )}
          </span>
          {loginAttempted && !isCurrentPasswordValid && (
            <p className="text-red-500 text-xs mt-1">
              Please enter the correct current password
            </p>
          )}
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isNewPasswordValid === null
                ? ""
                : isNewPasswordValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type={isPasswordVisible ? "text" : "password"}
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <Image src={view} alt="eye" width={20} />
            ) : (
              <Image src={eye} alt="eye" width={20} />
            )}
          </span>
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm New Password
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isNewPasswordValid === null
                ? ""
                : isNewPasswordValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type={isPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <Image src={view} alt="eye" width={20} />
            ) : (
              <Image src={eye} alt="eye" width={20} />
            )}
          </span>
          {loginAttempted && !isNewPasswordValid && (
            <p className="text-red-500 text-xs mt-1">
              New passwords do not match. Please try again.
            </p>
          )}
        </div>
        
          <button
            onClick={handleLoginClick}
            className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Reset Password
          </button>

        <p className="text-center text-gray-600 mt-6">
          Remember your Password?{" "}
          <a href="/" className="text-button hover:underline">
            Back
          </a>
        </p>
      </div>
    </div>
  );
}

export default Reset;
