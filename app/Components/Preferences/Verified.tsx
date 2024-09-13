import React from "react";
import Image from "next/image";
import time from "../../../public/assets/pef/time.svg"

interface ModuleProps {
    isOpen: boolean;
  }
  
  export default function Verified({ isOpen}: ModuleProps) {
    if (!isOpen) return null; 
    return(
        <>
        <p className="text-sm my-5">
        {" "}
        <span className="underline">
          <a href="/preference">Preferences</a>
        </span>{" "}
        &gt; Verification{" "}
      </p>
        <div className="bg-white p-6 py-20 rounded-lg shadow-md w-full flex flex-col justify-center items-center">
            <Image src={time} alt="time" />
            <h1 className="text-lg font-bold">You are Verified! 🥳</h1>
            <p className="text-center text-sm font-light px-20 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        </>
    );
  }