"use client"
import React ,{useState} from "react";
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
import bp from "../../../public/assets/debate/icons/bp.png";
import rp from "../../../public/assets/debate/icons/rp.png";
import bs from "../../../public/assets/debate/icons/bs.png";
import rs from "../../../public/assets/debate/icons/rs.png";
import DebatePage from "./Debate_Page";

interface Debate {
  title: string;
  description: string;
  tag:string;
  tags:string;
  for: number;
  against: number;
  fors: number;
  status: string;
  statusColor: string;
  date: string;
  posterName: string;
  posterImage: StaticImageData; 
}

const debates: Debate[] = [
  {
    title: "Climate Change Regulations",
    description: "Addressing the impact of human activity on th...",
    tag:"Environmental & Climate",
    tags:"Environmental",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ongoing",
    statusColor: "green",
    date: "Jan 13, 2022",
    posterName: "Marvin",
    posterImage: A1,
  },

  {
    title: "Universal Basic Income (UBI)",
    description: "Addressing income inequality and automation...",
    tag:"Economics and Basic Income",
    tags:"Economics",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ongoing",
    statusColor: "green",
    date: "November 7, 2017",
    posterName: "Arlene",
    posterImage: A2,
  },

  {
    title: "Legalization of Marijuana",
    description: "Exploring the social and economic impacts of c...",
    tag:"Law & Implimentation",
    tags:"Law",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ended",
    statusColor: "gray",
    date: "July 24, 2013",
    posterName: "Guy Hawkins",
    posterImage: A3,
  },

  {
    title: "Gun Control Measures",
    description: "Addressing gun violence and Second Amend...",
    tag:"Law and Precaution",
    tags:"Law",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ongoing",
    statusColor: "green",
    date: "July 14, 2015",
    posterName: "Devon",
    posterImage: A4,
  },

  {
    title: "Mandatory Vaccination Policies",
    description: "Balancing public health conserns with persona...",
    tag:"Politics & State",
    tags:"politics",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ended",
    statusColor: "gray",
    date: "May 6, 2012",
    posterName: "Savannah",
    posterImage: A5,
  },

  {
    title: "Internet Privacy Laws",
    description: "Addressing data production and online suveill...",
    tag:"Law & Privacy",
    tags:"Privacy",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ended",
    statusColor: "gray",
    date: "August 7, 2017",
    posterName: "Cody Fisher",
    posterImage: A6,
  },

  {
    title: "Electoral College Reform",
    description: "Examining the fairness and efficancy of the curr...",
    tag:"Reforms & Teens",
    tags:"Reforms",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",
    posterName: "Kristin",
    posterImage: A7,
  },

  {
    title: "Artificial Intelligence Ethics",
    description: "Discussing ethical implications of AI developm...",
    tag:"Artificial Intelligence",
    tags:"AI",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ended",
    statusColor: "gray",
    date: "OCtober 30, 2017",
    posterName: "Cameron",
    posterImage: A8,
  },

  {
    title: "Universal Healthcare",
    description: "Exploring healthcare accessibility and affordab...",
    tag:"Health & Global",
    tags:"Health",
    for: 18,
    against: 18,
    fors: 167,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",
    posterName: "Floyd Miles",
    posterImage: A9,
  },
];

function All() {
  const [isDebatePageOpen, setIsDebatePageOpen] = useState(false);
  const [selectedDebate, setSelectedDebate] = useState<Debate | null>(null);

  const handleDebateClick = (debate: Debate) => { 
    setSelectedDebate(debate);
    setIsDebatePageOpen(true);
  };

  if (isDebatePageOpen && selectedDebate) {
    return (
      <DebatePage
        title={selectedDebate.title}
        description={selectedDebate.description}
        tag={selectedDebate.tag}
        tags={selectedDebate.tags}
        date={selectedDebate.date}
        posterName={selectedDebate.posterName}
        posterImage={selectedDebate.posterImage}
      />
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left text-gray-400 font-normal">No.</th>
              <th className="text-left px-4 text-gray-400 font-normal">
                Debates
              </th>
              <th className="text-center px-4 text-gray-400 font-normal">For</th>
              <th className="text-center px-4 text-gray-400 font-normal">
                Against
              </th>
              <th className="text-left px-4 text-gray-400 font-normal">
                Status
              </th>
              <th className="text-left  text-gray-400 font-normal">
                Posted Date
              </th>
              <th className="text-left px-4 text-gray-400 font-normal">
                Posted by
              </th>
            </tr>
          </thead>
          <tbody>
            {debates.map((debate, index) => (
              <tr key={index}
              onClick={() => handleDebateClick(debate)}
              className="border-b">
                <td className=" text-sm">{index + 1}</td>
                <td className="">
                  <p className="text-sm font-semibold">{debate.title}</p>
                  <p className="text-gray-600 text-xs">{debate.description}</p>
                </td>
                <td className="space-y-5 pl-2 pt-5">
                  <div className="flex gap-1">
                    <Image src={bp} alt="bp" width={15}/>
                    <p className="text-xs text-gray-400 font-medium">{debate.for} </p>
                  </div>
                  <div className="flex gap-1 mt-0 ">
                    <Image src={bs} alt="bs" width={15}/>
                    <p className="text-xs text-gray-400 font-medium">{debate.fors}</p>
                  </div>
                </td>
                <td className="space-y-5 pt-5 pl-5">
                  <div className="flex gap-1">
                    <Image src={rp} alt="rp" width={15}/>
                    <p className="text-xs text-gray-400 font-medium">{debate.for} </p>
                  </div>
                  <div className="flex gap-1 mt-0">
                    <Image src={rs} alt="rs" width={15} />
                    <p className="text-xs text-gray-400 font-medium">{debate.fors}</p>
                  </div>
                </td>
                <td className="p-4 text-xs">
                  <span
                    className={`text-${debate.statusColor}-600 border-${debate.statusColor}-600 bg-${debate.statusColor}-100 border-2  py-1 px-2 rounded-2xl`}
                  >
                    {debate.status}
                  </span>
                </td>
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
    </>
  );
}

export default All;
