import React, { useState } from 'react'
import styles from './Peppole.module.css'
import img1 from './Assets/Rectangle 3070 (2).png'
import Image from 'next/image';

function Peppole() {

  const members = [
    { id:1, name: 'Cameron Williamson', role: 'UI UX Designer', node: 2, club: 42, contributions: '2.5k', status: '(You)',img : '/Image/Rectangle 3070 (18).svg' },
    { id:2, name: 'Bessie Cooper', role: 'President of Sales', node: 3, club: 2, contributions: '1.9k',img : '/Image/Rectangle 3070 (19).svg' },
    { id:3, name: 'Ronald Richards', role: 'Dog Trainer', node: 4, club: 25, contributions: '19.5k',img : '/Image/Rectangle 3070 (20).svg' },
    { id:4, name: 'Courtney Henry', role: 'Web Designer', node: 5, club: 12, contributions: '2.3k',img : '/Image/Rectangle 3070 (21).svg' },
    { id:5, name: 'Jacob Jones', role: 'Nursing Assistant', node: 7, club: 24, contributions: '1.2k',img : '/Image/Rectangle 3070 (22).svg' },
  ];

  const [activePopup, setActivePopup] = useState<number | null>(null);

  const handleDotsClick = (id: number) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };


  return (
    <div className={styles.tableContainer}>
    <table className={styles.memberTable}>
      <thead>
        <tr>
          <th>Member's name</th>
          <th>Node</th>
          <th>Club</th>
          <th>Contributions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td>
              <div className={styles.memberInfo}>
                {/* Image container */}
                <div className={styles.imageContainer}>
                  {/* Uncomment the below line and add the image path */}
                  <Image src={member.img} alt={member.name} className={styles.memberImage} width={50} height={50} />
                </div>
                <div className={styles.textInfo}>
                  <span className={styles.memberName}>
                    {member.name} {member.status}
                  </span>
                  <br />
                  <span className={styles.memberRole}>{member.role}</span>
                  
                </div>
              </div>
            </td>
            <td>{member.node}</td>
            <td>{member.club}</td>
            <td>{member.contributions}</td>
            <td className={styles.options}>
              {/* Options like unblock, copy link, etc. */}
              <div className={styles.moreOptions}  onClick={() => handleDotsClick(member.id)}>⋮</div>
              {activePopup === member.id && (
            <div className={styles.popupMenu}>
              <ul>
                <li onClick={handleClosePopup}>Unblock</li>
                <li onClick={handleClosePopup}>Copy link</li>
                <li onClick={handleClosePopup}>Report Node</li>
              </ul>
            </div>
          )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  )
}

export default Peppole
