import React from 'react';
import Image, { StaticImageData } from 'next/image';
import bannerImage from '@/public/ProjectsImg/banner.png';
import userAvatar from '@/public/ProjectsImg/leslieavatar.png';
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
        <div className='flex items-center justify-between'>
  <h1 className="text-lg font-semibold mb-2">Blood Donation</h1>
  <div className="flex items-center text-xs text-gray-700">
    <svg width="12" height="13" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1111 15.5H2.88889C2.12296 15.4993 1.38863 15.2117 0.847037 14.7004C0.305443 14.1891 0.000816324 13.4959 0 12.7728V8.68186C0.000816324 7.95878 0.305443 7.26554 0.847037 6.75424C1.38863 6.24294 2.12296 5.95536 2.88889 5.95459H10.1111C10.877 5.95536 11.6114 6.24294 12.153 6.75424C12.6946 7.26554 12.9992 7.95878 13 8.68186V12.7728C12.9992 13.4959 12.6946 14.1891 12.153 14.7004C11.6114 15.2117 10.877 15.4993 10.1111 15.5ZM2.88889 7.31823C2.50593 7.31864 2.13879 7.46244 1.868 7.71808C1.5972 7.97372 1.44488 8.32033 1.44444 8.68186V12.7728C1.44488 13.1343 1.5972 13.4809 1.868 13.7366C2.13879 13.9922 2.50593 14.136 2.88889 14.1364H10.1111C10.4941 14.136 10.8612 13.9922 11.132 13.7366C11.4028 13.4809 11.5551 13.1343 11.5556 12.7728V8.68186C11.5551 8.32033 11.4028 7.97372 11.132 7.71808C10.8612 7.46244 10.4941 7.31864 10.1111 7.31823H2.88889Z" fill="#495057"/>
      <path d="M9.75005 7.31818H3.25005C3.1552 7.31821 3.06128 7.30059 2.97364 7.26633C2.88601 7.23207 2.80638 7.18185 2.73931 7.11853C2.67224 7.05522 2.61904 6.98004 2.58276 6.89731C2.54647 6.81458 2.52781 6.72591 2.52783 6.63636V4.25C2.52783 3.25544 2.94633 2.30161 3.69127 1.59835C4.4362 0.895088 5.44656 0.5 6.50005 0.5C7.55355 0.5 8.5639 0.895088 9.30884 1.59835C10.0538 2.30161 10.4723 3.25544 10.4723 4.25V6.63636C10.4723 6.72591 10.4536 6.81458 10.4174 6.89731C10.3811 6.98004 10.3279 7.05522 10.2608 7.11853C10.1937 7.18185 10.1141 7.23207 10.0265 7.26633C9.93883 7.30059 9.8449 7.31821 9.75005 7.31818ZM3.97228 5.95455H9.02783V4.25C9.02783 3.6171 8.76151 3.01012 8.28746 2.56259C7.81341 2.11506 7.17046 1.86364 6.50005 1.86364C5.82965 1.86364 5.1867 2.11506 4.71265 2.56259C4.2386 3.01012 3.97228 3.6171 3.97228 4.25V5.95455Z" fill="#495057"/>
      <path d="M6.50008 11.0682C7.09839 11.0682 7.58341 10.6103 7.58341 10.0454C7.58341 9.4806 7.09839 9.02271 6.50008 9.02271C5.90177 9.02271 5.41675 9.4806 5.41675 10.0454C5.41675 10.6103 5.90177 11.0682 6.50008 11.0682Z" fill="#495057"/>
    </svg>
    <span className="mr-3 ml-0.5 p-0 m-0">Private</span>

    <svg width="5" height="15" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
    </svg>
  </div>
</div>

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
            <svg width="18" height="12" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9999 3.78137C8.22409 3.78137 6.78125 5.22421 6.78125 7.00002C6.78125 8.77582 8.22409 10.2187 9.9999 10.2187C11.7757 10.2187 13.2185 8.77582 13.2185 7.00002C13.2185 5.22421 11.7757 3.78137 9.9999 3.78137ZM9.75572 6.04552C9.35617 6.04552 9.0232 6.37849 9.0232 6.77804H7.95772C7.97992 5.77915 8.77903 4.98004 9.75572 4.98004V6.04552Z" fill="#495057"/>
