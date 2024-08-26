import React from "react";
import Image from "next/image";
import ph1 from "../../../../public/assets/1.png";
import ph2 from "../../../../public/assets/2.png";
import ph3 from "../../../../public/assets/3.png";
import ph4 from "../../../../public/assets/4.png";
import right from "../../../../public/assets/Group 3.png";

const NodeLeft = () => {
  return (
    <div className="relative bg-onboarding-bg w-full h-full flex  flex-col justify-center items-center bg-right-top bg-no-repeat bg-contain"
    style={{ backgroundImage: `url('/assets/Vector 1.png')` }}
    >
      <h2 className="text-2xl font-bold">What is Node ❓</h2>
      <p className="w-[65%] text-center mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem
        ipsum dolor sit.Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem
        ipsum dolor sit.Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem
        ipsum dolor sit.Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem
        ipsum dolor sit.
      </p>

      <div className="mt-8 flex flex-nowrap flex-row justify-center items-center">
        <p className="text-xl font-bold underline flex mr-2">
          Learn More
        </p>
        <Image src={right} alt="right" width={20} height={20} />
      </div>
      <div className="absolute bg-onboarding-bg  w-full h-[25vh] flex justify-evenly item-center px-4 mt-4 translate-y-64">
        <div className="self-center">
          <Image src={ph1} alt="ph1" width={80} height={80} />
        </div>
        <div></div>
        <div className="self-end">
          <Image src={ph2} alt="ph1" width={120} height={120} />
        </div>
        <div className="self-start">
          <Image src={ph4} alt="ph1" width={65} height={65} />
        </div>
      </div>
    </div>
  );
};

export default NodeLeft;
