'use client'
import React, { useState } from 'react'
import styles from './Setting_bar.module.css'
import Image from 'next/image';
import Setting_logo from './Assets/Group (3).png'
import human from './Assets/Group (5).png'
import arrow from './Assets/Icon ionic-ios-arrow-forward (3).png'
import provecy from './Assets/Group (4).png'
import Notification from './Assets/notification 1.png'
import Node from './Assets/Node (3).png'
import Club from './Assets/Vector (1).png'
import Blocked from './Assets/Frame.png'

interface ChildComponentProps {
  handleComponent: (comp: number) => void;
}


const   Setting_bar :React.FC<ChildComponentProps> = ({ handleComponent }) => {


const [indes, setIndex] = useState(1);


function HandleClicked(ind:number){

  console.log(ind);
  
   setIndex(ind)
   handleComponent(ind)

}


  return (
    <div>
      <div className={styles.setting_cnt} style={{ borderRadius:"10px"} }>
        <div className={styles.upper_cnt}>
          <Image src={Setting_logo} alt='Image' />
          <h1>Settings</h1>
        </div>
        <div className={styles.menu_cnt}>
          <div onClick={()=>{HandleClicked(1)}} className={`${indes == 1 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={human} alt='Image'  /> 
            </div>
            <h2>Profile</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div  onClick={()=>{HandleClicked(2)}} className={`${indes == 2 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={Setting_logo} alt='Image'  /> 
            </div>
            <h2>Account Prefrence</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div onClick={()=>{HandleClicked(3)}} className={`${indes == 3 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={provecy} alt='Image'  /> 
            </div>
            <h2>Privecy</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div onClick={()=>{HandleClicked(4)}} className={`${indes == 4 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={Notification} alt='Image'  /> 
            </div>
            <h2>Notifications</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div onClick={()=>{HandleClicked(5)}} className={`${indes == 5 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={Node} alt='Image'  /> 
            </div>
            <h2>Node</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div onClick={()=>{HandleClicked(6)}} className={`${indes == 6 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={Club} alt='Image'  /> 
            </div>
            <h2>Club</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>

          <div onClick={()=>{HandleClicked(7)}} className={`${indes == 7 ?  styles.menu_cnt_bar_2 : styles.menu_cnt_bar}`}>
            <div className={styles.img_cnt_menu_bar}>
            <Image src={Blocked} alt='Image'  /> 
            </div>
            <h2>Blocked</h2>
            <div className={styles.arrow_cnt}>
            <Image src={arrow} alt='Image'  /> 
            </div>
          </div>
        </div>

        


      </div>
    </div>
  )
}

export default Setting_bar
