"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/img/ClubwizeLogoBlack.png";
import Check from "../../../public/LFR/img/check.png";
import Exclamation from "../../../public/LFR/img/exclamation.png";

function FP() {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginAttempted(true);
    const isEmailCorrect = email === "test@gmail.com";

    setIsEmailValid(isEmailCorrect);
  };


  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg- p-10 rounded-lg">
        <div className="flex justify-center mb-8">
        <div className="w-20 h-20  rounded-full flex items-center justify-center">
            <Image className="w-full rounded-md" src={logo} alt="Logo" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Forgot Password <span>🔓</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
          No worries. We`&apos;`ll send you reset instructions.
        </p>

        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isEmailValid === null
                ? ""
                : isEmailValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {isEmailValid !== null && (
            <span className="absolute right-3 top-10">
              {isEmailValid ? (
                <Image
                  src={Check}
                  alt="check"
                  width={45}
                  height={45}
                  className="text-green-500"
                />
              ) : (
                <Image
                  src={Exclamation}
                  alt="Exclamation"
                  width={25}
                  height={25}
                  className="text-red-500"
                />
              )}
            </span>
          )}
          {loginAttempted && !isEmailValid && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email address
            </p>
          )}
        </div>

        <button
          onClick={handleLoginClick}
          className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-24"
        >
          Forgot Password
        </button>

        <p className="text-center text-gray-600 mt-6">
          Remember your Password{" "}
          <a href="/" className="text-button hover:underline">
            Back
          </a>
        </p>
      </div>
    </div>
  );
}

export default FP;
