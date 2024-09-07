import React, { useState } from 'react'
import styles from './Node.module.css'
import img1 from '../Club_Blocked/Assets/Rectangle 3070 (2).png'
import img2 from '../../../../../../public/Image/Rectangle 3070 (3).png'
import Image from 'next/image';

type Member = {
  id: number;
  name: string;
  role: string;
  location: string;
  contributions: string;
  image: string;
};

function Node() {

  const members: Member[] = [
    { id: 1, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (1).svg' },
    { id: 2, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (2).svg' },
    { id: 3, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (4).svg' },
    { id: 4, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (8).svg' },
    { id: 5, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (14).svg' },
    { id: 6, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Bengaluru', contributions: '2.4k', image: '/Image/Rectangle 3070 (17).svg' },
  ];

  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [data,setData] = useState(members)

  const handleDotsClick = (id: number) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleDelete = (id:number)=>{

    members.splice(id,1)
    setData(members)

  }



  


  return (
    <div className={styles.cardContainer}>
    {data.map((member) => (
      <div key={member.id} className={styles.card}>
        {/* Image container */}
        <div className={styles.imageContainer}>
          {/* Uncomment and add image path */}
          <Image src={member.image} alt={member.name} className={styles.memberImage} width={50} height={50} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.memberName}>{member.name}</h3>
          <p className={styles.memberRole}>{member.role}</p>
          <p className={styles.memberLocation}>
            {member.location} &bull; {member.contributions}
          </p>
        </div>
        <div className={styles.options}>
          <div
            className={styles.moreOptions}
            onClick={() => handleDotsClick(member.id)}
          >
            ⋮
          </div>
          {activePopup === member.id && (
            <div className={styles.popupMenu}>
              <ul>
                <li onClick={()=>{handleDelete(member.id - 1)}}>Unblock</li>
                <li onClick={handleClosePopup}>Copy link</li>
                <li onClick={handleClosePopup} style={{color:'red'}}>Report Node</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
  )
}


export default Node
