'use client'
import React, { useState } from 'react'
import Styles from './Account.module.css'
import Image from 'next/image'
import google from './Assets/Group (6).png'
import apple from './Assets/Frame (1).png'
import edit from './Assets/Line.png'
import Models from './Models/Models'
import Model2 from './Model2/Model2'

function Account() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [Language, setLanguage] = useState("English (Indian)");

  const openModal = () => {
    
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    
    setIsModalOpen2(true);
  };

  const closeModal = (leng:string) => {
    setIsModalOpen(false);
    setLanguage(leng)

    

    
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
   

    

    
  };


  return (
    <div className={Styles.profile_cnt}>
    <div className={Styles.Account_cnt} >
      <div className={Styles.account_cnt_2}>
      <div className={Styles.upper_cnt}>
       Other way of Authentication
      </div>
      <div className={Styles.Lower_cnt}>
        <div className={Styles.authentication_cnt}>
          <div className={Styles.auth_img_cnt}>
            <Image src={google} alt='Imags' />
          </div>
          <h2>Google Authentication</h2>
          <div className={Styles.sing_box}>Signin with Google</div>
        </div>
        <div className={Styles.authentication_cnt}>
          <div className={Styles.auth_img_cnt}>
            <Image src={apple} alt='Imags' />
          </div>
          <h2>Apple Authentication</h2>
          <div className={Styles.sing_box}>Signin with Apple</div>
        </div>
      </div>
      </div>
      <div className={Styles.account_cnt_3}>
      <div className={Styles.upper_cnt_3}>
          Leanguage
          <div className={Styles.edit_cnt}  onClick={()=>{openModal()}}> <div className={Styles.img_cnt} ><Image src={edit} alt='image' /></div>Edit </div>
      </div>
      <div className={Styles.Lower_cnt}>
        <h1 style={{color:'gray'}}>Language you use in Clubwize</h1>
        <h1 style={{color:'black'}}>{Language}</h1>
      </div>
      </div>
        {isModalOpen ?  <Models  closeModal={closeModal}  /> : ' '}
        {isModalOpen2 ?  <Model2  closeModal2={closeModal2}  /> : ' '}
      <div className={Styles.account_cnt_3}>
      <div className={Styles.upper_cnt_3}>
          Change Password
          <div className={Styles.edit_cnt} onClick={()=>{openModal2()}}> <div className={Styles.img_cnt}><Image src={edit} alt='image' /></div>Edit </div>
      </div>
      <div className={Styles.Lower_cnt}>
       <div className={Styles.password_cnt}>
        <div className={Styles.password_cnt_1}>
        <h1 style={{color:'gray'}}>Email id</h1>
        <h2 style={{color:'black'}}>raghu@gmail.com</h2>
        </div>
        <div className={Styles.line}></div>
        <div className={Styles.password_cnt_2}>
        <h1 style={{color:'gray'}}>Current Password</h1>
        <h2 style={{color:'black'}}>*********</h2>
        </div>
       </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Account
