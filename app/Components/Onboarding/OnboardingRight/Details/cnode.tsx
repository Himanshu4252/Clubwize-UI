"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../../public/assets/Component 4.png";
import rect from "../../../../../public/assets/Onboarding/Rect.png";
import Create from "./Popup/Create";
import Module from "./Popup/Module";
import Created from "./Popup/Created";

export default function CNode() {
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

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
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
                <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
                  3
                </div>
                <span className="ml-2 text-gray-500">Interest</span>
              </div>
              <span className="mx-4 text-gray-300">—</span>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
                  ✓
                </div>
                <span className="ml-2 text-green-500">Node</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700">Search Node</h2>
            <div className="relative flex items-center my-5">
              <input
                type="text"
                placeholder="AI_Next"
                className="p-2 pl-5 border rounded-md w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center bg-green-50 border-2 border-dashed border-green-300 rounded-lg p-2">
              <button onClick={openCreate}>
                <span className="text-green-500">+ Create Node</span>
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <Image src={rect} alt="Node 1" className=" rounded" />
              <h3 className="mt-2 font-medium text-gray-700">AI_Next_Gen</h3>
              <p className=" text-gray-400 text-sm">
                <span role="img" aria-label="users">
                  👥
                </span>{" "}
                20.363k
              </p>
              <p className="text-center text-gray-500 mt-5 bg-gray-200 rounded">
                <span role="img" aria-label="location">
                  📍
                </span>{" "}
                Mumbai, India
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <Image src={rect} alt="Node 2" className=" rounded" />
              <h3 className="mt-2 font-medium text-gray-700">AI_Next_Genre</h3>
              <p className=" text-gray-500 text-sm">
                <span role="img" aria-label="users">
                  👥
                </span>{" "}
                1.23k
              </p>
              <p className="text-center text-gray-500 mt-5 bg-gray-200 rounded">
                <span role="img" aria-label="location">
                  📍
                </span>{" "}
                Surat, India
              </p>
            </div>
          </div>

          <div className="mb-6 flex mt-20">
            <input type="checkbox" className="mr-2" />
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
            <a href="/onboarding/search">
              <button
                type="button"
                className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Back
              </button>
            </a>
          </div>
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
