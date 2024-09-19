"use client"
import React, { useState } from "react";
import Image from "next/image";
import backG from "./Assets/image 1.png";
import profile from "./Assets/Pfotile pic (1).png";
import buttum from "./Assets/button.png";
import pin from "./Assets/button (1).png";
import img_text from "./Assets/Frame 1010105932.jpg";
import img_ from "./Assets/Frame 1010106209.png";
import icon from "./Assets/Icon ionic-ios-arrow-forward (1).png";
import group1 from "./Assets/Group.png";
import group2 from "./Assets/Group 633647.png";
import group3 from "./Assets/Group 633649.png";
import group4 from "./Assets/Group 633674.png";
import group5 from "./Assets/Group 633676.png";
import group6 from "./Assets/Group 633729.png";
import group7 from "./Assets/Group 633864.png";
import group8 from "./Assets/Group (1).png";
import group9 from "./Assets/Group 633674.png";

interface ChildComponentProps {
  compchange: (ind: number) => void;
}

const Profile: React.FC<ChildComponentProps> = ({ compchange }) => {
  const menuItemsData = [
    { menuName: "News Feed", img: group1 },
    { menuName: "Module", img: group2 },
    { menuName: "Profile", img: group3 },
    { menuName: "Chapters", img: group4 },
    { menuName: "Members", img: group5 },
    { menuName: "Approval", img: group6 },
    { menuName: "Insights", img: group7 },
    { menuName: "Activity", img: group8 },
    { menuName: "Performance", img: group9 },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    compchange(index);
  };

  return (
    <div className="sticky w-full">
      <div className="w-auto mt-5 -ml-7 bg-white rounded-[10px] shadow-sm sticky top-[80px] z-[-1]">
        <div className="w-full h-[124px] rounded-t-[10px]">
          <Image src={backG} alt="Background Image" className="rounded-t-[10px]" />
        </div>
        <div className="relative -mt-[40px] flex justify-between items-end pr-[5px]">
          <div className="ml-[10%] w-[30%]">
            <Image src={profile} alt="Profile Image" />
          </div>
          <div className="flex justify-between w-[80%] items-end h-[50px] ml-[10px]">
            <button className="w-[60px] h-[25px]">
              <Image src={buttum} alt="Button Image" />
            </button>
            <button className="w-[60px] h-[25px]">
              <Image src={pin} alt="Pin Image" />
            </button>
          </div>
        </div>
        <div className="mt-[18%] w-full h-[75%] px-[10%] py-2">
          <div className="w-full h-[18%]">
            <Image src={img_text} alt="Text Image" />
          </div>
          <button className="w-full h-[30px] rounded-[10px] my-[18px] border border-gray-400 text-gray-500 flex items-center justify-center transition-all hover:text-gray-200 hover:bg-black">
            Joined
          </button>
          <div className="w-full h-[70%] flex flex-col gap-2 py-[5px]">
            {menuItemsData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`w-full h-[33px] flex items-start rounded-[8px] p-[5px] relative cursor-pointer ${
                  activeIndex === index ? "border border-green-500 bg-green-200" : ""
                }`}
              >
                <div className="w-[30px] h-full flex items-center justify-center rounded-[5px]">
                  <Image src={item.img} alt={item.menuName} />
                </div>
                <p className="text-black">{item.menuName}</p>
                <div className="absolute right-[10px] flex items-center justify-center w-[20px]">
                  <Image src={icon} alt="Arrow Icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
