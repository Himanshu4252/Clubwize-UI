"use client";

import React, { useState } from "react";
import Image from "next/image";
import facebook from "../../../public/assets/LFR/img/facebook.png";
import google from "../../../public/assets/LFR/img/google.png";
import apple from "../../../public/assets/LFR/img/apple-logo.png";
import logo from "../../../public/assets/Component 4.png";
import Check from "../../../public/assets/valid-icon.png";
import Exclamation from "../../../public/assets/invalid-icon.png";
import eye from "../../../public/assets/LFR/img/eye.png";
import view from "../../../public/assets/LFR/img/view.png";

function Log() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); 

  const handleLoginClick = () => {
    setLoginAttempted(true);
    const isEmailCorrect = email === "test@gmail.com";
    const isPasswordCorrect = password === "qwerty";

    setIsEmailValid(isEmailCorrect);
    setIsPasswordValid(isPasswordCorrect);
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
          Hey, Welcome Back <span>👋</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
          Login to an account and take advantage of exclusive benefits.
        </p>

        <div className="flex gap-4 justify-center mb-6">
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={google}
              alt="Google"
              width={14}
              height={14}
              className="mr-2"
            />
            Google
          </button>
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={facebook}
              alt="Facebook"
              width={14}
              height={14}
              className="mr-2"
            />
            Facebook
          </button>
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={apple}
              alt="Apple"
              width={14}
              height={14}
              className="mr-2"
            />
            Apple
          </button>
        </div>

        <div className="flex items-center my-10">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-gray-300 text-xs font-normal">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
                  width={20}
                  height={20}
                  className="text-green-500"
                />
              ) : (
                <Image
                  src={Exclamation}
                  alt="Exclamation"
                  width={20}
                  height={20}
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

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isPasswordValid === null
                ? ""
                : isPasswordValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
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
          {loginAttempted && !isPasswordValid && (
            <p className="text-red-500 text-xs mt-1">
              Please enter the correct password
            </p>
          )}
          <div className="flex justify-between mt-2">
            <div>
              <input type="checkbox" id="staySignedIn" className="mr-2" />
              <label htmlFor="staySignedIn" className="text-sm text-gray-600">
                Stay Signed In
              </label>
            </div>
            <a href="/Forgot" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          onClick={handleLoginClick}
          className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Login with Clubwize
        </button>

        <p className="text-center text-gray-600 mt-6">
          Didn&apos;t have account?{" "}

          <a href="/onboarding/register" className="text-button hover:underline">

            Get Registered
          </a>
        </p>
      </div>
    </div>
  );
}

export default Log;
