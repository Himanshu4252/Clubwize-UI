import React from 'react'
import styles from './Model2.module.css'
import Image from 'next/image'
import img from '../Assets/Group.jpg'



function Model2() {

    const arr = [1,2,3,4,5,6]


  return (
    <div className={styles.cnt_2}>
     {arr.map((data)=>{
          
          return(
            <div className={styles.box}>
            <div className='flex p-1'>
                <Image src={img} alt='raghu' />
                <p style={{color:'black',fontSize:'14px',marginLeft:'5px'}}>Lorem, ipsum dolor career?.</p>
            </div>
            <p style={{color:'gray',fontSize:'10px',marginLeft:'20px',textAlign:'left'}}>Lorem ipsum dolor sit amet.</p>
          </div>
          )

     })}
      <div className={styles.footer}>
            By using Clubwize You agree to the <span>Privecy Policy</span> , <span>terms of use</span> and <span>permission</span>
         </div>
    </div>
  )
}

export default Model2
