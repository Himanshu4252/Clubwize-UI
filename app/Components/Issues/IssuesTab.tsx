import React,{useState} from 'react';
import Image from 'next/image';
import EngagementBar from '../NewsFeed/PostCard/EngagementBar/EngagementBar';
import Comments from '../NewsFeed/Comments/Comments';
import PropSolModal from './PropSolModal';
import avatar from '@/public/ProjectsImg/leslieavatar.png'

const IssuesTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Issues');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
      <>
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">
                    Seeking Strategies for Success 
                    <span className="text-gray-500 text-xs border rounded-md ml-2 p-1">BG3035</span>
                </h1>
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
            <p className="text-gray-600 mb-4 text-sm">
                Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor.
            </p>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="p-2 rounded-md border text-xs">
                    <p className="text-xs text-gray-500">Issue Type</p>
                    <p className="font-semibold text-sm">Hospital, Doctor</p>
                </div>
                <div className="p-2 rounded-md border text-xs">
                    <p className="text-xs text-gray-500">Where/Who</p>
                    <p className="font-semibold text-sm">Nurse</p>
                </div>
                <div className="p-2 rounded-md border text-xs">
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="font-semibold text-sm">457</p>
                </div>
                <div className="p-2 rounded-md border text-xs">
                    <p className="text-xs text-gray-500">Who should address</p>
                    <p className="font-semibold text-sm">Teacher, Principal</p>
                </div>
            </div>
            <div className="flex items-center pb-4 m-2 text-sm border-b">
                <Image
                    src={avatar}
                    alt="Profile picture of Leslie Alexander"
                    className="mr-2 h-8 w-8"
                  
                />
                <div className="text-xs text-gray-500">
                    <span className="text-black text-sm">Leslie Alexander</span> <span className="text-[0.5rem] text-gray-400">• 16 min ago</span>
                </div>
                <div className="ml-auto text-gray-600 flex items-center text-xs">
                <svg width="18" height="12" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9999 3.78137C8.22409 3.78137 6.78125 5.22421 6.78125 7.00002C6.78125 8.77582 8.22409 10.2187 9.9999 10.2187C11.7757 10.2187 13.2185 8.77582 13.2185 7.00002C13.2185 5.22421 11.7757 3.78137 9.9999 3.78137ZM9.75572 6.04552C9.35617 6.04552 9.0232 6.37849 9.0232 6.77804H7.95772C7.97992 5.77915 8.77903 4.98004 9.75572 4.98004V6.04552Z" fill="#495057"/>
