"use client";

import React, { useState } from "react";
import Image from "next/image";
import facebook from "../../../../public/LFR/img/facebook.png";
import google from "../../../../public/LFR/img/google.png";
import apple from "../../../../public/LFR/img/apple-logo.png";
import logo from "../../../../public/LFR/img/logo.png";

function Greetings() {
 
  return (
   
      
        <>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Welcome To Clubwize<span>👋</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
        Welcome to the team, rookie! Get ready to crush it with Clubwize!
        </p>

        <div className="flex gap-4 justify-center mb-6">
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={google}
              alt="Google"
              width={14}
              height={14}
              className="mr-2"
            />
            Google
          </button>
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={facebook}
              alt="Facebook"
              width={14}
              height={14}
              className="mr-2"
            />
            Facebook
          </button>
          <button className="bg-white border border-gray-300 flex items-center text-base px-6 py-2 rounded-lg shadow hover:bg-gray-100">
            <Image
              src={apple}
              alt="Apple"
              width={14}
              height={14}
              className="mr-2"
            />
            Apple
          </button>
        </div>

        <div className="flex items-center my-10">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-gray-300 text-xs font-normal">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        </>


  );
}

export default Greetings;
