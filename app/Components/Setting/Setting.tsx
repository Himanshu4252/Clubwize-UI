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
import  './Setting.module.css'
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
import Side_Bar from '../Sub_Componet/Side_Bar'



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
    <div className="flex gap-4" style={{ zIndex: '1000' }}>
    {/* Sidebar */}
    <div className="sticky top-0 z-50" >
     <Side_Bar />
     
    </div>
  
    {/* Main Content Area */}
    <div className="flex flex-col w-full">
      <SearchBar />
  
      <div className="flex flex-row justify-evenly">
        {/* Setting Sidebar */}
        <div className="w-2/12">
          <Setting_bar handleComponent={handleComponent} />
        </div>
  
        {/* Main Feed Area */}
        <div className="flex flex-col w-6/12 gap-4 items-center h-screen bg-[url('/img/FeedBackground.png')] my-1">
          <div className="w-full">
            {/* ModuleBar (optional) */}
          </div>
          <div className={styles.comp_bar}>
            {RenderCopmponent()}
          </div>
        </div>
  
        {/* Team Section */}
        <div className="w-3/12">
          <Team />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Setting
