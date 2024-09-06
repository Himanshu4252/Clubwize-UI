import React, { useState } from 'react'
import styles from './Main_cnt.module.css'
import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import Image from 'next/image'; // Next.js optimized Image component
import bgimage from './Assets/image 3.svg'
import profile from './Assets/Group 633852.svg'
import edit from './Assets/Line.png'
import Model_p from './Model_profile/Model_p';



function Main_cnt() {

  const [isModalOpen2, setIsModalOpen2] = useState(true);

  const btn = ['UI Designer','UX Designer','Design System','Problem Solving','Ui Kit','HTML','Web Devlopment','Design Thinking','CSS3','Content Writing']

  const closeModal2 = () => {
    setIsModalOpen2(false);
   

    

    
  };

  const openModal2 = () => {
    
    setIsModalOpen2(true);
  };

  

  return (
    <div className={styles.profile_cnt}>
      <div className={styles.profile_card}>
         <div className={styles.bg_image}>
           <Image src={bgimage} alt='image' />
         </div>
         <div className={styles.profile_img}>
         <Image src={profile} alt='image' />
         </div>
         <div className={styles.edit} onClick={()=>{openModal2()}}>
         <Image src={edit} alt='image' />
         Edit
         </div>
         {isModalOpen2 ?  <Model_p  closeModal2={closeModal2}  /> : ' '}
         <div className={styles.lower_cnt}>
          <div className={styles.text_box}>
            Leslia Alexender
            <p>Lead Market Architect</p>
            <p>Our mission is simple but cruisel: to protect the well being of tree</p>
            <p><span>21.3k</span>21.3k contribution</p>
            </div>
         
         </div>
      </div>
      <div className={styles.info_card}>
        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Your intrest 
          <div className={styles.edis}>
         <Image src={edit} alt='image' />
         Edit
         </div>
             </div>
          <div className={styles.lower_box}>
            {btn.map((btn,ind)=>(
               <button key={ind} className={styles.btn}>{btn}</button>
            ))}
          </div>
        </div>



        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Persnol Information 
          <div className={styles.edis}>
         <Image src={edit} alt='image' />
         Edit
         </div>
             </div>
          <div className={styles.lower_box}>
          <div className={styles.password_cnt_1}>
        <h1 style={{color:'gray'}}>Birth Date</h1>
        <h2 style={{color:'black'}}>07-08-2003</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.password_cnt_2}>
        <h1 style={{color:'gray'}}>Gender</h1>
        <h2 style={{color:'black'}}>Male</h2>
        </div>
          </div>
        </div>

        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Persnol Information 
          <div className={styles.edis}>
         <Image src={edit} alt='image' />
         Edit
         </div>
             </div>
          <div className={styles.lower_box}>
          <div className={styles.password_cnt_1}>
        <h1 style={{color:'gray'}}>Email Address</h1>
        <h2 style={{color:'black'}}>raghu@gmail.com</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.password_cnt_2}>
        <h1 style={{color:'gray'}}>Phone Number</h1>
        <h2 style={{color:'black'}}>91+ 6304226533</h2>
        </div>
          </div>
        </div>
      </div>


    
       
      
    </div>
  )
}

export default Main_cnt
