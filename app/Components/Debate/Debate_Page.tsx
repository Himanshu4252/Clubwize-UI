"use client"
import Image, { StaticImageData } from "next/image";
import React,{useState} from "react";
import lock from "../../../public/assets/debate/page/lock1.svg";
import more from "../../../public/assets/debate/page/more1.svg";
import like from "../../../public/assets/debate/page/Like1.svg";
import dislike from "../../../public/assets/debate/page/disLike1.svg";
import chat from "../../../public/assets/debate/page/chat1.svg";
import share from "../../../public/assets/debate/page/share1.svg";
import p1 from "../../../public/assets/debate/page/p1.png";
import p2 from "../../../public/assets/debate/page/p2.png";
import p3 from "../../../public/assets/debate/page/p3.png";
import p4 from "../../../public/assets/debate/page/p4.png";
import For from "./popup/For";
import Against from "./popup/Against";

interface DebatePageProps {
  title: string;
  description: string;
  tag: string;
  tags: string;
  date: string;
  end: string;
  posterName: string;
  posterImage: StaticImageData;
}

export default function DebatePage({
  title,
  description,
  tag,
  tags,
  date,
  end,
  posterName,
  posterImage,
}: DebatePageProps) {

  const [isForOpen, setIsForOpen] = useState(false);

  const openFor = () => setIsForOpen(true);
  const closeFor = () => setIsForOpen(false);

  const [isAgainstOpen, setIsAgainstOpen] = useState(false);

  const openAgainst = () => setIsAgainstOpen(true);
  const closeAgainst = () => setIsAgainstOpen(false);


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
              <p className="text-sm font-medium border border-gray-300 rounded-md w-fit h-fit px-2 py-1">
                {tag}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tags, Dates, Points Section */}
      <div className="container mx-auto p-6 bg-transparent">
        <div className="flex space-x-4  items-center">
          <p className="text-gray-400">Tags:</p>
          <p className="border border-gray-200 shadow-lg p-2 text-sm rounded-lg">
            {tags}
          </p>
          <p className="border border-gray-200 shadow-lg p-2 text-sm rounded-lg">
            {tags}
          </p>
        </div>
        <div className="flex space-x-3 mt-5">
          <div className="border border-gray-200 shadow-lg px-4 py-2 rounded-lg">
            <p className="text-gray-400 text-sm">Date Started</p>
            <p>{date}</p>
          </div>
          <div className="border border-gray-200 shadow-lg px-4 py-2 rounded-lg">
            <p className="text-gray-400 text-sm">Closure date</p>
            <p>{end}</p>
          </div>
          <div className="border border-gray-200 shadow-lg px-4 py-2 rounded-lg w-24">
            <p className="text-gray-400 text-sm">Points</p>
            <p>457</p>
          </div>
          <div className="border border-gray-200 shadow-lg px-4 py-2 rounded-lg w-24">
            <p className="text-gray-400 text-sm">Views</p>
            <p>12.5k</p>
          </div>
          <div className="border border-gray-200 shadow-lg px-4 py-2 rounded-lg">
            <p className="text-gray-400 text-sm">Contributors</p>
            <p>2.3k</p>
          </div>
        </div>
      </div>

      {/* For and Against Sections */}
      <div className="container mx-auto grid grid-cols-2 gap-6 my-6">
        {/* For Section */}
        <div className=" ">
          <h3 className="text-lg font-medium">For (182)</h3>
          <button 
          onClick={openFor}
          className="mt-4 bg-blue-100 border border-blue-300 text-blue-500 hover:bg-slate-900 py-2 px-4 w-full rounded-md">
            + Add a point for
          </button>

          {/* Points List */}
          <div className="mt-6 ">
            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-blue-500 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p1} alt="p1" />
                <p className="text-sm">Annette Black</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5  border border-gray-200 shadow-lg px-2 border-t-4 border-t-blue-500 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p2} alt="p2" />
                <p className="text-sm">Broklyn Simmon</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-blue-500 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p3} alt="p3" />
                <p className="text-sm">Bessie Cooper</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-blue-500 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p4} alt="p4" />
                <p className="text-sm">Ralph Edwards</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>
          </div>
        </div>

        {/* Against Section */}
        <div className="">
          <h3 className="text-lg font-medium">Against (45)</h3>
          <button 
          onClick={openAgainst}
          className="mt-4 bg-red-100 border border-red-300 text-red-500 hover:bg-slate-900 py-2 px-4 rounded-md w-full">
            + Add a point against
          </button>

          {/* Points List */}
          <div className="mt-6">
          <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-red-400 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p1} alt="p1" />
                <p className="text-sm">Annette Black</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-red-400 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p2} alt="p2" />
                <p className="text-sm">Broklyn Simmon</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-red-400 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p3} alt="p3" />
                <p className="text-sm">Bessie Cooper</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>

            <div className=" py-4 my-5 border border-gray-200 shadow-lg px-2 border-t-4 border-t-red-400 rounded-lg">
              <p className="font-normal text-xs text-gray-700">
                Hospital staff must prioritize patient care and well-being at
                all times, adhering to professional standards and ethical
                guidelines.
              </p>
              <div className="flex items-center space-x-2 my-5">
                <Image src={p4} alt="p4" />
                <p className="text-sm">Ralph Edwards</p>
                <div className="bg-gray-300 w-1 h-1 rounded-lg"></div>
                <p className="text-xs text-gray-400">
                  Last updated : 20 Sep 2024
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={like}
                      alt="like"
                      className="hover:cursor-pointer"
                    />
                    <p>231</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={dislike}
                      alt="dislike"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={chat}
                      alt="chat"
                      className="hover:cursor-pointer"
                    />
                    <p>23</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Image
                      src={share}
                      alt="share"
                      className="hover:cursor-pointer"
                    />
                    <p>21</p>
                  </div>
                </div>
                <Image className="cursor-pointer" src={more} alt="more" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <For
      isOpen={isForOpen}
      onClose={closeFor}
      />
      <Against
      isOpen={isAgainstOpen}
      onClose={closeAgainst}
      />
    </div>
  );
}
