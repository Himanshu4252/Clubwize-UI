import React from 'react'
import img from './Assetes/Frame 1010106301.svg'
import Image from 'next/image'
import styles from './Module_page.module.css'
import img2 from '../../../../public/Image/Group 633829 (2).svg'
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import logo1 from './Assetes/hub_FILL1_wght400_GRAD0_opsz24(1).svg'
import logo2 from './Assetes/Club.svg'
import logo3 from './Assetes/Group 633829 (3).svg'
import logo4 from './Assetes/Group.svg'

interface ChildComponentProps {
  setCloseModel: () => void;
  
}


const  Module_page : React.FC<ChildComponentProps> = ({ setCloseModel }) => {
  return (
    <div className=" flex flex-col gap-3 w-full h-max bg-white  rounded-md p-0">

     

     <div className="flex justify-between w-full">
        <Image src={img} alt='raghu'  />
     </div>
     <div className="flex flex-col gap-2 w-full  h-max bg-white border border-1 shadow-md rounded-md p-6">
       <div className='w-full text-[18px] h-[30px] border-b-2 border-gray-500'>
        Adobted Module
       </div>
        <div className={`${styles.img_cnt} no-scrollbar`}>

        <div className="w-max h-[100px]  p-1 flex flex-col items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#22B573'}}>
          <Image src={'Image/Group 633829 (1).svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700">Sadanda</span>
        </div>

        <div className="w-max h-[100px] p-1 flex flex-col items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#0D6EFD'}}>
          <Image src={'Image/Group 633829 (1).svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700">tennylipad</span>
        </div>

        <div className="w-max h-[100px] p-1 flex flex-col items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#D63384'}}>
          <Image src={'Image/Group 633829 (1).svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700">lazymircat</span>
        </div>

        <div className="w-max h-[100px]  p-1 flex flex-col items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#6610F2'}}>
          <Image src={'Image/Group 633829 (1).svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700">Whiterbabit</span>
        </div>

        <div className="w-max h-[100px]  p-1 flex flex-col items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#FFC107'}}>
          <Image src={'Image/Group 633829 (1).svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700">Bluesnake</span>
        </div>

        <div className="w-max h-[100px]  p-1 flex flex-col items-center"  onClick={()=>{setCloseModel()}}>
        <div className="w-[50px] h-[50px] border border-gray-300 p-1 flex flex-col items-center m-2 flex items-center justify-center h-screen" style={{background: '#ffff'}}>
          <Image src={'Image/Group 633649.svg'} alt='image' width={23} height={25} />
        </div>
       <span className="text-[12px] text-gray-700" >see all</span>
        </div>

        

      

      

       

     

        
        </div>

        
     </div>

     <div className="flex flex-col gap-2 w-full  h-max bg-white border border-1 shadow-md rounded-md p-6">
       <div className='w-full text-[18px] h-[30px] border-b-2 border-gray-500 flex justify-between items-center'>
        Suggested Module

        <p style={{color:'green'}}>see all</p>
       </div>
       <div className={`${styles.img_cnt} no-scrollbar`}>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src="Image/Group 633829 (2).svg" alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-0 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 " /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
      
    </button>
       </div>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src={logo3} alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-2 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 ml-1" /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
    </button>
       </div>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src={logo4} alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-2 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 ml-1" /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
    </button>
       </div>

       </div>
       

        
     </div>

     <div className="flex flex-col gap-2 w-full  h-max bg-white border border-1 shadow-md rounded-md p-6">
       <div className='w-full text-[18px] h-[30px] border-b-2 border-gray-500 flex justify-between items-center'>
        All Module

        <p style={{color:'green'}}>see all</p>
       </div>
       <div className={`${styles.img_cnt} no-scrollbar`}>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src="Image/Group 633829 (2).svg" alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-0 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 " /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
      
    </button>
       </div>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src={logo3} alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-2 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 ml-1" /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
    </button>
       </div>

       <div className="relative w-[350px] h-[167px]  p-1   items-center text-left border border-1 shadow-md rounded-md p-6" style={{backgroundColor:'#F7D6E633'}}>
       <div className="flex justify-between items-center w-full h-[35px] p-0">
       <Image src={logo4} alt="Logo" className="h-full" height={60} width={60} />
        <span className="text-sm flex">
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <FaStar style={{ color: '#FFD700', position: 'absolute', left: 0 }} />
        <FaRegStar style={{ color: '#FFD700', position: 'absolute', left: 0, clipPath: 'inset(0 50% 0 0' }} />
      </div>
            4.5/2.5k</span>
        </div> 
        <p className='mt-1'>Binforf LTD</p>
        <p className='mt-1' style={{fontSize:'12px',color:'gray'}}>News Update Review</p>
     
        <button className="w-full h-[30px]  rounded-[8px] flex items-center justify-between p-2 border border-1 shadow-md rounded-md">
      {/* First box for logo and text */}
      <div className="flex items-center p-5 ">
        <Image src={logo1} alt="Logo" className="h-4 w-4 mr-2" /> {/* Adjust size as needed */}
        <span className="text-black">500</span>
      </div>

      <div className="flex items-center" >
        <Image src={logo2} alt="Logo" className="h-4 w-4 mr-2 ml-1" /> {/* Adjust size as needed */}
        <span className="text-black">200</span>
      </div>

      {/* Second box for Add + button */}
      <div className="flex items-center ml-auto">
        <span className="text-white mr-2">Add +</span>
        <FaPlus className="text-white" />
      </div>
    </button>
       </div>

       </div>
       

        
     </div>
    </div>
  )
}

export default Module_page
