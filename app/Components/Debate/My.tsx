import React from "react";

const debates = [
  {
    title: "Climate Change Regulations",
    description: "Addressing the impact of human activity on th...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "Jan 13, 2022",

  },

  {
    title: "Universal Basic Income (UBI)",
    description: "Addressing income inequality and automation...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "November 7, 2017",

  },

  {
    title: "Legalization of Marijuana",
    description: "Exploring the social and economic impacts of c...",
    for: 18,
    against: 18,
    status: "Draft",
    statusColor: "orange",
    date: "July 24, 2013",

  },

  {
    title: "Gun Control Measures",
    description: "Addressing gun violence and Second Amend...",
    for: 18,
    against: 18,
    status: "Draft",
    statusColor: "orange",
    date: "July 14, 2015",

  },

  {
    title: "Mandatory Vaccination Policies",
    description: "Balancing public health conserns with persona...",
    for: 18,
    against: 18,
    status: "Draft",
    statusColor: "orange",
    date: "May 6, 2012",

  },

  {
    title: "Internet Privacy Laws",
    description: "Addressing data production and online suveill...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "August 7, 2017",

  },

  {
    title: "Electoral College Reform",
    description: "Examining the fairness and efficancy of the curr...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",

  },

  {
    title: "Artificial Intelligence Ethics",
    description: "Discussing ethical implications of AI developm...",
    for: 18,
    against: 18,
    status: "Draft",
    statusColor: "orange",
    date: "OCtober 30, 2017",

  },

  {
    title: "Universal Healthcare",
    description: "Exploring healthcare accessibility and affordab...",
    for: 18,
    against: 18,
    status: "Ongoing",
    statusColor: "green",
    date: "March 13, 2014",

  },
];

function My() {

  return (
      <>
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
            </tr>
          </thead>
          <tbody>
            {debates.map((debate, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-sm">{index + 1}</td>
                <td className="p-4">
                  <p className="text-sm font-semibold">{debate.title}</p>
                  <p className="text-gray-600 text-xs ">{debate.description}</p>
                </td>
                <td className="p-4 text-blue-600 text-xs">{debate.for}</td>
                <td className="p-4 text-red-600 text-xs">{debate.against}</td>
                <td className="p-4 text-xs">
                  <span
                    className={`text-${debate.statusColor}-600 border-${debate.statusColor}-600 bg-${debate.statusColor}-100 border-2 py-1 px-2 rounded-2xl`}
                  >
                    {debate.status}
                  </span>
                </td>
                <td className="p-4 text-xs">{debate.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export default My;
