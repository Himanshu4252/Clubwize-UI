import React from 'react'
import styles from './Module1.module.css'
import Image from 'next/image'
import img from '../Assets/image 6.svg'
import img1 from '../Assets/image 7.svg'
import img2 from '../Assets/image 8.svg'

function Model1() {
  return (
    <div className={styles.tab_cnt}>

        <div className={styles.img_cnt}>
         <Image src={img} alt='image' />
         <Image src={img1} alt='image' />
         <Image src={img2} alt='image' />
        </div>

    <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur.</h1>
    <p style={{fontSize:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Necessitatibus aliquam aut sint autem, 
        expedita maiores tempore ea id at facilis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Aperiam, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit
         . Doloribus fuga a velit nam eum totam!</p>

         <p style={{marginTop:'10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, voluptate aperiam 
            laboriosam rem  dicta?</p>

         <div className={styles.footer}>
            By using Clubwize You agree to the <span>Privecy Policy</span> , <span>terms of use</span> and <span>permission</span>
         </div>
      
    </div>
  )
}

export default Model1
