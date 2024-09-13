import React, { useState } from 'react'
import styles from './Model.module.css'
import icon from './Assets/Group (1).svg'
import Image from 'next/image'
import { FaStar, FaStarHalfAlt, FaUsers } from 'react-icons/fa'
import club from './Assets/Club (1).svg'
import node from './Assets/Node.svg'
import Model1 from './Model1/Model1'
import Model2 from './Model2/Model2'
import Model3 from './Model3/Model3'

interface ChildComponentProps {
    setOpenModel: () => void;
    
  }

const Model  : React.FC<ChildComponentProps> = ({ setOpenModel }) => {

    const [activeTab, setActiveTab] = useState<String>('Overview');

    const tabs = ['Overview', 'Features', 'Reviews'];

    const setActiveTabs = (tabs:String)=>{

        setActiveTab(tabs)
        

    }

    const compswich = (ind:String)=>{

         

        switch (ind) {
            case 'Overview':
                return(<Model1 />)
                break;

            case 'Features':
                    return(<Model2 />)
                    break;
            
          case 'Reviews':
                return(<Model3 />)
                break;
        
            default:
                break;
        }


    }



  return (
    <div className={styles.model_cnt_1}>
      <div className="flex items-center justify-between w-full h-[100px] p-4 bg-white  rounded-md">
  
  <div className="flex items-center">
    {/* <!-- SVG Icon --> */}
    <div className="w-[50px] h-[50px] flex items-center justify-center bg-purple-500 rounded-lg mr-4">
        <Image src={icon} alt="Module Icon" className="w-6 h-6" />
      </div>
    
    {/* <!-- Text Content --> */}
    <div>
      <h2 className="font-semibold text-lg">Module name</h2>
      <p className="text-gray-500 text-sm">News • Updates • Recents</p>
    </div>
  </div>
{/* 
  <!-- Buttons --> */}
  <div className="flex items-center space-x-2">
    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">+ Add module</button>
    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700">Copy Link</button>
    <button className="text-gray-500 text-xl" onClick={()=>{setOpenModel()}}>✖</button>
  </div>
</div>

<div className="flex items-center w-full h-[40px] space-x-1">
      {/* Custom SVG Icon */}
      <div className="flex items-center bg-white-100 rounded-md px-2 py-1">
        <Image src={node} alt="Custom Icon" className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">2k</span>
        <Image src={club} alt="Custom Icon" className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">500</span>
      </div>

      {/* Rating stars */}
      <div className="flex items-center">
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStarHalfAlt className="text-orange-500" />
      </div>

      {/* Rating numbers */}
      <span className="text-sm font-medium text-gray-700">4.5 | 2.5k</span>
    </div>
    <div className="flex border-b w-full pl-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTabs(tab)}
          className={`px-4 py-2 text-gray-500 font-medium transition-colors duration-200 ${
            activeTab === tab
              ? 'text-green-500 border-b-4 border-green-500 rounded-tl-lg rounded-tr-lg'
              : 'hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
    
    <div className={styles.cnt}>
       {compswich(activeTab)}
    </div>

    



    </div>
  )
}

export default Model
