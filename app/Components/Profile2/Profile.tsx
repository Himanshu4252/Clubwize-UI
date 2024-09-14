import React, { useState } from 'react'
import styles from './Profile.module.css'
import Image from 'next/image'
import backG from './Assets/image 1.png'
import profile from './Assets/Pfotile pic (1).png'
import buttum from './Assets/button.png'
import pin from './Assets/button (1).png'
import img_text from './Assets/Frame 1010105932.jpg'
import img_ from './Assets/Frame 1010106209.png'
import icon from './Assets/Icon ionic-ios-arrow-forward (1).png'
import group1 from './Assets/Group.png'
import group2 from './Assets/Group 633647.png'
import group3 from './Assets/Group 633649.png'
import group4 from './Assets/Group 633674.png'
import group5 from './Assets/Group 633676.png'
import group6 from './Assets/Group 633729.png'
import group7 from './Assets/Group 633864.png'
import group8 from './Assets/Group (1).png'
import group9 from './Assets/Group 633674.png'


interface ChildComponentProps {
    compchange: (ind: number) => void;
}



const  Profile :  React.FC<ChildComponentProps> = ({ compchange }) => {

    const menuItemsData = [
        { menuName: "News Feed", img: group1 },
        { menuName: "Module", img: group2 },
        { menuName: "Profile", img: group3 },
        { menuName: "Chapters", img: group4 },
        { menuName: "Members", img: group5 },
        { menuName: "Approval", img: group6 },
        { menuName: "Insights", img: group7 },
        { menuName: "Activity", img: group8 },
        { menuName: "Performance", img: group9 },
      ];

      const [activeIndex, setActiveIndex] = useState<number | null>(0);// to track which menu is active

      const handleClick = (index:number) => {
        setActiveIndex(index); // Set the active menu item by index
        compchange(index)
      };




  return (
    <div className='sticky top-[8vh]'>
    <div className={styles.profile_card}>
        <div className={styles.background_img_cnt}>
            <Image src={backG} alt='images' />
        </div>  
        <div className={styles.profile_pic_cnt}>
            <div className={styles.main_cnt}>
                <Image src={profile} alt='Images' />
            </div>
            <div className={styles.btn_cnt}>
           
           <button className={styles.btn}><Image src={buttum} alt='Images' /></button>
           <button className={styles.btn}><Image src={pin} alt='Images' /></button>

           </div>
           
          

           

        </div>
        <div className={styles.text_cnt_profile}>
            <div className={styles.haid_cnt}>
            <Image src={img_text} alt='Images' />
            </div>
            <button className={styles.joining_btn}>Joined</button>

            <div className={styles.text_cnt_box}>
            

          
             {menuItemsData.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`${styles.textBox} ${
            activeIndex === index ? `${styles.bg_color} ${styles.border_green}` : ""
          }`}
        >
          <div className={styles.img_cnt}>
            <Image src={item.img} alt={item.menuName} />
          </div>
          <p>{item.menuName}</p>
          <div className={styles.arrow_left}>
            <Image src={icon} alt="arrow" />
          </div>
        </div>
      ))}
             

             
           
             
            </div>
        </div>

       

    </div>
      
    </div>
  )
}

export default Profile
