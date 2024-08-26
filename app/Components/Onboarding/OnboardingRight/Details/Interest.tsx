"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../../public/assets/Component 4.png";
import search from "../../../../../public/assets/Onboarding/search.png";

export default function Interest() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const interests = [
    "UI designs",
    "User interfaces",
    "UI/UX",
    "User interface designs",
    "UX design",
    "Graphic designs",
    "User interfaces design",
    "Users interface",
    "Graphics design",
    "UX designs",
    "UI/UX designs",
    "UI & UX",
    "User Interface",
    "UI Design",
    "UI UX",
    "User interface",
    "UX Design",
    "Graphic design",
    "User interface design",
    "UI design",
  ];

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleInterestClick = (interest: string) => {
    if (!selectedInterests.includes(interest)) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setSelectedInterests(selectedInterests.filter((item) => item !== interest));
  };

  const isFormValid = termsAccepted && selectedInterests.length > 0;

  const handleSubmit = ()=>{
    if (isFormValid) {
        window.location.href = "/onboarding/search";
      }
  }
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="absolute top-20 right-20 text-green-500">
          <a href="/onboarding/node">Skip Flow</a>
        </div>
        <div className="w-8/12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mb-2">
            Hey, Welcome to Clubwize 👋
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Welcome to the team, rookie! Get ready to crush it with Clubwize!
          </p>

          <div className="flex justify-center my-10">
            <div className="flex items-center">
   
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  1
                </div>
                <span className="ml-2 text-gray-500">Details</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

   
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  2
                </div>
                <span className="ml-2 text-gray-500">Picture</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

    
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                ✓
                </div>
                <span className="ml-2 text-green-500">Interest</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

       
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  4
                </div>
                <span className="ml-2 text-gray-500">Node</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700">Choose your Interest</h2>
            <div className="relative flex items-center my-5">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image src={search} alt="Search Icon" width={20} height={20} />
              </div>
              <input
                type="text"
                placeholder="Search for tags etc..."
                className="p-2 pl-10 border rounded-md w-full"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedInterests.map((interest) => (
                <div
                  key={interest}
                  className="border py-1 px-2 rounded-lg text-sm font-medium text-gray-700 flex items-center"
                >
                  {interest}
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveInterest(interest)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className={`border py-1 px-2 rounded-lg text-sm font-medium cursor-pointer ${
                    selectedInterests.includes(interest)
                      ? "bg-gray-300 text-gray-100"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => handleInterestClick(interest)}
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 flex mt-20">
            <input
              type="checkbox"
              className="mr-2"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-green-500 underline">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-5 col-span-2">
            <a href="/onboarding/pictures">
              <button
                type="button"
                className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Back
              </button>
            </a>

            <button
              type="submit"
              onClick={handleSubmit}
              className={`px-10 py-2 rounded-lg ${
                isFormValid
                  ? "bg-green-500 text-white"
                  : "bg-green-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
