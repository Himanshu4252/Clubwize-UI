import React from "react";
import Image from "next/image";
import pc1 from "../../../public/assets/debate/page/pc1.png";
import pc2 from "../../../public/assets/debate/page/pc2.png";
import pc3 from "../../../public/assets/debate/page/pc3.png";
import pc4 from "../../../public/assets/debate/page/pc4.png";
import likegreen from "../../../public/assets/debate/page/likegreen.svg";
import disred from "../../../public/assets/debate/page/disred.svg";
import comment from "../../../public/assets/debate/page/chat2.svg";
import share from "../../../public/assets/debate/page/shre.svg";
import like from "../../../public/assets/debate/page/Like1.svg";
import dislike from "../../../public/assets/debate/page/disLike1.svg";
import rep from "../../../public/assets/debate/page/rep.svg"


function For() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          Community Debate
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at
          egestas. Jaculis semper risus sit egestas.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
          <span>
            <a href="/debate" className="underline">
              Debate
            </a>{" "}
            &gt; Personal Protective Equipment &gt; Point For
          </span>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm mb-6">
        <p className="text-gray-700 font-sm">
          Hospital staff must prioritize patient care and well-being at all
          times, adhering to professional standards and ethical guidelines.
        </p>
        <div className="flex items-center mt-4">
          <Image
            src={pc1}
            alt="Leslie Alexander"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 flex items-center space-x-2">
            <p className="text-gray-700 font-semibold">Leslie Alexander</p>
            <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
            <p className="text-sm text-gray-400">16 min ago</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
              <Image src={likegreen} alt="like green" />
              <span>
                <span className="text-green-500">5k+</span> Relevant
              </span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
              <Image src={disred} alt="dislike red" />
              <span>
                <span className="text-red-500">5k+</span> Not Relevant
              </span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700">
              <Image src={comment} alt="comment" />
              <span>
                <strong>5k+</strong> Comments
              </span>
            </button>

            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <Image src={share} alt="share" />
              <span> Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700 font-medium">Comments (1.2k)</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Sort by:</span>
            <select className="border-gray-300 rounded-lg text-sm text-gray-600">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <Image
            src={pc2}
            alt="Leslie Alexander"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 w-full bg-gray-100 rounded-lg">
            <div className=" p-3 ">
              <p className="text-gray-800 font-semibold">
                Leslie Alexander  
              </p>
              <p className="text-sm text-gray-600">
                <span className="text-green-500">@Cameron Williamson</span>{" "}
                Loving your work and profile always be on top up.{" "}
                <span className="text-xs text-gray-400 mt-1">1 days ago</span>
              </p>

            </div>
            <div className="flex items-center mt-2 space-x-4 pl-3 pb-3">
              <button className="flex items-center space-x-1">
                <Image src={like} alt="like"/>
                <span>231</span>
              </button>
              <button className="flex items-center space-x-1">
                <Image src={dislike} alt="dislike"/>
                <span>23</span>
              </button>
              <button className="text-gray-600 flex items-center space-x-3 border border-gray-400 px-2 py-1 rounded-lg">
                <Image src={rep} alt="rep "/>
                <span>Reply</span></button>
            </div>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <Image
            src={pc3}
            alt="Leslie Alexander"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 w-full bg-gray-100 p-3 rounded-lg">
            <div className="">
              <p className="text-gray-800 font-semibold">
                Leslie Alexander  
              </p>
              <p className="text-sm text-gray-600"><span className="text-green-500">@Cameron Williamson</span>{" "}
                Loving your work and profile always be on top up.{" "}
                <span className="text-xs text-gray-400 mt-1">1 days ago</span>
              </p>
            </div>
            <div className="flex items-center mt-2 space-x-4  pb-3">
              <button className="flex items-center space-x-1">
                <Image src={like} alt="like"/>
                <span>231</span>
              </button>
              <button className="flex items-center space-x-1">
                <Image src={dislike} alt="dislike"/>
                <span>23</span>
              </button>
              <button className="text-gray-600 flex items-center space-x-3 border border-gray-400 px-2 py-1 rounded-lg">
                <Image src={rep} alt="rep "/>
                <span>Reply</span></button>
            </div>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <Image
            src={pc4}
            alt="Leslie Alexander"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 w-full bg-gray-100 p-3 rounded-lg">
            <div className="">
              <p className="text-gray-800 font-semibold">Leslie Alexander</p>
              <p className="text-sm text-gray-600">
                Thanks <span className="text-green-500">@Leslie Alexander.</span>{""} <span className="text-xs text-gray-400 mt-1">3 days ago</span>
              </p>
            </div>
            <div className="flex items-center mt-2 space-x-4  pb-3">
              <button className="flex items-center space-x-1">
                <Image src={like} alt="like"/>
                <span>231</span>
              </button>
              <button className="flex items-center space-x-1">
                <Image src={dislike} alt="dislike"/>
                <span>23</span>
              </button>
              <button className="text-gray-600 flex items-center space-x-3 border border-gray-400 px-2 py-1 rounded-lg">
                <Image src={rep} alt="rep "/>
                <span>Reply</span></button>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Image
            src={pc3}
            alt="Guy Hawkins"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 w-full bg-gray-100 p-3 rounded-lg">
            <div className="">
              <p className="text-gray-800 font-semibold">Guy Hawkins</p>
              <p className="text-sm text-gray-600">
                Your most welcome and please follow my club here is my{" "}
                <a href="#" className="text-green-500">
                  club link.
                </a> {""}
                <span className="text-xs text-gray-400 mt-1">3 days ago</span>
              </p>
            </div>
            <div className="flex items-center mt-2 space-x-4 pb-3">
              <button className="flex items-center space-x-1">
                <Image src={like} alt="like"/>
                <span>231</span>
              </button>
              <button className="flex items-center space-x-1">
                <Image src={dislike} alt="dislike"/>
                <span>23</span>
              </button>
              <button className="text-gray-600 flex items-center space-x-3 border border-gray-400 px-2 py-1 rounded-lg">
                <Image src={rep} alt="rep "/>
                <span>Reply</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default For;
