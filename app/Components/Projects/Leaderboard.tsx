import React,{useState} from 'react';
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

const ToggleSwitch: React.FC = () => {
    const [isMemberWise, setIsMemberWise] = useState(true);
    return (
        <div className="flex items-center space-x-1 text-xs">
          <span className="text-gray-700">Member wise</span>
          <label className="relative bg-white inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={!isMemberWise}
              onChange={() => setIsMemberWise(!isMemberWise)}
            />
            <div className="w-7 h-3.5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#22B573] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#22B573]"></div>
          </label>
          <span className="text-gray-700">Forum wise</span>
        </div>
      );
  };
  

const Leaderboard: React.FC = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg">
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
       
      
      <div className="flex justify-center mb-4 text-xs">
      <ToggleSwitch />

      </div>
      <table className="min-w-full bg-white rounded-md border text-xs">
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
              <td className="py-2 px-2 text-center text-gray-500">{member.no}</td>
              <td className="py-2 px-2 flex items-center ">
                <Image src={member.img} alt={`Profile picture of ${member.name}`} className="w-8 h-8 mr-2" />
                <div>
                  <div className="font-bold mb-1 ">{member.name}</div>
                  <div className="text-gray-400">{member.role}</div>
                </div>
              </td>
              <td className="py-2 px-2 text-center text-gray-400">{member.clothing}</td>
              <td className="py-2 px-2 text-center text-gray-400">{member.hydration}</td>
              <td className="py-2 px-2 text-center text-gray-400">{member.total}</td>
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
