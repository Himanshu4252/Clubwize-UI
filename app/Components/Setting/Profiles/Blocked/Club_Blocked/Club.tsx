import React, { useState } from 'react'
import styles from './Club.module.css'
import img1 from './Assets/file_2024-09-06_06.12.22.png'
import Image from 'next/image';

type Member = {
  id: number;
  name: string;
  role: string;
  location: string;
  contributions: string;
  image: string;
};

function Club() {

  const members: Member[] = [
    { id: 1, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (17).svg' },
    { id: 2, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (4).svg' },
    { id: 3, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (8).svg' },
    { id: 4, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (1).svg' },
    { id: 5, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (14).svg' },
    { id: 6, name: 'Binford Ltd.', role: 'Nursing Assistant', location: 'Private', contributions: '', image: '/Image/Rectangle 3070 (15).svg' },
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
          <Image src={member.image} alt={member.name} className={styles.memberImage} height={50} width={50} />
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
                <li onClick={()=>{handleDelete(member.id-1)}}>Unblock</li>
                <li onClick={handleClosePopup}>Copy link</li>
                <li onClick={handleClosePopup} style={{color:'red'}}>Report club</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
  )
}


export default Club
