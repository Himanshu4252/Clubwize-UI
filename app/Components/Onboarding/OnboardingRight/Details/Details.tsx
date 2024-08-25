"use client"

import React, { useState } from "react";
import Logo from "../../../../../public/assets/Component 4.png";
import Image from "next/image";

export default function Details() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    phoneNumber: "",
    gender: "",
    terms: false,
  });

  const isFormValid =
    formData.username &&
    formData.firstName &&
    formData.lastName &&
    formData.birthdate &&
    formData.phoneNumber &&
    formData.gender &&
    formData.terms;

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) {
        const { name, value, type } = event.target;
        const newValue =
          type === "checkbox" && event.target instanceof HTMLInputElement
            ? event.target.checked
            : value;
      
        setFormData({
          ...formData,
          [name]: newValue,
        });
      }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid) {
      window.location.href = "/onboarding/pictures";
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-8/12">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold mb-2">
          Hey, Welcome to Clubwize 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Welcome to the team, rookie! Get ready to crush it with Clubwize!
        </p>

        {/* Progress Steps */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                ✓
              </div>
              <span className="ml-2 text-green-500">Details</span>
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

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter first name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter last name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Birthdate
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
              </span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone number"
                required
                className="block w-full flex-1 p-2 border border-gray-300 rounded-r-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Terms of Service */}
          <div className="mt-6 flex items-start col-span-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
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

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-5 col-span-2">
            <a href="/onboarding/register">
              <button
                type="button"
                className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Back
              </button>
            </a>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-10 py-2 rounded-lg ${
                isFormValid
                  ? "bg-green-500 text-white"
                  : "bg-green-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
