"use client"
import React from 'react'
import style from './style.module.css'
import {prof1, prof2, prof3, prof4, prof5, prof6, prof7, prof8, prof9} from './../../photos';
import Image, {StaticImageData} from 'next/image';

interface User {
  id: number;
  image: StaticImageData;
}
const user:User[]=[
  {
    id: 1,
  image: prof1
},
  {
    id: 2,
  image: prof2
},
  {
    id: 3,
  image: prof3
},
  {
    id: 4,
  image: prof4
},
  {
    id: 5,
  image: prof5
},
  {
  id: 6,
  image: prof6
  },
  {
    id:7,
    image:prof7
  },
  {
    id:8,
    image:prof8
  },
  {
    id:9,
    image:prof9
  },
  {
    id: 10,
  image: prof1
},
  {
    id: 11,
  image: prof2
},
  {
    id: 12,
  image: prof3
},
  {
    id: 13,
  image: prof4
},
  {
    id: 14,
  image: prof5
},
  {
  id: 15,
  image: prof6
  },
  {
    id:16,
    image:prof7
  },
  {
    id:17,
    image:prof8
  },
  {
    id:18,
    image:prof9
  }
]
const OverView = () => {
  return (<div className={style.overViewContainer}>
    <p className={style.overviewDescription}>Our mission is simple but crucial: to protect and promote the well-being of trees and forests.
Together, we can make a positive impact on our environment and leave a legacy.Our mission is simple
but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive
impact on our environment and leave a legacy.</p>
    <hr className={style.overViewHR}/>
    <div className={style.overviewMembers}>
        <p className={style.membersText}>Members</p>
        <div className={style.connectionsDiv}>
        <div className={style.userConnection}>
        {user.map((user) => (
                <Image key={user.id} src={user.image} alt={`user-${user.id}`} className={style.memberPhotos} />
            ))}
            </div>
          <button className={style.seeAllButton} >See All</button>
          
        </div>
        <p className={style.date}>16 March 2023</p>
    </div>
  </div>
  )
}

export default OverView