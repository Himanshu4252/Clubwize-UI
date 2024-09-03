import React from "react";
import Image,{ StaticImageData } from "next/image";
import A1 from "../../../public/assets/debate/Avatar.png"

interface All {
    title: string;
    for: string;
    against: string;
    statuscolor: string;
    date: string;
    posterName: string;
    posterImage: StaticImageData;
  }
const debates = [
  {
    title: "Climate Change Regulations",
    description: "Addressing the impact of human activity on the climate.",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "Jan 13, 2022",
    posterName: "Marvin",
    posterImage: A1, 
  },

];
function All() {
  return (
    <>
      <div className="my-6">
        <h1 className="text-xl font-semibold pb-2">Community Debate ?</h1>
        <p className="text-gray-600 text-xs">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at
          egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
      <div className="flex space-x-8 mb-4">
        <button className="text-gray-500 text-sm">Ongoing Debates (182)</button>
        <button className=" text-green-600 border-b-2 border-green-600 text-sm">
          All Debates (652)
        </button>
        <button className="text-gray-500 text-sm">Global Debates (45k)</button>
        <button className="text-gray-500 text-sm">My Debates (2.36k)</button>
      </div>
      <div className="flex items-center justify-between mb-4 space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 w-48 rounded-lg text-sm font-light hover:bg-black">
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
              <th className="text-left p-4 text-gray-400 font-normal">Debates</th>
              <th className="text-left p-4 text-gray-400 font-normal">For</th>
              <th className="text-left p-4 text-gray-400 font-normal">Against</th>
              <th className="text-left p-4 text-gray-400 font-normal">Status</th>
              <th className="text-left p-4 text-gray-400 font-normal">Posted Date</th>
              <th className="text-left p-4 text-gray-400 font-normal">Posted by</th>
            </tr>
          </thead>
          <tbody>
            {debates.map((debate, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">
                  <strong>{debate.title}</strong>
                  <p className="text-gray-600">{debate.description}</p>
                </td>
                <td className="p-4 text-blue-600">{debate.for}</td>
                <td className="p-4 text-red-600">{debate.against}</td>
                <td className="p-4">
                  <span className={`text-${debate.statusColor}-600`}>
                    {debate.status}
                  </span>
                </td>
                <td className="p-4">{debate.date}</td>
                <td className="p-4 flex items-center space-x-2">
                  <Image
                    src={debate.posterImage}
                    alt={debate.posterName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{debate.posterName}</span>
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
}

export default All;


