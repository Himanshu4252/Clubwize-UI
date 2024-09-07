'use client'
import React, { useEffect, useState } from 'react'
import styles from './Nodes.module.css'
// Assuming you will create a CSS module for styling
import locations from './Assets/Vector (6).png'
import node1 from './Assets/Rectangle 3070 (2).png'
import Image from 'next/image';
import serch from './Assets/Group 633742.png'

const Nodes = () => {
  const nodes = [
    { id: 1, name: 'Vichitram', members: '15.23k', location: 'Bengaluru, India',img:'/Image/Rectangle 3070 (1).svg' },
    { id: 2, name: 'Techmuchmore', members: '956', location: 'Indore, India',img:'/Image/Rectangle 3070 (2).svg'},
    { id: 3, name: 'AI_Next_Gen', members: '203', location: 'Mumbai, India',img:'/Image/Rectangle 3070 (3).svg' },
    { id: 4, name: 'UI UX Design', members: '15', location: 'Surat, India',img:'/Image/Rectangle 3070 (4).svg' },
    { id: 5, name: 'Figma', members: '9.5k', location: 'Jaipur, India',img:'/Image/Rectangle 3070 (5).svg'},
    { id: 6, name: 'Time travellers', members: '20', location: 'Delhi, India',img:'/Image/Rectangle 3070 (6).svg'},
    { id: 7, name: 'Techmuchmore', members: '20.5k', location: 'Surat, India',img:'/Image/Rectangle 3070 (7).svg'},
  ];


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
    <div className={`${styles.container} no-scrollbar`}>
      <div className={styles.header}>
        <h2>All Nodes</h2>
        <button className={styles.createNodeButton}>+ Create node</button>
      </div>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder='&#128269; Serch for Node...' className={styles.searchInput} 
        onChange={(e) => setSearchQuery(e.target.value)}

        />
        <button className={styles.btn_1}><Image src={serch} alt='image' /></button>
      </div>
      
      <div className={styles.nodeGrid}>
        {filteredNodes.map(node => (
          <div key={node.id} className={styles.nodeCard}>
            <Image src={node.img} alt={node.name} className={styles.nodeImage} width={50} height={50} />
            <h3>{node.name}</h3>
            <p className={styles.members}>{node.members}</p>
            <p className={styles.location}> <Image src={locations} alt={node.name} />  {node.location}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Nodes;