<path d="M19.7669 6.33411C18.6792 4.98006 14.7947 0.562744 10 0.562744C5.20533 0.562744 1.32075 4.98006 0.233074 6.33411C-0.0776914 6.71147 -0.0776914 7.26641 0.233074 7.66596C1.32075 9.02001 5.20533 13.4373 10 13.4373C14.7947 13.4373 18.6792 9.02001 19.7669 7.66596C20.0777 7.2886 20.0777 6.73366 19.7669 6.33411ZM10 11.6615C7.42508 11.6615 5.33851 9.57495 5.33851 7.00004C5.33851 4.42512 7.42508 2.33855 10 2.33855C12.5749 2.33855 14.6615 4.42512 14.6615 7.00004C14.6615 9.57495 12.5749 11.6615 10 11.6615Z" fill="#495057"/>
</svg>
<p className='text-xs ml-1 mr-6'>12.5k Viewers</p>
<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78648 13.098C5.81004 12.6586 5.18222 11.6876 5.18222 10.6169V6.59732H6.11629C6.70418 6.59759 7.2114 5.9583 6.95793 5.44232C6.21445 3.94005 5.13054 2.41919 4.19593 0.924312C3.87246 0.412437 3.15277 0.412437 2.82929 0.924312C1.89441 2.41919 0.810505 3.94005 0.067028 5.44232C-0.186722 5.95802 0.320505 6.59759 0.908669 6.59732H1.84027V10.6158C1.84027 12.191 3.11722 13.468 4.6925 13.468H6.70718C6.91554 13.468 6.97652 13.1836 6.78648 13.0983V13.098Z" fill="#495057"/>
<path d="M7.21247 0.910093C8.18892 1.34951 8.81673 2.32048 8.81673 3.39126V7.41107H7.88267C7.29478 7.4108 6.78755 8.05009 7.04103 8.56607C7.7845 10.0683 8.86841 11.5892 9.80302 13.0841C10.1265 13.596 10.8462 13.596 11.1697 13.0841C12.1043 11.5895 13.1882 10.0686 13.9317 8.56607C14.1854 8.05037 13.6782 7.4108 13.09 7.41107H12.1584V3.39263C12.1584 1.81736 10.8815 0.540405 9.30618 0.540405H7.2915C7.08314 0.540405 7.02216 0.82478 7.2122 0.910093H7.21247Z" fill="#495057"/>
</svg> <p className='text-xs ml-1'>236 Adopted</p>
            </div>
            
          </div>
          
        </div>
        
      </div>
      

      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs text-gray-400 mb-2">Related event</h2>
        <p className="text-gray-700 font-semibold text-xs">
          The project aims to develop a comprehensive blood donation solution, including a mobile app and web platform. The app will enable users to locate nearby blood donation centers, schedule appointments, and receive reminders.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs text-gray-400 mb-2">Closing Remark</h2>
        <p className="text-gray-700 font-semibold text-xs">Until All passages are finished</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-xs text-gray-400 mb-2">Project Solution In details</h2>
        <p className="text-gray-700  font-semibold text-xs">
          The project aims to develop a comprehensive blood donation solution, including a mobile app and web platform. The app will enable users to locate nearby blood donation centers, schedule appointments, and receive reminders.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4 mb-4">
        <div className="grid grid-cols-3 gap-4 text-xs relative">
          <div className="relative">
            <div className="text-gray-400">Nursing Assistant</div>
            <div className="font-semibold mt-2">Cameron Williamson</div>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
          </div>
          <div className="relative">
            <div className="text-gray-400">Nursing Assistant</div>
            <div className="font-semibold mt-2">Albert Flores</div>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-200"></div>
          </div>
          <div className="relative">
            <div className="text-gray-400">Medical Assistant</div>
            <div className="font-semibold mt-2">Devon Lane</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">How to take part in this project</div>
        <div className="font-semibold ">
          Locate a nearby blood donation center or blood drive event in your area. You can search online or contact local hospitals, clinics, or blood banks for information on where to donate.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">About the Promoters</div>
        <div className="font-semibold ">
          Promoters can play a vital role in raising awareness and encouraging participation in blood donation activities. Here&apos;s how you can involve promoters for your blood donation project.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">Promoters</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Image
              src={ava1}
              alt="Profile picture of Savannah Nguyen"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold ">Savannah Nguyen</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava2}
              alt="Profile picture of Brooklyn Simmons"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold ">Brooklyn Simmons</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava3}
              alt="Profile picture of Jerome Bell"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold ">Jerome Bell</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">Funding received details</div>
        <div className="font-semibold">
          Funding received for blood donation initiatives typically comes from various sources, including government grants, corporate sponsorships, fundraising events, and individual donations.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">Key Takeaway</div>
        <div className="font-semibold">
          Blood donation is a selfless act that saves lives and supports medical treatments. It provides essential resources for emergency response, surgical procedures, and treatments for conditions like cancer and blood disorders.
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">Celebrity Champions</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Image
              src={ava1}
              alt="Profile picture of Savannah Nguyen"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold">Savannah Nguyen</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava2}
              alt="Profile picture of Brooklyn Simmons"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold">Brooklyn Simmons</div>
          </div>
          <div className="flex items-center">
            <Image
              src={ava3}
              alt="Profile picture of Jerome Bell"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <div className="font-semibold">Jerome Bell</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xs">
        <div className="text-gray-400 mb-2">Risks & Challenges</div>
        <div className="font-semibold">
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
