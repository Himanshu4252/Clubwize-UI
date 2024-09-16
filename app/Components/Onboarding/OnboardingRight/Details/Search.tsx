"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../../public/assets/Component 4.png";
import Create from "./Popup/Create";
import Module from "./Popup/Module";
import Created from "./Popup/Created";
import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "@/app/Routes/routes";

export default function Search() {
  const [nodeName, setNodeName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const isFormValid = nodeName !== "" && pinCode !== "" && termsAccepted;

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isCreatedOpen, setIsCreatedOpen] = useState(false);


  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);

  const openCreate = () => setIsCreateOpen(true);
  const closeCreate = () => setIsCreateOpen(false);
  const openModule = () => setIsModuleOpen(true);
  const closeModule = () => setIsModuleOpen(false);

  const handleNextClick = () => {
    closeCreate();
    openModule();
  };

  const handleAfter = () => {
    closeModule();
    openCreated();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
       window.location.href ="/onboarding/node";
    }
  };


  const handleCreateNodeClick = () => {
    openCreate();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="absolute top-20 right-20 sm:top-10 sm:right-10 text-green-500">
          <a href="/onboarding/node">Skip Flow</a>
        </div>
        <div className="w-8/12 md:w-10/12">
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
              <span className="mx-4 md:mx-2 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  2
                </div>
                <span className="ml-2 text-gray-500">Picture</span>
              </div>
              <span className="mx-4 md:mx-2 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  3
                </div>
                <span className="ml-2 text-gray-500">Interest</span>
              </div>
              <span className="mx-4 md:mx-2 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                  ✓
                </div>
                <span className="ml-2 text-green-500">Node</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-full max-w-md">
              <label className="block font-medium text-base">
                Enter Your Node Name
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={nodeName}
                  onChange={(e) => setNodeName(e.target.value)}
                  className="p-2 border rounded-md w-full mt-1 text-base font-light"
                />
              </label>
            </div>

            <div className="w-full max-w-md">
              <label className="block font-medium text-base">
                Pin Code
                <input
                  type="number"
                  name="pincode"
                  placeholder="Enter Code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="p-2 border rounded-md w-full mt-1 text-base font-light"
                />
              </label>
            </div>

            <div className="flex flex-col items-center pt-10 space-y-4 w-full max-w-md ">
              <button
                type="submit"
                className={`px-10 py-2 rounded-lg text-white w-full max-w-md ${
                  isFormValid
                    ? "bg-green-500 text-white"
                    : "bg-green-300 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Search node
              </button>

              <button
                type="button"
                onClick={handleCreateNodeClick}
                className="text-green-500"
              >
                + Create a node
              </button>
            </div>

            <div className="flex flex-col w-full">
              <div className="mb-6 flex mt-10 ">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mr-2"
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
                <Link href={routes.interest}>
                  <button
                    type="button"
                    className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
                  >
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <Create
          isOpen={isCreateOpen}
          onClose={closeCreate}
          onNext={handleNextClick}
        />
        <Module
          isOpen={isModuleOpen}
          onClose={closeModule}
          after={handleAfter}
        />
        <Created isOpen={isCreatedOpen} onClose={closeCreated} />
      </div>
    </>
  );
}
