import React, { useState } from 'react'
import styles from './Model_info.module.css'

interface ChildComponentProps {




    closeModal4: () => void;
    handleUpdate: (gender: string, dob: string) => void;
  
  }



const Model_info : React.FC<ChildComponentProps> = ({ closeModal4,handleUpdate }) => {

  const [gender, setGender] = useState<string>('Male');
  const [dob, setDob] = useState<string>('');

    const update = ()=>{
    
      handleUpdate(gender, dob); // Pass the data to the parent component

    }

    const setSame = ()=>{
      setGender('male')
      setDob(' ')
    }

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.model_upper_cnt}>
            <h2>Persnole info</h2>
            <button className={styles.closeButton} onClick={closeModal4} >
              &times;
              </button>
          </div>
          <div className={styles.model_lower_cnt}>
          
          <div className={styles.formGroup}>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={styles.input}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth Input */}
        <div className={styles.formGroup}>
          <label>Birthdate</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className={styles.input}
          />
        </div>


          <div className={styles.btn_cnt}>
              <button className={styles.btn_1} onClick={setSame} >Cancel</button>
              <button className={styles.btn_2} onClick={update}>Update</button>
            </div>
          </div>
      </div>
      </div>
    )
  }

export default Model_info
