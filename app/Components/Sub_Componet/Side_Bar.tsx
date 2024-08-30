"use client"
import React, { useState } from 'react'
import styles from './Side_Bar.module.css'
import Image from 'next/image'
import img1 from './Assets/Logo mark.jpg'
import logo from './Assets/Vector.png'
import star from './Assets/Node.png'
import club from './Assets/Club.png'
import img01 from './Assets/Rectangle 3070.png'
import img02 from './Assets/Node (1).png'
import img03 from './Assets/Rectangle 3069.png'
import img04 from './Assets/Rectangle 3070 (1).png'
import plus  from './Assets/Plus.png'
import Link from 'next/link'
import btn1 from './Assets/Recent activity.png'
import btn2 from './Assets/Setting.png'
import btn3 from './Assets/Bookmark.png'
import arrow from './Assets/Icon ionic-ios-arrow-forward.png'
import node1 from './Assets/Rectangle 3064.png'
import node2 from './Assets/Rectangle 3064 (4).png'
import node3 from './Assets/Rectangle 3064 (5).png'
import node4 from './Assets/Rectangle 3064 (6).png'
import node5 from './Assets/Rectangle 3064 (7).png'
import node6 from './Assets/Rectangle 3064 (8).png'
import node7 from './Assets/Rectangle 3064 (9).png'
import node8 from './Assets/Rectangle 3064 (10).png'
import node9 from './Assets/Rectangle 3064 (11).png'
import node10 from './Assets/Rectangle 3064.png'
import popup1 from './Assets/popover.png'
import popup2 from './Assets/popover (1).png'

function Side_Bar() {

  const [isModel,setIsmodel] = useState(false)
  const [isModel2,setIsModel2] = useState(false)
  const [isModel3,setIsModel3] = useState(false)
  const [changeBg,setChangeBg] = useState(false)

  return (
    <div className='sticky top-0'>
 
<div className={styles.sidebar}>
     
     <div className={styles.logo_cnt}>
         <Image src={img1} alt='img' />
     </div>
     <div className={styles.btn_upper}>
        <div className={styles.line}></div>
        <div className={styles.circule_btn}>
        <Image src={arrow} alt='image' />
        </div>
     </div>
     <div className={styles.home_nav_cnt}>
  <Image src={logo} alt='imge' />
     </div>
     <div className={styles.home_lines}>
      <div className={styles.lines}></div>
     </div>


     <div  className={styles.star_cnt}>
      <Image src={star} alt='image' />
     </div>


     <div  className={styles.img_cnt_}>
      <Link href='/Components/Home' className={styles.img1_cnt}  > 
      <Image src={img01} alt='image'  />
      </Link>

      <div className={styles.img1_cnt}> 
      <Image src={img02} alt='image'  />
      </div>

      <div className={styles.img1_cnt}> 
      <Image src={img03} alt='image'  />
      </div>

      <div onClick={()=>{setIsmodel(!isModel)}} style={{cursor:'pointer'}} className={styles.img1_cnt}> 
      <div  className={styles.internsl_img}><Image src={plus} alt='img' /></div>
      <Image src={img04} alt='image'  />


      
      </div>

      {isModel ?
       <div className={styles.model_cnt}>
        <div className={styles.mail_cnt_model} >
          <div className={styles.node_heading}>
            <div className={styles.node_logo}>
              <Image src={star} alt='image' />
              <h3>Nodes</h3>
            </div>
            <div className={styles.node_logo}>
              <h5>see all</h5>
              <h4 style={{cursor:'pointer'}} onClick={()=>{setIsmodel(false)}}>X</h4>
              
            </div>
          </div>
          <div className={styles.body_nodes}>
          <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node1} alt='image' />
              </div>
              <div className={styles.text_cnt}>Raghu pandey</div>
            </div>
         
          
            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node2} alt='image' />
              </div>
              <div className={styles.text_cnt}>Rahul deshai</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node3} alt='image' />
              </div>
              <div className={styles.text_cnt}>nareen</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node4} alt='image' />
              </div>
              <div className={styles.text_cnt}>rahul prasad</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node5} alt='image' />
              </div>
              <div className={styles.text_cnt}>salt alt man</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node6} alt='image' />
              </div>
              <div className={styles.text_cnt}>sunder pichai</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node7} alt='image' />
              </div>
              <div className={styles.text_cnt}>rajesh jhunjhun</div>
            </div>
            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node8} alt='image' />
              </div>
              <div className={styles.text_cnt}>Prashant Pandey</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node9} alt='image' />
              </div>
              <div className={styles.text_cnt}>Gourav Prasad</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node10} alt='image' />
              </div>
              <div className={styles.text_cnt}>Ritu Singh </div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node2} alt='image' />
              </div>
              <div className={styles.text_cnt}>Sachin Singh</div>
            </div>

            <div className={styles.img_text_cnt}>
              <div className={styles.img_cnt}>
              <Image src={node5} alt='image' />
              </div>
              <div className={styles.text_cnt}>Preeti singh</div>
            </div>
           
          </div>
        </div>
      </div> 
        : ' '} 


     </div>


     <div className={styles.home_lines}>
      <div className={styles.lines}></div>
     </div>


     <div className={styles.star_cnt}>
      <Image src={club} alt='image' />
     </div>

     <div  className={styles.img_cnt_}>
      <Link href='/Components/Home' className={styles.img1_cnt}> 
      <Image src={img03} alt='image'  />
      </Link>

      <div onClick={()=>{setIsModel2(!isModel2)}}   className={styles.img1_cnt} > 
      <Image src={node3} alt='image'  />
      {isModel2 ?  <div className={styles.model_2_cnt}>
      <Image src={popup1} alt='image' />
      </div> : " "}
      </div>
     

      <div className={styles.img1_cnt}> 
      <Image src={img03} alt='image'  />
      </div>
      

      

      <div className={styles.img1_cnt}> 
      <div className={styles.internsl_img}><Image src={plus} alt='img' /></div>
      <Image src={img04} alt='image'  />
      
      </div>

      


     </div>

     <div className={styles.home_lines}>
      <div className={styles.lines}></div>
     </div>

    <div className={styles.nav_footer}>
      <button className={styles.btn1}>
      <Image src={btn1} alt='image' />
      </button>

      <button onClick={()=>{setIsModel3(!isModel3)}} className={styles.btn1}>
      <Image src={btn3} alt='image' />
      {isModel3 ?  <div className={styles.model_2_cnt2}>
      <Image src={popup2} alt='image' />
      </div> : " "}
      </button>

      <button className={styles.btn1}>
      <Image src={btn2} alt='image' />
      </button>

      
      </div> 






    </div>

       
    </div>
  )
}

export default Side_Bar
