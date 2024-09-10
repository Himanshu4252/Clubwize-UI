import React from 'react';
import Image, { StaticImageData } from 'next/image';
import bannerImage from '@/public/ProjectsImg/banner.png';
import userAvatar from '@/public/ProjectsImg/leslieavatar.png';
import viewIcon from '@/public/ProjectsImg/eye.png';
import adoptIcon from '@/public/ProjectsImg/adopticon.png';
import ava1 from '@/public/ProjectsImg/ava1.png'
import ava2 from '@/public/ProjectsImg/ava2.png'
import ava3 from '@/public/ProjectsImg/ava3.png'
import DocImg from '@/public/ProjectsImg/docimg.png';
import EngagementBar from '../NewsFeed/PostCard/EngagementBar/EngagementBar';
import AddContModal from './AddContModal';

interface CardProps {
  title: string;
  amount: string;
  total: string;
  percentage: string;
}

interface FileCardProps {
  imageSrc: StaticImageData;
  title: string;
  fileType: string;
  fileSize: string;
}

const Card: React.FC<CardProps> = ({ title, amount, total, percentage }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-2 mb-2 mr-2 max-w-80">
      <div className="block text-xs font-medium text-gray-700 mb-2">{title}</div>
      <div className='flex justify-between items-center text-xs text-gray-500 mb-2'>
        <div className="text-[#22B573] font-bold text-xs">
          {amount} <span className="text-[0.5rem] text-gray-500 align-baseline">/{total}</span>
        </div>
        <div className="text-green-600 text-xs">{percentage}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div className="bg-[#22B573] h-1 w-[12vh] rounded-full"></div>
      </div>
      <button onClick={openModal} className="mt-4 w-full text-gray-600 py-1 rounded-md border border-gray-300 text-xs">
        + Add Contribution
      </button>
      <AddContModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const FileCard: React.FC<FileCardProps> = ({ imageSrc, title, fileType, fileSize }) => (
  <div className="flex items-center p-2 w-[30vh] bg-gray-50 rounded-md border">
    <Image src={imageSrc} alt={title} className="w-8 h-8 rounded-md mr-4" />
    <div>
      <div className="text-gray-900 text-xs">{title}</div>
      <div className="text-gray-400 text-[0.5rem]">{fileType} - {fileSize}</div>
    </div>
  </div>
);

const ProjectDetailsTab: React.FC = () => {
  return (
    <>
      <div className='mb-4'>
        <Image
          src={bannerImage}
          alt="Banner with the word DATA and various icons"
          width={800}
          height={200}
          className="w-full rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Blood Donation</h1>
          <p className="text-gray-700 mb-4 text-xs">
            Donate Blood, Save Lives: Your generous contribution can make a world of difference to those in need. Join us in our mission to provide lifesaving blood to patients in hospitals and medical facilities.
          </p>

          <div className="flex flex-wrap justify-start">
            <div className="w-60"> 
              <Card title="Volunteers" amount="128" total="1000" percentage="11.01" />
            </div>
            <div className="w-60"> 
              <Card title="Grains" amount="239" total="5000 Kg" percentage="11.01" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="border rounded-lg p-2">
              <h3 className="text-xs text-gray-500">Region</h3>
              <p className="text-xs font-semibold">Delhi</p>
            </div>
            <div className="border rounded-lg p-2">
              <h3 className="text-xs text-gray-500">Budget</h3>
              <p className="text-xs font-semibold">$2600 - $3200</p>
            </div>
            <div className="border rounded-lg p-2"> 
              <h3 className="text-xs text-gray-500">Deadlines</h3>
              <p className="text-xs font-semibold">August 24, 2013</p>
            </div>
            <div className="border rounded-lg p-2">
              <h3 className="text-xs text-gray-500">Posted date</h3>
              <p className="text-xs font-semibold">August 12, 2013</p>
            </div>
            <div className="border rounded-lg p-2">
              <h3 className="text-xs text-gray-500">Participants</h3>
              <p className="text-xs font-semibold">23.56k</p>
            </div>
            <div className="border rounded-lg p-2">
              <h3 className="text-xs text-gray-500">Adopted</h3>
              <p className="text-xs font-semibold">236</p>
            </div>
          </div>

          <div className="text-xs text-green-700 p-1 rounded-lg mb-4">
            <span className="bg-green-100 p-1">239 Contribution from this forum.</span> 
          </div>

          <div className="flex items-center">
            <Image
              src={userAvatar}
              alt="User avatar"
              width={20}
              height={20}
              className="w-7 h-7 mr-2"
            />
            <div>
              <p className="text-xs font-semibold">Leslie Alexander <span className="text-[0.5rem] text-gray-300"> •  16 min ago</span></p> 
            </div>
            <div className="ml-auto flex items-center text-gray-500">
              <Image
                src={viewIcon}
                alt="View Icon"
                width={14}
                height={14}
                className="mr-1 text-xs"
              /> <p className='text-xs'>12.5k Viewers</p>
              <Image
                src={adoptIcon}
                alt="Adopt Icon"
                width={12}
                height={12}
                className="ml-4 mr-1 text-xs"
              /> <p className='text-xs'>236 Adopted</p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs font-semibold mb-2">Related event</h2>
        <p className="text-gray-700 text-xs">
          The project aims to develop a comprehensive blood donation solution, including a mobile app and web platform. The app will enable users to locate nearby blood donation centers, schedule appointments, and receive reminders.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs font-semibold mb-2">Closing Remark</h2>
        <p className="text-gray-700 text-xs">Until All passages are finished</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs font-semibold mb-2">Project Solution In details</h2>
        <p className="text-gray-700 text-xs">
          The project aims to develop a comprehensive blood donation solution, including a mobile app and web platform. The app will enable users to locate nearby blood donation centers, schedule appointments, and receive reminders.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4 mb-4">
        <div className="grid grid-cols-3 gap-4 text-xs relative">
          <div className="relative">
            <div className="text-gray-600">Nursing Assistant</div>
            <div className="font-semibold mt-2">Cameron Williamson</div>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
          </div>
          <div className="relative">
            <div className="text-gray-600">Nursing Assistant</div>
            <div className="font-semibold mt-2">Albert Flores</div>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
          </div>
          <div className="relative">
            <div className="text-gray-600">Medical Assistant</div>
            <div className="font-semibold mt-2">Devon Lane</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">How to take part in this project</div>
        <div className="text-gray-600">
          Locate a nearby blood donation center or blood drive event in your area. You can search online or contact local hospitals, clinics, or blood banks for information on where to donate.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">About the Promoters</div>
        <div className="text-gray-600">
          Promoters can play a vital role in raising awareness and encouraging participation in blood donation activities. Here&apos;s how you can involve promoters for your blood donation project.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Promoters</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Image
              src={ava1}
              alt="Profile picture of Savannah Nguyen"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Savannah Nguyen</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava2}
              alt="Profile picture of Brooklyn Simmons"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Brooklyn Simmons</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava3}
              alt="Profile picture of Jerome Bell"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Jerome Bell</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Funding received details</div>
        <div className="text-gray-600">
          Funding received for blood donation initiatives typically comes from various sources, including government grants, corporate sponsorships, fundraising events, and individual donations.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Key Takeaway</div>
        <div className="text-gray-600">
          Blood donation is a selfless act that saves lives and supports medical treatments. It provides essential resources for emergency response, surgical procedures, and treatments for conditions like cancer and blood disorders.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Celebrity Champions</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Image
              src={ava1}
              alt="Profile picture of Savannah Nguyen"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Savannah Nguyen</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava2}
              alt="Profile picture of Brooklyn Simmons"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Brooklyn Simmons</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava3}
              alt="Profile picture of Jerome Bell"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div>Jerome Bell</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="font-semibold text-gray-700 mb-2">Risks & Challenges</div>
        <div className="text-gray-600">
          Blood donation carries minimal risks and challenges, including temporary discomfort such as dizziness or bruising at the needle site. Donors may experience fatigue or lightheadedness after donation, but these symptoms typically resolve quickly with rest and hydration.
        </div>
      </div>

      <div className="pl-2 pr-2 pb-2 flex flex-col border rounded-lg shadow-md">
        <div className='border-b border-gray-300 mt-4'>
          <div className="flex space-x-4 pb-2">
            <FileCard
              imageSrc={DocImg}
              title="Image XYZ"
              fileType="JPG"
              fileSize="1.2MB"
            />
            <FileCard
              imageSrc={DocImg}
              title="Document XYZ"
              fileType="PDF"
              fileSize="12MB"
            />
          </div>
        </div>
        <EngagementBar />
      </div>

     
    </>
  );
};

export default ProjectDetailsTab;