<path d="M19.7669 6.33411C18.6792 4.98006 14.7947 0.562744 10 0.562744C5.20533 0.562744 1.32075 4.98006 0.233074 6.33411C-0.0776914 6.71147 -0.0776914 7.26641 0.233074 7.66596C1.32075 9.02001 5.20533 13.4373 10 13.4373C14.7947 13.4373 18.6792 9.02001 19.7669 7.66596C20.0777 7.2886 20.0777 6.73366 19.7669 6.33411ZM10 11.6615C7.42508 11.6615 5.33851 9.57495 5.33851 7.00004C5.33851 4.42512 7.42508 2.33855 10 2.33855C12.5749 2.33855 14.6615 4.42512 14.6615 7.00004C14.6615 9.57495 12.5749 11.6615 10 11.6615Z" fill="#495057"/>
</svg>
                    <span className="font-semibold">12.5k Viewers</span>
                    <button  onClick={openModal} className="ml-4 bg-[#22B573] text-white text-xs px-5 py-1 rounded-md">
                        Propose Solution
                    </button>
                    {isModalOpen && <PropSolModal onClose={closeModal} />}
                </div>
            </div>
            <div className="text-gray-700 mb-4 text-sm">
                <ul className="list-disc pl-5">
                    <li>All staff, visitors, and patients must practice proper hand hygiene.</li>
                    <li>Wash hands with soap and water for at least 20 seconds or use alcohol-based hand sanitizer before and after patient contact, after touching potentially contaminated surfaces, and before eating or handling food.</li>
                    <li>All staff, visitors, and patients must practice proper hand hygiene.</li>
                    <li>Wash hands with soap and water for at least 20 seconds or use alcohol-based hand sanitizer before and after patient contact, after touching potentially contaminated surfaces, and before eating or handling food.</li>
                    <li>All staff, visitors, and patients must practice proper hand hygiene.</li>
                    <li>Wash hands with soap and water for at least 20 seconds or use alcohol-based hand sanitizer before and after patient contact, after touching potentially contaminated surfaces, and before eating or handling food.</li>
                </ul>
            </div>
            <div className="flex space-x-4 border-b">
                <div className="bg-gray-100 w-[30vh] p-2 border rounded-md flex mb-4 items-center text-xs">
                <svg width="25" height="24" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.909 8.14586L27.2144 20.2624C27.1721 20.9026 26.9916 21.5261 26.6851 22.0897C26.3786 22.6534 25.9536 23.1439 25.4393 23.5274C25.3745 23.5723 25.2989 23.599 25.2203 23.6046C25.1417 23.6102 25.0631 23.5946 24.9926 23.5593C24.9221 23.5241 24.8624 23.4706 24.8198 23.4043C24.7771 23.3381 24.753 23.2616 24.7501 23.1828V11.0507C24.8232 10.2597 24.7212 9.46225 24.4512 8.71513C24.1812 7.968 23.7499 7.28955 23.1879 6.72802C22.626 6.16648 21.9472 5.73566 21.1999 5.4662C20.4526 5.19674 19.6551 5.09526 18.8641 5.16896H5.57258C5.14892 5.16896 5.13904 4.78767 5.16869 4.61821C5.28791 3.46944 5.85146 2.41277 6.73905 1.67379C7.24018 1.3379 7.80349 1.10575 8.39577 0.991027C8.98805 0.876306 9.59731 0.881339 10.1876 1.00583L25.1017 3.09587C25.7054 3.13978 26.2942 3.30409 26.8333 3.57913C27.3725 3.85417 27.8511 4.23436 28.241 4.69729C28.5776 5.19811 28.8101 5.76142 28.9249 6.35381C29.0396 6.9462 29.0342 7.55559 28.909 8.14586ZM22.6276 11.0507V23.2916C22.7004 23.8029 22.6532 24.3241 22.4899 24.8141C22.3265 25.304 22.0514 25.7492 21.6864 26.1146C21.3213 26.4799 20.8763 26.7553 20.3865 26.919C19.8967 27.0827 19.3755 27.1303 18.8641 27.0579H3.79887C3.28724 27.1311 2.76559 27.0841 2.27526 26.9207C1.78493 26.7573 1.33939 26.482 0.973928 26.1165C0.608467 25.7511 0.333133 25.3055 0.169739 24.8152C0.00634382 24.3249 -0.040622 23.8032 0.0325618 23.2916V11.0507C-0.0401348 10.5393 0.00719574 10.018 0.170808 9.52803C0.33442 9.03807 0.609823 8.59291 0.975222 8.22779C1.34062 7.86266 1.78598 7.58759 2.27607 7.42435C2.76615 7.26111 3.28751 7.21417 3.79887 7.28725H18.8641C19.3752 7.21465 19.8963 7.26196 20.386 7.42542C20.8757 7.58888 21.3207 7.86402 21.6858 8.22908C22.0508 8.59414 22.326 9.03912 22.4894 9.52884C22.6529 10.0186 22.7002 10.5396 22.6276 11.0507ZM2.15085 11.0507V21.1874L4.17451 19.1638C4.29097 19.0463 4.42955 18.953 4.58225 18.8893C4.73496 18.8257 4.89875 18.7929 5.06419 18.7929C5.22963 18.7929 5.39343 18.8257 5.54613 18.8893C5.69883 18.953 5.83741 19.0463 5.95387 19.1638L7.12599 20.3359C7.2453 20.4513 7.40481 20.5159 7.57083 20.5159C7.73684 20.5159 7.89636 20.4513 8.01567 20.3359L14.2152 14.1364C14.4538 13.9055 14.7728 13.7764 15.1049 13.7764C15.4369 13.7764 15.7559 13.9055 15.9945 14.1364L20.5135 18.6667V11.0507C20.5135 9.71056 20.2043 9.40271 18.8641 9.40271H3.79887C2.4587 9.40553 2.15085 9.71056 2.15085 11.0507ZM6.38741 15.0543C6.76195 15.0543 7.12114 14.9055 7.38598 14.6407C7.65082 14.3758 7.7996 14.0166 7.7996 13.6421C7.7996 13.2676 7.65082 12.9084 7.38598 12.6435C7.12114 12.3787 6.76195 12.2299 6.38741 12.2299H6.37894C6.0044 12.2314 5.6458 12.3816 5.38203 12.6475C5.11825 12.9134 4.9709 13.2732 4.9724 13.6477C4.9739 14.0223 5.12412 14.3809 5.39001 14.6447C5.65591 14.9084 6.0157 15.0558 6.39024 15.0543H6.38741Z" fill="#212529"/>
</svg>

                    <div className="ml-2">
                        <p className="font-semibold text-xs">Image XYZ</p>
                        <p className="text-xs text-gray-400">JPG • 1.2MB</p>
                    </div>
                </div>
                <div className="bg-gray-100 w-[30vh] p-2 border rounded-md flex items-center mb-4 text-xs">
                <svg width="22" height="31" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.717 9.20413L17.1465 2.307C16.3451 1.48592 15.2234 0.993265 13.9414 0.993265H4.48621C2.08235 0.829041 -0.000976562 2.96388 -0.000976562 5.42713V28.4175C-0.000976562 30.8807 1.9221 33.0156 4.48621 33.0156H20.5118C22.9157 33.0156 24.999 31.0451 24.999 28.4175V12.3243C24.999 11.1747 24.5182 10.0252 23.717 9.20413ZM7.69134 13.9665H12.499C13.1401 13.9665 13.7811 14.4591 13.7811 15.2802C13.7811 16.1012 13.3003 16.5938 12.499 16.5938H7.69134C7.05031 16.5938 6.40927 16.1012 6.40927 15.2802C6.40927 14.4591 7.05031 13.9665 7.69134 13.9665ZM17.3067 23.1626H7.69134C7.05031 23.1626 6.40927 22.67 6.40927 21.8489C6.40927 21.0278 6.89006 20.5351 7.69134 20.5351H17.3067C17.9478 20.5351 18.5887 21.0278 18.5887 21.8489C18.5887 22.67 17.9478 23.1626 17.3067 23.1626Z" fill="#212529"/>
</svg>

                    <div className="ml-2">
                        <p className="font-semibold text-xs">Document XYZ</p>
                        <p className="text-xs text-gray-400">PDF • 12MB</p>
                    </div>
                </div>
            </div>
            
            <EngagementBar/>
        </div>
        <div className="flex justify-between items-center mt-4">
        <button className="border border-gray-300 text-xs rounded-md px-4 py-1">
          &lt; Previous Issue
        </button>
        <button className="border border-gray-300 text-xs rounded-md px-4 py-1">
          Next Issue &gt;
        </button>
      </div>
      <div className='mt-4'>
        <Comments />
      </div>
        </>
    );
};

export default IssuesTab;
