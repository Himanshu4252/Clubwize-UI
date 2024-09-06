"use client"
import React, { useState } from 'react'
import styles from '../Sub_Componet/Side_Bar.module.css'
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
import icon2 from './Assets/Icon ionic-ios-arrow-forward (2).png'
import Profile from '../Profile/Profile'
import node21 from './Assets/Node (2).png'
import pin from './Assets/push_pin.png'


import SearchBar from '../searchPanel/SearchBar'
import Setting_bar from './Profiles/Setting_bar'
import Main_cnt from './Profiles/Main_cnt/Main_cnt'
import Comments from '../NewsFeed/Comments/Comments'
import PostCard2 from '../NewsFeed/PostCard2/PostCard2'
import PostCard from '../NewsFeed/PostCard/PostCard'
import ModuleBar from '../NewsFeed/ModuleBar/ModuleBar'
import Team from '../Create_Team/Team'
import Account from './Profiles/Account/Account'
import Privecy from './Profiles/Privecy/Privecy'
import Notification from './Profiles/Notification/Notification'
import Nodes from './Profiles/Nodes/Nodes'
import Club from './Profiles/Club/Club'
import Blocked from './Profiles/Blocked/Blocked'



function Setting() {

  



  const name = 'hii'



    const [isModel,setIsmodel] = useState(false)
    const [isModel2,setIsModel2] = useState(false)
    const [isModel3,setIsModel3] = useState(false)
    const [changeBg,setChangeBg] = useState(false)
    const [isExpend,setIsExpend] = useState(false)

    const [component,setComponent] = useState(1)

    const handleComponent = (comp:number)=>{

       setComponent(comp)

    }

    const RenderCopmponent = ()=>{

       switch (component) {
        case 1:
          return(<Main_cnt />);
          break
        case 2:
          return(<Account />)
          break
        case 3:
          return(<Privecy />)
          break
        case 4:
          return(<Notification />)
          break
        case 5:
          return(<Nodes />)
          break
        case 6:
          return(<Club />)
          break
        case 7:
            return(<Blocked />)
            break
        

          
        
       
        default:
          break;
       }

    }

  return (
    <div className="flex gap-4" style={{zIndex:'1000'}}>
      <div>
      <div className='sticky top-0'>
 
 <div className={`${isExpend ? styles.expend_slider  :  styles.sidebar}`}>
      
      <div className={styles.logo_cnt}>
          <Image src={img1} alt='img' />
          <div className={`${isExpend ? styles.text_cnt_home : styles.text_cnt_not_home}`}>Clubwise</div>
      </div>
     
      <div className={styles.btn_upper}>
         <div className={styles.line}></div>
         <div onClick={()=>{setIsExpend(!isExpend)}}  className={styles.circule_btn}>
         {isExpend ?  <Image src={icon2} alt='image'  /> :  <Image src={arrow} alt='image'  />}
         </div>
      </div>
      <div className={styles.home_nav_cnt}>
   <Image src={logo} alt='imge' />
   <div className={`${isExpend ? styles.text_cnt_home : styles.text_cnt_not_home}`}>Dashboard</div>
      </div>
      <div className={styles.home_lines}>
       <div className={styles.lines}></div>
      </div>
 
 
      <div  className={styles.star_cnt}>
       <Image src={star} alt='image' />
      </div>
 
 
      <div  className={styles.img_cnt_}>
       <div className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
           <Image src={img01} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Gretchen&nbsp;Leaner
         <div className={styles.pin_cnt}><Image src={pin} alt='images'  /></div>
       </div>
      
 
       </div>
 
 
       <div className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
           <Image src={img02} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Aerline&nbsp;McOye
       <div className={styles.pin_cnt}><Image src={pin} alt='images'  /></div>
       </div>
       
 
       </div>
 
 
       <div className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
           <Image src={node21} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Brokyyn&nbsp;somons</div>
      
 
       </div>
 
 
       <div onClick={()=>{setIsmodel(!isModel)}} style={{cursor:'pointer'}} className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
        <div  className={styles.internsl_img}><Image src={plus} alt='img' /></div>
        <Image src={img04} alt='image'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Colonery&nbsp;Heanry</div>
      
 
       </div>
        
 
       {/* <div onClick={()=>{setIsmodel(!isModel)}} style={{cursor:'pointer'}} className={styles.img1_cnt}> 
       <div  className={styles.internsl_img}><Image src={plus} alt='img' /></div>
       <Image src={img04} alt='image'  /> */}
 
 
       
      
 
       {isModel ?
        <div className={styles.model_cnt}>
         <div className={`${isExpend ? styles.mail_cnt_model_2 : styles.mail_cnt_model}`} >
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
       <div className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
           <Image src={img01} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Gretchen&nbsp;Leaner</div>
      
 
       </div>
 
 
       <div className={styles.img_box}>
         
        {/* <div className={styles.img1_cnt}> */}
           <Image src={img02} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Aerline&nbsp;McOye</div>
      
 
       </div>
 
 
       <div className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
           <Image src={node21} alt='images'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Brokyyn&nbsp;somons</div>
      
 
       </div>
 
 
       <div onClick={()=>{setIsmodel(!isModel)}} style={{cursor:'pointer'}} className={styles.img_box}>
        {/* <div className={styles.img1_cnt}> */}
        <div  className={styles.internsl_img}><Image src={plus} alt='img' /></div>
        <Image src={img04} alt='image'  />
        {/* </div> */}
 
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Colonery</div>
      
 
       </div>
        
 
       {/* <div onClick={()=>{setIsmodel(!isModel)}} style={{cursor:'pointer'}} className={styles.img1_cnt}> 
       <div  className={styles.internsl_img}><Image src={plus} alt='img' /></div>
       <Image src={img04} alt='image'  /> */}
 
 
       
      
 
 
 
      </div>
 
      <div className={styles.home_lines}>
       <div className={styles.lines}></div>
      </div>
 
     <div className={styles.nav_footer}>
       <button className={styles.img_box}>
       <Image src={btn1} alt='image' />
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>My&nbsp;Activity</div>
       </button>
 
 
       <button onClick={()=>{setIsModel3(!isModel3)}} className={styles.img_box}>
       <Image src={btn3} alt='image' />
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>My&nbsp;Items</div>
       {isModel3 ?  <div className={styles.model_2_cnt2}>
       <Image src={popup2} alt='image' />
       </div> : " "}
       </button>
 
       <button className={styles.img_box}>
       <Image src={btn2} alt='image' />
       <div className={`${isExpend ? styles.text_box : styles.text_cnt_not_home }`}>Setting</div>
      
       </button>
 
       
       </div> 
 
 
 
 
 
 
     </div>
 
        
     </div>
      </div>
      

      <div className="flex flex-col" >
        <SearchBar />
        

        <div className="flex flex-row justify-evenly" >
        <div className="w-2/12 "  >
          <Setting_bar  handleComponent={handleComponent}  />
         
          
        </div>
         

          {/* Feed */}
          <div className='flex flex-col w-6/12 gap-4 items-center h-screen bg-[url("/img/FeedBackground.png")] my-1'>
            <div className="w-full">
              {/* <ModuleBar /> */}
            </div>
            <div className={styles.comp_bar}>
              {RenderCopmponent()}
            </div>
            <div className="w-full " >
              <PostCard2 />
            </div>
            <div>
              {" "}
              <Comments />
            </div>
          </div>

          {/* Team */}
          <div className="w-3/12 ">
          <Team />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
