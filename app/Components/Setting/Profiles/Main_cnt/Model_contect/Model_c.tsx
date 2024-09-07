import React, { useState } from 'react'
import styles from './Model_c.module.css'


interface ChildComponentProps {




    closeModal5: () => void;
    handleUpdate2: (email: string, phone: string) => void;
  
  }



const Model_c : React.FC<ChildComponentProps> = ({ closeModal5,handleUpdate2 }) => {

  const [email, setemail] = useState<string>('raghu@gmail.com');
  const [phone, setphone] = useState<string>('6204226533');

    const update = ()=>{
    
      handleUpdate2(email, phone); // Pass the data to the parent component

    }

    const setSame = ()=>{
      setemail(' ')
      setphone(' ')
    }

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.model_upper_cnt}>
            <h2>Persnole info</h2>
            <button className={styles.closeButton} onClick={closeModal5} >
              &times;
              </button>
          </div>
          <div className={styles.model_lower_cnt}>
          
          <div className={styles.formGroup}>
          <label>email</label>
          <input type='email' value={email} onChange={(e) => setemail(e.target.value)} className={styles.input} />
           
        </div>

        {/* Date of Birth Input */}
        <div className={styles.formGroup}>
          <label>Birthdate</label>
          <input
            type="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
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

export default Model_c
