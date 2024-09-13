import React, { useState } from 'react'
import styles from './Main_cnt.module.css'
import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import Image from 'next/image'; // Next.js optimized Image component
import bgimage from './Assets/image 3.svg'
import profile from './Assets/Group 633852.svg'
import edit from './Assets/Line.png'
import Model_p from './Model_profile/Model_p';
import Model_I from './Model_Intrest/Model_I';
import Model_info from './Model_persnol_info/Model_info';
import Model_c from './Model_contect/Model_c';



function Main_cnt() {

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [pimg,setPImg] = useState(profile);
  const [Bimg,setBImg] = useState(bgimage);
  const [Fname,setFname] = useState('Leslia ')
  const [Lname,setLname] = useState('Alexender')
  const [Designation,setDesignation] = useState('Lead Market Architect')

  const btn = ['UI Designer','UX Designer','Design System','Problem Solving','Ui Kit','HTML','Web Devlopment','Design Thinking','CSS3','Content Writing']

  const [skilles,setSkilles] = useState<string[]>(btn);



  const [userInfo, setUserInfo] = useState({gender: 'Male',dob: '07-08-2003',});

  const [email,setemail] = useState<String>('raghu@gmail.com')
  const [phone,setphone] = useState<string>("6204226533")



  const closeModal2 = () => {
    setIsModalOpen2(false);
   

    

    
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
   

    

    
  };

  const closeModal4 = () => {
    setIsModalOpen4(false);
    
  };

  const closeModal5 = () => {
    setIsModalOpen5(false);
    
  };

  const setData = (img1: string, img2: string, firstName: string, lastName: string, designation: string) => {
    console.log(img1);
     if (img1) {
      setPImg(img1); 
     }// Update profile image correctly
    
    console.log(firstName);
    setFname(firstName)
    console.log(lastName);
    setLname(lastName)
    console.log(designation);
    setDesignation(designation)
  };


  const UpdateSkilles = (childSkills: string[])=>{

    console.log(childSkills);
    setSkilles(childSkills)
    closeModal3()
    
    
    

  }


  const handleUpdate = (gender: string, dob: string) => {
     
    if (dob) {
      setUserInfo({ gender, dob });
    }
     closeModal4() // Close the pop-up after updating
  };

  const handleUpdate2 = (email: string, phone: string) => {
     
    console.log(email,phone);
    
     setemail(email)
     setphone(phone)
     closeModal5() // Close the pop-up after updating
  };
  

  const openModal2 = () => {
    
    setIsModalOpen2(true);
  };

  const openModal3 = () => {
    
    setIsModalOpen3(true);
  };

  const openModal4 = () => {
    
    setIsModalOpen4(true);
  };

  const openModal5 = () => {
    
    setIsModalOpen5(true);
  };
  

  return (
    <div className={styles.profile_cnt}>
      <div className={styles.profile_card}>
         <div className={styles.bg_image}>
           <Image src={Bimg} alt='image'   />
         </div>
         <div className={styles.profile_img}>
         <Image src={pimg} alt='image' width={80} height={80} />
         </div>
         <div className={styles.edit} onClick={()=>{openModal2()}}>
         <Image src={edit} alt='image' />
         Edit
         </div>
         {isModalOpen2 ?  <Model_p  closeModal2={closeModal2} setDat={setData}  /> : ' '}
         <div className={styles.lower_cnt}>
          <div className={styles.text_box}>
            {Fname}&nbsp;{Lname}
            <p>{Designation}</p>
            <p>Our mission is simple but cruisel: to protect the well being of tree</p>
            <p><span>21.3k</span> contribution</p>
            </div>
         
         </div>
      </div>
      <div className={styles.info_card}>
        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Your intrest 
          <div className={styles.edis} onClick={openModal3}>
         <Image src={edit} alt='image' />
         Edit
         </div>
         {isModalOpen3 ?  <Model_I  closeModal3={closeModal3} UpdateSkilles={UpdateSkilles}   /> : ' '}
             </div>
          <div className={styles.lower_box}>
            {skilles.map((btn,ind)=>(
               <button key={ind} className={styles.btn}>{btn}</button>
            ))}
          </div>
        </div>



        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Persnol Information 
          <div className={styles.edis} onClick={openModal4}>
         <Image src={edit} alt='image' />
         Edit
         </div>
         {isModalOpen4 ?  <Model_info  closeModal4={closeModal4} handleUpdate={handleUpdate}  /> : ' '}
             </div>
          <div className={styles.lower_box}>
          <div className={styles.password_cnt_1}>
        <h1 style={{color:'gray'}}>Birth Date</h1>
        <h2 style={{color:'black'}}>{userInfo.dob}</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.password_cnt_2}>
        <h1 style={{color:'gray'}}>Gender</h1>
        <h2 style={{color:'black'}}>{userInfo.gender}</h2>
        </div>
          </div>
        </div>

        <div className={styles.text_cnt}>
          <div className={styles.upper_cnt}>Contect Information 
          <div className={styles.edis} onClick={openModal5}>
         <Image src={edit} alt='image' />
         Edit
         </div>
         {isModalOpen5 ?  <Model_c  closeModal5={closeModal5} handleUpdate2={handleUpdate2}  /> : ' '}
             </div>
          <div className={styles.lower_box}>
          <div className={styles.password_cnt_1}>
        <h1 style={{color:'gray'}}>Email Address</h1>
        <h2 style={{color:'black'}}>{email}</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.password_cnt_2}>
        <h1 style={{color:'gray'}}>Phone Number</h1>
        <h2 style={{color:'black'}}>91+ {phone}</h2>
        </div>
          </div>
        </div>
      </div>


    
       
      
    </div>
  )
}

export default Main_cnt
