"use client";

import React, { useState } from "react";
import Image from "next/image";
import Ongoing from "./Ongoing";
import All from "./All";
import Global from "./Global";
import CreateDebate from "./Create_Debate";
import My from "./My";
import filter from "../../../public/assets/debate/icons/filter.png"
import sort from "../../../public/assets/debate/icons/sort.png"

function Debate() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "create":
        return <CreateDebate onClose={() => setActiveTab("all")}/>;
      case "ongoing":
        return <Ongoing />;
      case "all":
        return <All />;
      case "global":
        return <Global />;
      case "my":
        return <My />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="my-6">
        <h1 className="text-xl font-semibold pb-2">Community Debate ?</h1>
        <p className="text-gray-600 text-xs">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at
          egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
      <div className="flex space-x-8">
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`text-sm ${
            activeTab === "ongoing"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Ongoing Debates (182)
        </button>

        <button
          onClick={() => setActiveTab("all")}
          className={`text-sm ${
            activeTab === "all"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          All Debates (652)
        </button>

        <button
          onClick={() => setActiveTab("global")}
          className={`text-sm ${
            activeTab === "global"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Global Debates (45k)
        </button>

        <button
          onClick={() => setActiveTab("my")}
          className={`text-sm ${
            activeTab === "my"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          My Debates (2.36k)
        </button>
      </div>

      <hr className="mb-4 " />
      <div className="flex items-center justify-between mb-4 space-x-2">
        <button
          onClick={() => setActiveTab("create")}
          className="bg-green-500 text-white px-4 py-2 w-48 rounded-lg text-sm font-light hover:bg-black"
        >
          + Create New Debate
        </button>

        <input
          type="text"
          placeholder="Search for debates..."
          className="border-2 border-gray-400 p-2 rounded-lg w-96 focus:ring-2  focus:ring-green-500"
        />
        <button className="bg-white border-gray-400 border-2 p-2 rounded-lg"><Image src={filter} alt="filter" /></button>
        <button className="bg-white border-gray-400 border-2 p-2 rounded-lg"><Image src={sort} alt="sort"/></button>
      </div>
      <div className="mt-4">{renderContent()}</div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <p>Total 85 items</p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <button className="px-3 py-1 bg-gray-200 rounded">...</button>
          <button className="px-3 py-1 bg-gray-200 rounded">5</button>
          <button className="px-3 py-1 bg-black rounded text-white">6</button>
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

export default Debate;
