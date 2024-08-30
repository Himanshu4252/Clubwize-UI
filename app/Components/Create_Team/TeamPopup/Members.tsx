import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import p1 from "../../../../public/assets/Team/people/p1.png";
import p2 from "../../../../public/assets/Team/people/p2.png";
import p3 from "../../../../public/assets/Team/people/p3.png";
import p4 from "../../../../public/assets/Team/people/p4.png";
import p5 from "../../../../public/assets/Team/people/p5.png";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  { name: "Cameron Williamson", role: "UI UX Designer", image: p1 },
  { name: "Courtney Henry", role: "Marketing Coordinator", image: p2 },
  { name: "Cody Fisher", role: "Nursing Assistant", image: p3 },
  { name: "Cofgery Fox", role: "President of Sales", image: p4 },
  { name: "Cermot Williamson", role: "Web Designer", image: p5 },
];

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function Members({ isOpen, onClose, onNext }: ModuleProps) {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const toggleMemberSelection = (name: string) => {
    if (selectedMembers.includes(name)) {
      setSelectedMembers(selectedMembers.filter((member) => member !== name));
    } else {
      setSelectedMembers([...selectedMembers, name]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create new team</h2>
          <button onClick={onClose} className="text-gray-400">
            X
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">
              ✔
            </span>
            <span className="text-green-500">Members</span>
          </div>
          <span className="mx-4 text-gray-300">—</span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">2</span>
            <span className="text-gray-400">Name</span>
          </div>
          <span className="mx-4 text-gray-300">—</span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">3</span>
            <span className="text-gray-400">Picture</span>
          </div>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search members..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <svg
            className="w-5 h-5 absolute top-3 right-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
            ></path>
          </svg>
        </div>

        <div>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex items-center py-2 border-b cursor-pointer relative ${selectedMembers.includes(member.name) ? "bg-gray-100" : "hover:bg-gray-100"}`}
              onClick={() => toggleMemberSelection(member.name)}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={40}
                  height={40}
                  className={`rounded-md ${selectedMembers.includes(member.name) ? "opacity-50" : ""}`}
                />
                {selectedMembers.includes(member.name) && (
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-md"></div>
                )}
              </div>
              <div className="ml-4">
                <div className={`font-semibold ${selectedMembers.includes(member.name) ? "text-gray-400" : ""}`}>
                  {member.name}
                </div>
                <div className={`text-sm ${selectedMembers.includes(member.name) ? "text-gray-400" : "text-gray-500"}`}>
                  {member.role}
                </div>
              </div>
              {selectedMembers.includes(member.name) && (
                <div className="ml-auto">
                  <button
                    className="w-6 h-6 bg-green-500 text-white rounded-full flex justify-center items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMemberSelection(member.name);
                    }}
                  >
                    ✔
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 gap-5">
          <button onClick={onClose} className="text-gray-400 border px-2 text-sm rounded border-gray-200">Previews</button>
          <button
            onClick={onNext}
            className={`px-4 py-2 text-sm text-white rounded ${selectedMembers.length > 0 ? "bg-green-500" : "bg-green-200"}`}
            disabled={selectedMembers.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
