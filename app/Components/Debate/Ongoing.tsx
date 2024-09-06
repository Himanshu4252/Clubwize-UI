"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import A1 from "../../../public/assets/debate/Avatar1.png";
import A2 from "../../../public/assets/debate/Avatar2.png";
import A3 from "../../../public/assets/debate/Avatar3.png";
import A4 from "../../../public/assets/debate/Avatar4.png";
import A5 from "../../../public/assets/debate/Avatar5.png";
import A6 from "../../../public/assets/debate/Avatar6.png";
import A7 from "../../../public/assets/debate/Avatar7.png";
import A8 from "../../../public/assets/debate/Avatar8.png";
import A9 from "../../../public/assets/debate/Avatar9.png";
import CreateDebate from "./Create_Debate";

const debates = [
  {
    title: "Climate Change Regulations",
    description: "Addressing the impact of human activity on th...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "Jan 13, 2022",
    posterName: "Marvin McKinney",
    posterImage: A1,
  },

  {
    title: "Universal Basic Income (UBI)",
    description: "Addressing income inequality and automation...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "November 7, 2017",
    posterName: "Arlene McCoy",
    posterImage: A2,
  },

  {
    title: "Legalization of Marijuana",
    description: "Exploring the social and economic impacts of c...",
    for: 18,
    against: 18,
    status: "Ended",
    statusColor: "gray",
    date: "July 24, 2013",
    posterName: "Guy Hawkins",
    posterImage: A3,
  },

  {
    title: "Gun Control Measures",
    description: "Addressing gun violence and Second Amend...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "July 14, 2015",
    posterName: "Devon Lane",
    posterImage: A4,
  },

  {
    title: "Mandatory Vaccination Policies",
    description: "Balancing public health conserns with persona...",
    for: 18,
    against: 18,
    status: "Ended",
    statusColor: "gray",
    date: "May 6, 2012",
    posterName: "Savannah Nguyen",
    posterImage: A5,
  },

  {
    title: "Internet Privacy Laws",
    description: "Addressing data production and online suveill...",
    for: 18,
    against: 18,
    status: "Ended",
    statusColor: "gray",
    date: "August 7, 2017",
    posterName: "Cody Fisher",
    posterImage: A6,
  },

  {
    title: "Electoral College Reform",
    description: "Examining the fairness and efficancy of the curr...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",
    posterName: "Kristin Watson",
    posterImage: A7,
  },

  {
    title: "Artificial Intelligence Ethics",
    description: "Discussing ethical implications of AI developm...",
    for: 18,
    against: 18,
    status: "Ended",
    statusColor: "gray",
    date: "OCtober 30, 2017",
    posterName: "Cameron Williamson",
    posterImage: A8,
  },

  {
    title: "Universal Healthcare",
    description: "Exploring healthcare accessibility and affordab...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",
    posterName: "Floyd Miles",
    posterImage: A9,
  },
];

interface OngoingProps {
    onClose: () => void;
  }
  
const Ongoing : React.FC<OngoingProps> = ({ onClose }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleCreateDebateClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const Going = (
    <>
      <div className="my-6">
        <h1 className="text-xl font-semibold pb-2">Community Debate ?</h1>
        <p className="text-gray-600 text-xs">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at
          egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
      <div className="flex space-x-8">
        <button className=" text-green-600 border-b-2 border-green-600 text-sm">Ongoing Debates (182)</button>
        <button 
        onClick={onClose}
        className="text-gray-500 text-sm">
          All Debates (652)
        </button>
        <button className="text-gray-500 text-sm">Global Debates (45k)</button>
        <button className="text-gray-500 text-sm">My Debates (2.36k)</button>
      </div>
      <hr className="mb-4 " />
      <div className="flex items-center justify-between mb-4 space-x-2">
        <button
          onClick={handleCreateDebateClick}
          className="bg-green-500 text-white px-4 py-2 w-48 rounded-lg text-sm font-light hover:bg-black"
        >
          + Create New Debate
        </button>

        <input
          type="text"
          placeholder="Search for debates..."
          className="border p-2 rounded-lg w-96 focus:ring-2  focus:ring-green-500"
        />
        <button className="bg-gray-200 p-2 rounded-lg">Filter</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left p-4 text-gray-400 font-normal">No.</th>
              <th className="text-left p-4 text-gray-400 font-normal">
                Debates
              </th>
              <th className="text-left p-4 text-gray-400 font-normal">For</th>
              <th className="text-left p-4 text-gray-400 font-normal">
                Against
              </th>
              
              <th className="text-left p-4 text-gray-400 font-normal">
                Posted Date
              </th>
              <th className="text-left p-4 text-gray-400 font-normal">
                Posted by
              </th>
            </tr>
          </thead>
          <tbody>
            {debates.map((debate, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-sm">{index + 1}</td>
                <td className="p-4">
                  <p className="text-sm font-semibold">{debate.title}</p>
                  <p className="text-gray-600 text-xs">{debate.description}</p>
                </td>
                <td className="p-4 text-blue-600 text-xs">{debate.for}</td>
                <td className="p-4 text-red-600 text-xs">{debate.against}</td>
                <td className="p-4 text-xs">{debate.date}</td>
                <td className="p-4 flex items-center space-x-2">
                  <Image
                    src={debate.posterImage}
                    alt={debate.posterName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-xs">{debate.posterName}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p>Total 85 items</p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <button className="px-3 py-1 bg-gray-200 rounded">...</button>
          <button className="px-3 py-1 bg-gray-200 rounded">5</button>
          <button className="px-3 py-1 bg-gray-200 rounded">6</button>
          <button className="px-3 py-1 bg-gray-200 rounded">7</button>
          <button className="px-3 py-1 bg-gray-200 rounded">...</button>
          <select className="border p-2 rounded-lg">
            <option>10 / page</option>
            <option>20 / page</option>
            <option>30 / page</option>
          </select>
        </div>
      </div>
      
    </>
  );
  return (
    <>
      {!isFormVisible && Going }
      {isFormVisible && <CreateDebate onClose={handleCloseForm} />}
    </>
  )
  
}

export default Ongoing;
