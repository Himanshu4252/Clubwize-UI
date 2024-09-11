import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Profile1 from '@/public/ProjectsImg/lbprof1.png';
import Profile2 from '@/public/ProjectsImg/lbprof2.png';
import Profile3 from '@/public/ProjectsImg/lbprof3.png';
import Profile4 from '@/public/ProjectsImg/lbprof4.png';
import Profile5 from '@/public/ProjectsImg/lbprof5.png';
import Profile6 from '@/public/ProjectsImg/lbprof6.png';
import Profile7 from '@/public/ProjectsImg/lbprof7.png';

interface Member {
  no: number;
  name: string;
  role: string;
  img: StaticImageData;
  clothing: string;
  hydration: string;
  total: string;
}

const members: Member[] = [
  { no: 1, name: "Cameron Williamson (You)", role: "UI UX Designer", img: Profile1, clothing: "2.5k", hydration: "2.5k", total: "2.5k" },
  { no: 2, name: "Bessie Cooper", role: "President of Sales", img: Profile2, clothing: "256", hydration: "256", total: "256" },
  { no: 3, name: "Ronald Richards", role: "Dog Trainer", img: Profile3, clothing: "19.5k", hydration: "19.5k", total: "19.5k" },
  { no: 4, name: "Courtney Henry", role: "Web Designer", img: Profile4, clothing: "2.3k", hydration: "2.3k", total: "2.3k" },
  { no: 5, name: "Jacob Jones", role: "Nursing Assistant", img: Profile5, clothing: "1.2k", hydration: "1.2k", total: "1.2k" },
  { no: 6, name: "Brooklyn Simmons", role: "Medical Assistant", img: Profile6, clothing: "20", hydration: "20", total: "20" },
  { no: 7, name: "Robert Fox", role: "Web Designer", img: Profile7, clothing: "9", hydration: "9", total: "9" }
];

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center text-xs mb-4">
        <div>
          <h1 className="text-lg mb-4 font-bold">Blood Donation</h1>
          <p className="text-gray-600">Donate Blood, Save Lives: Your generous contribution can make a world of difference to those in need. Join us in our mission to provide lifesaving blood to patients in hospitals and medical facilities.</p>
        </div>
        <div className="text-gray-500 text-xs">
          <p className=""></p> Private
        </div>
      </div>
      <div className="flex justify-center mb-4 text-xs">
        <div className="flex items-center space-x-2">
          <span>Member wise</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Forum wise</span>
        </div>
      </div>
      <table className="min-w-full bg-white border text-xs">
        <thead>
          <tr className='bg-gray-100 border border-gray-300 text-gray-500'>
            <th className="py-2 px-2 border-b">No.</th>
            <th className="py-2 px-4 border-b">Member’s name</th>
            <th className="py-2 px-4 border-b">Comfortable Clothing</th>
            <th className="py-2 px-4 border-b">Hydration</th>
            <th className="py-2 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.no} className="border  ">
              <td className="py-2 px-2 text-center">{member.no}</td>
              <td className="py-2 px-2 flex items-center ">
                <Image src={member.img} alt={`Profile picture of ${member.name}`} className="w-8 h-8 mr-2" />
                <div>
                  <div className="font-bold mb-1 ">{member.name}</div>
                  <div className="text-gray-500">{member.role}</div>
                </div>
              </td>
              <td className="py-2 px-2 text-center">{member.clothing}</td>
              <td className="py-2 px-2 text-center">{member.hydration}</td>
              <td className="py-2 px-2 text-center">{member.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 text-[0.6rem]">
        <div>Total 85 Members</div>
        <div className="flex items-center ">
          <button className="px-2 py-1 border rounded ">{"<"}</button>
          {[1, '...',  4, 5, 6, 7, 8,  20].map((page, index) => (
            <button key={index} className={`px-2 py-1 border rounded ${page === 6 ? 'bg-black text-white' : ''}`}>{page}</button>
          ))}
          <button className="px-2 py-1 border rounded">{">"}</button>
        </div>
        <div className="flex items-center space-x-2">
          <select className="border rounded px-2 py-1">
            <option>10 / page</option>
            <option>20 / page</option>
            <option>50 / page</option>
          </select>
          <span>Go to</span>
          <input type="text" className="border rounded px-2 py-1 w-12" />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
