"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Logo from "../../../../../public/assets/Component 4.png";

export default function Pictures() {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);

  const profilePhotoInputRef = useRef<HTMLInputElement>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfilePhoto(file);
  };

  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCoverPhoto(file);
  };

  const handleDeleteProfilePhoto = () => {
    setProfilePhoto(null);
    if (profilePhotoInputRef.current) {
      profilePhotoInputRef.current.value = ""; 
    }
  };

  const handleDeleteCoverPhoto = () => {
    setCoverPhoto(null);
    if (coverPhotoInputRef.current) {
      coverPhotoInputRef.current.value = ""; 
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const isFormValid = profilePhoto && termsAccepted;

  const handleSubmit = ()=>{
    if (isFormValid) {
        window.location.href = "/onboarding/interest";
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
                <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                  ✓
                </div>
                <span className="ml-2 text-green-500">Picture</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

    
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  3
                </div>
                <span className="ml-2 text-gray-500">Interest</span>
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

          <div className="flex gap-5 my-10">
         
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2">
                Profile Photo
              </label>
              <input
                type="file"
                ref={profilePhotoInputRef}
                className="w-full bg-gray-100 border-2 rounded-md px-5 py-5"
                onChange={handleProfilePhotoChange}
              />
              {profilePhoto && (
                <div className="mt-4 flex items-center bg-gray-100 border-2 rounded-md px-5 py-2 justify-between">
                  <img
                    src={URL.createObjectURL(profilePhoto)}
                    alt="Profile Preview"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="ml-4 text-red-500"
                    onClick={handleDeleteProfilePhoto}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

        
            <div className="mb-6">
              <label className="text-gray-800 font-bold mb-2">
                Cover Photo
              </label>
              <input
                type="file"
                ref={coverPhotoInputRef}
                className="w-full bg-gray-100 border-2 rounded-md px-5 py-5"
                onChange={handleCoverPhotoChange}
              />
              {coverPhoto && (
                <div className="mt-4 flex items-center bg-gray-100 border-2 rounded-md px-5 py-2 justify-between">
                  <img
                    src={URL.createObjectURL(coverPhoto)}
                    alt="Cover Preview"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="ml-4 text-red-500"
                    onClick={handleDeleteCoverPhoto}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mb-6 flex">
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
            <a href="/onboarding/details">
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
