import Image, { StaticImageData } from "next/image";
import React from "react";
import lock from "../../../public/assets/debate/page/lock1.svg";
import more from "../../../public/assets/debate/page/more1.svg";

interface DebatePageProps {
  title: string;
  description: string;
  tag: string;
  tags: string;
  date: string;
  posterName: string;
  posterImage: StaticImageData;
}

export default function DebatePage({
  title,
  description,
  tag,
  tags,
  date,
  posterName,
  posterImage,
}: DebatePageProps) {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-transparent p-4">
        <div className="container mx-auto">
          <p className="text-gray-600">
            {" "}
            <span>
              <a href="/debate" className="hover:underline">
                All Debate
              </a>{" "}
            </span>
            &gt; {title}
          </p>
        </div>
      </div>

      {/* Debate Topic Section */}
      <div className="container mx-auto ">
        <div className="p-2 bg-white shadow-lg">
          <div className="flex justify-between w-full">
            <div className="flex space-x-2">
              <h2 className="text-lg font-medium">
                {title} {title}
              </h2>
              <p className="border border-gray-300 rounded-md w-fit h-fit px-2 py-1 text-gray-500 text-xs ">
                BG3035
              </p>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="flex space-x-2">
                <Image src={lock} alt="lock" width={15} height={10} />
                <p>Private</p>
              </div>
              <Image src={more} alt="more" width={5} />
            </div>
          </div>

          <p className="text-gray-500 text-sm py-3 w-10/12">
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident maiores eos eum at ut praesentium. Odit, laudantium
            iusto assumenda qui odio minus illum et asperiores.{" "}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center mt-2">
            <Image src={posterImage} alt={posterName} />
            <div className="ml-3 flex items-center space-x-3">
              <p className="text-sm font-medium">{posterName}</p>
              <div className="bg-gray-300 w-2 h-2 rounded-lg"></div>
              <p className="text-xs text-gray-500">16 min ago</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium border border-gray-300 rounded-md w-fit h-fit px-2 py-1" >{tag}</p>
          </div>
          </div>
          
        </div>
      </div>

      {/* Tags, Dates, Points Section */}
      <div className="container mx-auto p-6 bg-transparent">
        <div className="flex space-x-4  items-center">
          <p className="text-gray-400">Tags:</p>
          <p className="border border-gray-200 shadow-lg p-2 text-sm rounded-lg">{tags}</p>
          <p className="border border-gray-200 shadow-lg p-2 text-sm rounded-lg">{tags}</p>
        </div>
        <div className="">
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
        <div className=" p-6 ">
          <h3 className="text-lg font-semibold text-blue-500">For (182)</h3>
          <button className="mt-4 bg-blue-100 text-blue-500 py-2 px-4 rounded-md">
            + Add a point for
          </button>

          {/* Points List */}
          <div className="mt-6">
            <div className=" py-4">
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
        <div className=" p-6">
          <h3 className="text-lg font-semibold text-red-500">Against (45)</h3>
          <button className="mt-4 bg-red-100 text-red-500 py-2 px-4 rounded-md">
            + Add a point against
          </button>

          {/* Points List */}
          <div className="mt-6">
            <div className=" py-4">
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
