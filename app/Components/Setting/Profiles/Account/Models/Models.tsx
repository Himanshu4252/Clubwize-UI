'use client'
import React, { useState } from 'react'
import styles from './Models.module.css'

interface ChildComponentProps {
  closeModal: (leng:string) => void;
}



const Models :React.FC<ChildComponentProps> = ({ closeModal }) => {

  const [selectedLanguage, setSelectedLanguage] = useState('English (India)'); // Initialize state

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value); // Update state with selected value
  };
  

  return (
    <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
     <div className={styles.model_upper_cnt}> 
      <h2>Language</h2>
      <button className={styles.closeButton} onClick={()=>{closeModal("English (Indian)")}}>
        &times;
      </button></div>
      <div className={styles.model_lower_cnt}>
        <h1>Select a language wich you want to see in Clubwize</h1>

        <h2>Select a language</h2>

        <div className={styles.option_cnt}>
        <select className={styles.selection} value={selectedLanguage} onChange={handleChange}>
      <option value="English (India)">English (India)</option>
     <option value="English (American)">English (American)</option>
      <option value="Spanish">Spanish</option>
      <option value="French">French</option>
      <option value="German">German</option>
      <option value="Mandarin">Mandarin</option>
      <option value="Hindi">Hindi</option>
      <option value="Bengali">Bengali</option>
      <option value="Marathi">Marathi</option>
      <option value="Tamil">Tamil</option>
      <option value="Telugu">Telugu</option>
      <option value="Japanese">Japanese</option>
      <option value="Russian">Russian</option>
      <option value="Portuguese">Portuguese</option>
      <option value="Italian">Italian</option>
      <option value="Arabic">Arabic</option>
      <option value="Korean">Korean</option>
      <option value="Swahili">Swahili</option>
      <option value="Turkish">Turkish</option>
      <option value="Thai">Thai</option>
      <option value="Dutch">Dutch</option>
    </select>
        </div>

        <div className={styles.btn_cnt}>
          <button className={styles.btn_1} onClick={()=>{setSelectedLanguage('English (Indian)')}}>Cancel</button>
          <button className={styles.btn_2} onClick={()=>{closeModal(selectedLanguage)}}>Update</button>
        </div>

        <div>

        </div>
      </div>

             
    </div>
  </div>
  );
};

export default Models
