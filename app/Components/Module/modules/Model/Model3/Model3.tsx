import React from 'react'
import styles from './Model2.module.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Image from 'next/image'
import logo from '../Assets/Rectangle 3069.svg'

function Model3() {
  return (
    <div className={styles.review_cnt}>
      Review for module name(2)
      <div className={styles.box_cnt}>

        <div className={styles.upper_cnt}>
         <div className={styles.logo_cnt}>
          <div style={{display:'flex',gap:'5px'}}>
          <h1>4.5</h1>
         <div className="flex items-center">
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStarHalfAlt className="text-orange-500" />
      </div>
          </div>

      <div className={styles.img_text_cnt}>
        <Image src={logo} alt='' />
        Albert Floes
      </div>
         </div>
         <h5 style={{color:'gray'}}>14 Feb 2024</h5>
        </div>

     <p style={{display:'flex',alignItems:'center',textAlign:'left',justifyContent:'left', padding:'10px 10px'}}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, 
        debitis deserunt? Necessitatibus minima, iusto cupiditate, iste odio,
         maiores accusamus quas nesciunt iure illo placeat laborum officiis. Minus similique et 
         iusto iste voluptatem cumque adipisci veniam facere eos laudantium, eaque magnam enim 
         praesentium culpa,
         hic repellendus voluptatibus molestiae unde! Numquam, sequi.
         lore, ragu is the best boy in the world

     </p>

      </div>

      <div className={styles.box_cnt}>

<div className={styles.upper_cnt}>
 <div className={styles.logo_cnt}>
  <div style={{display:'flex',gap:'5px'}}>
  <h1>4.5</h1>
 <div className="flex items-center">
<FaStar className="text-orange-500" />
<FaStar className="text-orange-500" />
<FaStar className="text-orange-500" />
<FaStar className="text-orange-500" />
<FaStarHalfAlt className="text-orange-500" />
</div>
  </div>

<div className={styles.img_text_cnt}>
<Image src={logo} alt='' />
Bokkie simson
</div>
 </div>
 <h5 style={{color:'gray'}}>14 Feb 2024</h5>
</div>

<p style={{display:'flex',alignItems:'center',textAlign:'left',justifyContent:'left', padding:'10px 10px'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, 
debitis deserunt? Necessitatibus minima, iusto cupiditate, iste odio,
 maiores accusamus quas nesciunt iure illo placeat laborum officiis. Minus similique et 
 iusto iste voluptatem cumque adipisci veniam facere eos laudantium, eaque magnam enim 
 praesentium culpa,
 hic repellendus voluptatibus molestiae unde! Numquam, sequi.
 lore, ragu is the best boy in the world

</p>

</div>
    </div>
  )
}

export default Model3
