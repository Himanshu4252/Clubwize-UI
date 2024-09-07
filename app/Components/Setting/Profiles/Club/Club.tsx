'use client'
import React, { useEffect, useState } from 'react'
import styles from './Club.module.css'
import locations from './Assets/Vector (6).png'
import node1 from './Assets/Rectangle 3070 (2).png'
import Image from 'next/image';
import serch from './Assets/Group 633742.png'
import img1 from './Assets/file_2024-09-05_09.14.28.png'

function Club() {






  const nodes = [
    { id: 1, name: 'Save tree', members: '265', status: 'Private', img: '/Image/Rectangle 3070 (1).svg' },
    { id: 2, name: 'Electric Garden', members: '596', status: 'Private', img: '/Image/Rectangle 3070 (2).svg' },
    { id: 3, name: 'The Circuit', members: '1.2k', status: 'Private', img: '/Image/Rectangle 3070 (3).svg' },
    { id: 4, name: 'The Heat', members: '965', status: 'Private', img: '/Image/Rectangle 3070 (4).svg' },
    { id: 5, name: 'The Underground', members: '203', status: 'Private', img: '/Image/Rectangle 3070 (5).svg' },
    { id: 6, name: 'The Boombox', members: '2.35k', status: 'Private', img: '/Image/Rectangle 3070 (6).svg' },
    { id: 7, name: 'Cyclone', members: '12', status: 'Private', img: '/Image/Rectangle 3070 (7).svg' },
    { id: 8, name: 'Supernova', members: '2.35k', status: 'Private', img: '/Image/Rectangle 3070 (8).svg' },
    { id: 9, name: 'Night Owl', members: '3.95k', status: 'Private', img: '/Image/Rectangle 3070 (9).svg' },
    { id: 10, name: 'Desire Den', members: '3.95k', status: 'Private', img: '/Image/Rectangle 3070 (10).svg' },
    { id: 11, name: 'Naughty Nook', members: '3.95k', status: 'Private', img: '/Image/Rectangle 3070 (11).svg' },
    { id: 12, name: 'Forbidden Fruit', members: '3.95k', status: 'Private', img: '/Image/Rectangle 3070 (12).svg' },
    { id: 13, name: 'Boogie Wonderland', members: '12', status: 'Private', img: '/Image/Rectangle 3070 (13).svg' },
    { id: 14, name: 'Electric Slide', members: '98', status: 'Private', img: '/Image/Rectangle 3070 (14).svg' },
    { id: 15, name: 'Crystal Cave', members: '2.35k', status: 'Private', img: '/Image/Rectangle 3070 (15).svg' },
    { id: 16, name: 'Quantum Leap', members: '965', status: 'Private', img: '/Image/Rectangle 3070 (16).svg' },
    { id: 17, name: 'Magnetic Mind', members: '2.35k', status: 'Private', img: '/Image/Rectangle 3070 (17).svg' },
    { id: 18, name: 'Groove Station', members: '20.26k', status: 'Private', img: '/Image/Rectangle 3070 (1).svg' },
  ];

  const node2 = [
    { id: 1, name: 'Save tree', members: '265', status: 'Private', img: '' },
    { id: 2, name: 'Electric Garden', members: '596', status: 'Private', img: '' },
    { id: 3, name: 'The Circuit', members: '1.2k', status: 'Private', img: '' },

  ]

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNodes, setFilteredNodes] = useState(nodes);

  useEffect(() => {
    const searchResult = nodes
      .filter(node => 
        node.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by name
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

    setFilteredNodes(searchResult); // Update the filtered state
  }, [searchQuery]);
  

  return (
    <div className={styles.node_cnt}>
    <div className={`${styles.container} no-scrollbar `}>
      <div className={styles.header}>
        <h2>All Club</h2>
        <button className={styles.createNodeButton}>+ Create node</button>
      </div>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder='&#128269; Serch for Club...' className={styles.searchInput}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.btn_1}><Image src={serch} alt='image' /></button>
      </div>
      
      <div className={styles.nodeGrid}>
        {filteredNodes.map(node => (
          <div key={node.id} className={styles.nodeCard}>
            <Image src={node.img} alt={node.name} className={styles.nodeImage} width={50} height={50} />
            <p>{node.name}</p>
            <p className={styles.members}>{node.members}</p>
            <p className={styles.location}> <Image src={locations} alt={node.name} />  {node.status}</p>
          </div>
        ))}
      </div>

      
    </div>

   

    
    </div>
  )
}

export default Club
