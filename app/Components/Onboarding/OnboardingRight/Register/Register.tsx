"use client";

import React, { useState } from "react";
import Image from "next/image";
import eye from "../../../../../public/assets/LFR/img/eye.png";
import view from "../../../../../public/assets/LFR/img/view.png";
import Link from "next/link";
import { routes } from "@/app/Routes/routes";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean | null>(
    null
  );
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailVerified(false);
    setIsEmailValid(false);
  };

  const handleVerifyClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsEmailVerified(true);
      setIsEmailValid(true);
    } else {
      setIsEmailVerified(false);
      setIsEmailValid(false);
    }
  };

  const handleLoginClick = () => {
    setLoginAttempted(true);

    const doNewPasswordsMatch = newPassword === confirmPassword;
    setIsNewPasswordValid(doNewPasswordsMatch);

    if (isEmailVerified && doNewPasswordsMatch) {
      window.location.href = "/onboarding/details";
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className=" w-full flex items-center justify-center bg-white">
      <div className="w-full">
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
                loginAttempted && !isEmailVerified
                  ? "ring-red-300 border-red-500"
                  : ""
              }`}
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
            />
            <span
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-${
                isEmailVerified ? "gray-500" : "green-500"
              }`}
              onClick={handleVerifyClick}
            >
              {isEmailVerified ? "Verified" : "Verify"}
            </span>
          </div>
          {loginAttempted && !isEmailVerified && (
            <p className="text-red-500 text-xs mt-1">
              Please verify your email to continue with Clubwize.
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
          Continue with Clubwize
        </button>

        <p className="text-center text-gray-600 mt-6">
          Already have account?{" "}
          <Link href={routes.onboarding} className="text-button hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
