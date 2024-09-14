import React from 'react'
import style from './style.module.css'
import { NodeIcon, ClubIcon, prof1 } from '@/app/Components/searchPanel/photos'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className={style.cardWrapper}>
        <div className={style.cardupper}>
            <div className={style.cardTitleText}>
                <div className={style.cardTitle}>
                <p className={style.CardHeadline}>Sardar Patel Rules</p>
                <svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 4.5C0.675 4.5 0 5.175 0 6C0 6.825 0.675 7.5 1.5 7.5C2.325 7.5 3 6.825 3 6C3 5.175 2.325 4.5 1.5 4.5ZM1.5 0C0.675 0 0 0.675 0 1.5C0 2.325 0.675 3 1.5 3C2.325 3 3 2.325 3 1.5C3 0.675 2.325 0 1.5 0ZM1.5 9C0.675 9 0 9.675 0 10.5C0 11.325 0.675 12 1.5 12C2.325 12 3 11.325 3 10.5C3 9.675 2.325 9 1.5 9Z" fill="#495057"/>
                </svg>
                </div>
                <div className={style.cardDesParent}>
                <p >BG3035  • Ground  •</p>
                <Image src={ClubIcon} alt='club icon' />
                <p>236 •</p>
                <Image src={NodeIcon} alt='nodeIcon' />
               <p>222 </p>
               
                 
                </div>
            </div>
        </div>
        <p className={style.cardDescription}>This set of rules aims to guide restaurants in accommodating guests with various.</p>
    <div className={style.bottomDiv}>
        <div style={{display:"flex", flexDirection:"row"}}>
            <Image src={prof1} alt='user profile' />
            <p>Jacob colin</p>
        </div>
       <button className={style.bottomBtn}>168 of 323 found it relevant</button>
    </div>
    </div>
 )
}

export default Sidebar