import React, { useState } from 'react'
import styles from './Model_I.module.css'

interface ChildComponentProps {




    closeModal3: () => void;
    UpdateSkilles: (skills: string[]) => void;
  
  }

 
  

  

const Model_I : React.FC<ChildComponentProps> = ({ closeModal3,UpdateSkilles }) => {

    const [interests, setInterests] = useState<string[]>(['UI Designer','UX Designer','Design System','Problem Solving','Ui Kit','HTML','Web Devlopment','Design Thinking','CSS3','Content Writing']);
      const [inputValue, setInputValue] = useState<string>('');
    
      // Function to add new interest
      const addInterest = () => {
        if (inputValue.trim() && !interests.includes(inputValue.trim())) {
          setInterests([...interests, inputValue.trim()]);
          setInputValue(''); // Clear input after adding
        }
      };
    
      // Function to remove an interest
      const removeInterest = (interest: string) => {
        setInterests(interests.filter(item => item !== interest));
      };

      const update = ()=>{

        UpdateSkilles(interests)
      }
      
    


  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.model_upper_cnt}>
          <h2>Intrest</h2>
          <button className={styles.closeButton} onClick={closeModal3} >
            &times;
          </button>
        </div>
        <div className={styles.model_lower_cnt}>
        
        <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Interests..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={addInterest} className={styles.addButton}>
          Add
        </button>
      </div>

      {/* Interest List */}
      <div className={styles.interestContainer}>
        {interests.map((interest, index) => (
          <div key={index} className={styles.interestItem}>
            {interest}
            <button
              className={styles.removeButton}
              onClick={() => removeInterest(interest)}
            >
              ×
            </button>
          </div>
        ))}
      </div>


        <div className={styles.btn_cnt}>
            <button className={styles.btn_1} onClick={closeModal3} >Cancel</button>
            <button className={styles.btn_2} onClick={update}>Update</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Model_I
