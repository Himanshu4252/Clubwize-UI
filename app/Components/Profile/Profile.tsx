import React from 'react'
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



function Profile() {
  return (
    <div>
    <div className={styles.profile_card}>
        <div className={styles.background_img_cnt}>
            <Image src={backG} alt='images' />
        </div>
        <div className={styles.profile_pic_cnt}>
            <div className={styles.main_cnt}>
                <Image src={profile} alt='Images' />
            </div>
           
           <div className={styles.btn_cnt}>
           <Image src={buttum} alt='Images' />
           <Image src={pin} alt='Images' />
           </div>

           

        </div>
        <div className={styles.text_cnt_profile}>
            <div className={styles.haid_cnt}>
            <Image src={img_text} alt='Images' />
            </div>
            <button className={styles.joining_btn}>Joined</button>

            <div className={styles.text_cnt_box}>
             
             <div className={styles.textBox} style={{backgroundColor:'#22b57374',border:'1px solid green'}}>
                <div className={styles.img_cnt}>
                <Image src={group1} alt='Images' />
                </div>
                <p>News Feed</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group2} alt='Images' />
                </div>
                <p>module</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>


             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group3} alt='Images' />
                </div>
                <p>Profile</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group4} alt='Images' />
                </div>
                <p>Chapters</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group5} alt='Images' />
                </div>
                <p>Members</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group6} alt='Images' />
                </div>
                <p>Approval</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group7} alt='Images' />
                </div>
                <p>Insights</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group8} alt='Images' />
                </div>
                <p>Activity</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             <div className={styles.textBox}>
                <div className={styles.img_cnt}>
                <Image src={group9} alt='Images' />
                </div>
                <p>Performance</p>
                <div className={styles.arrow_left}>
                    <Image src={icon} alt='image' />
                </div>
             </div>

             

             
           
             
            </div>
        </div>

       

    </div>
      
    </div>
  )
}

export default Profile
