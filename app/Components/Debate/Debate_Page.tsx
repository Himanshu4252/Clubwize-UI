import Image, { StaticImageData } from "next/image";
import React from "react";

interface DebatePageProps {
  title: string;
  description: string;
  date: string;
  posterName: string;
  posterImage: StaticImageData;
}

export default function DebatePage({
  title,
  description,
  date,
  posterName,
  posterImage,
}: DebatePageProps) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Community Debate</h1>
          <p className="text-gray-600">
            {" "}
            <span>
              <a href="/debate">Debate</a>
            </span>
            &gt; {title}
          </p>
        </div>
      </div>

      {/* Debate Topic Section */}
      <div className="container mx-auto my-6 p-6 bg-white shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <div className="flex items-center mt-2">
              <Image
                src={posterImage}
                alt={posterName}
              />
              <div className="ml-3">
                <p className="text-sm font-medium">{posterName}</p>
                <p className="text-xs text-gray-500">16 min ago</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 text-gray-800 text-xs p-2 rounded-lg">
            Environmental Advocacy Group
          </div>
        </div>
      </div>

      {/* Tags, Dates, Points Section */}
      <div className="container mx-auto grid grid-cols-2 gap-4 p-6 bg-white shadow-md">
        <div className="flex space-x-4">
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            Environment
          </span>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            Environmental
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm">
            Date Started: {date} | Close Date: {date}
          </p>
          <p className="text-sm">
            Points: 457 | Views: 12.5k | Contributors: 2.3k
          </p>
        </div>
      </div>

      {/* For and Against Sections */}
      <div className="container mx-auto grid grid-cols-2 gap-6 my-6">
        {/* For Section */}
        <div className="bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-blue-500">For (182)</h3>
          <button className="mt-4 bg-blue-100 text-blue-500 py-2 px-4 rounded-md">
            + Add a point for
          </button>

          {/* Points List */}
          <div className="mt-6">
            <div className="border-b border-gray-200 py-4">
              <p className="font-medium">
                Hospital staff must prioritize patient care and well-being...
              </p>
              <div className="flex items-center justify-between mt-2 text-gray-500">
                <span className="text-sm">Annette Black</span>
                <div className="flex space-x-2 text-sm">
                  <span>231</span>
                  <span>23</span>
                  <span>23</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Against Section */}
        <div className="bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-red-500">Against (45)</h3>
          <button className="mt-4 bg-red-100 text-red-500 py-2 px-4 rounded-md">
            + Add a point against
          </button>

          {/* Points List */}
          <div className="mt-6">
            <div className="border-b border-gray-200 py-4">
              <p className="font-medium">
                Hospital staff must prioritize patient care and well-being...
              </p>
              <div className="flex items-center justify-between mt-2 text-gray-500">
                <span className="text-sm">Annette Black</span>
                <div className="flex space-x-2 text-sm">
                  <span>231</span>
                  <span>23</span>
                  <span>23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
