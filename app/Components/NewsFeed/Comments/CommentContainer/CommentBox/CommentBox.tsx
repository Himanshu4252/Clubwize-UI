import React from "react";
import CommentInteractions from "../CommentInteractions/CommentInteractions";

const CommentBox = () => {
  return (
    <div className="inline-flex">
      <div className="flex items-center">
        {/* Avatar */}
        <div className="flex flex-col ">
          <div className="w-10 h-10 bg-orange-300 rounded-md"></div>
        </div>

        {/* Name and Date */}
        <div className="flex flex-col justify-start ml-4">
          {/* Name */}
          <div className="w-fit h-6 ">
            <p className="leading-none font-semibold">Cameron Williamson</p>
          </div>

          {/* Role Category and times */}
          <div className="flex flex-row gap-2 w-fit h-fit items-center mt-1 ">
        
            <a href="#" className=" ">
              <p className="leading-none text-base text-gray-600"> <span className="text-green-500 font-medium">@Cameron Williamson</span> Loving your work and profile always be on top up.</p>
            </a>{" "}
            <div className=" w-1 h-1  bg-gray-400 rounded-full"></div>
            <p className="leading-none text-base text-gray-500">1 days ago</p>
          </div>
        </div>
      </div>
      <CommentInteractions />
    </div>
  );
};

export default CommentBox;
