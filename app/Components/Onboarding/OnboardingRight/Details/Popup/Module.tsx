// Module.tsx
"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import rulesImg from "../../../../../../public/assets/Onboarding/Rules.png";
import marketImg from "../../../../../../public/assets/Onboarding/Market Place.png";
import debateImg from "../../../../../../public/assets/Onboarding/Debate.png";
import eventsImg from "../../../../../../public/assets/Onboarding/Events News.png";
import chatImg from "../../../../../../public/assets/Onboarding/Debate.png";
import Created from './Created';

interface Module {
  name: string;
  image: StaticImageData;
}

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
  after: () => void;
}

export default function Module({ isOpen, onClose, after }: ModuleProps) {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const modules: Module[] = [
    { name: 'Rules and Regulation', image: rulesImg },
    { name: 'Market Place', image: marketImg },
    { name: 'Debate', image: debateImg },
    { name: 'Events News', image: eventsImg },
    { name: 'Debate Chat', image: chatImg },
  ];

  const toggleModuleSelection = (moduleName: string) => {
    if (selectedModules.includes(moduleName)) {
      setSelectedModules(selectedModules.filter((name) => name !== moduleName));
    } else {
      setSelectedModules([...selectedModules, moduleName]);
    }
  };

  const [isCreatedOpen, setIsCreatedOpen] = useState(false);

  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create node</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-500 rounded-full flex justify-center items-center text-white">
                1
              </div>
              <span className="ml-2 text-gray-500">Details</span>
            </div>
            <span className="mx-4 text-gray-300">—</span>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-gray-500">
                ✓
              </div>
              <span className="ml-2 text-green-500">Module</span>
            </div>
          </div>

          <div className="py-4">
            <input
              type="text"
              placeholder="Search module..."
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <div>
              {modules.map((module) => (
                <div key={module.name} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Image src={module.image} alt={module.name} width={24} height={24} className="mr-2" />
                    <span>{module.name}</span>
                  </div>
                  <button
                    onClick={() => toggleModuleSelection(module.name)}
                    className={`px-4 py-1 border rounded ${selectedModules.includes(module.name) ? 'bg-green-500 text-white' : 'text-green-500'}`}
                  >
                    {selectedModules.includes(module.name) ? 'Added' : '+ Add'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-center pt-4 border-t gap-5">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Previews
            </button>
            <button
              onClick={after}
              className={` text-white px-4 py-2 rounded ${selectedModules.length === 0 ? 'bg-green-200' : 'bg-green-500'}`}
              disabled={selectedModules.length === 0}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Created isOpen={isCreatedOpen} onClose={closeCreated} />
    </div>
  );
}
