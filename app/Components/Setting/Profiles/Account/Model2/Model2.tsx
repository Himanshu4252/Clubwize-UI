import React, { useState } from 'react'
import styles from './Model2.module.css'

interface ChildComponentProps {
    closeModal2: () => void;
  }
  
  
  
  const Model2 :React.FC<ChildComponentProps> = ({ closeModal2 }) => {
  
    const [password1, setPassword1] = useState('1'); // Initialize state
    const [password2, setPassword2] = useState('2'); 
  
    const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPassword1(event.target.value); // Update state with selected value
    };
    const [passwordstext,setpasswordstext] = useState(' ')


    const Reset = ()=>{

      if (password1 == password2) {
        closeModal2()
      }
      else{
        setpasswordstext('Enter password is not Mached')
      }
    }

    
    
    
  
    return (
      <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
       <div className={styles.model_upper_cnt}> 
        <h2>Language</h2>
        <button className={styles.closeButton} onClick={()=>{closeModal2()}}>
          &times;
        </button></div>
        <div className={styles.model_lower_cnt}>
          <h1>Update Your password</h1>
  
          <h2>Enter new password</h2>
  
          <div className={styles.option_cnt}>
           <input className={styles.selection}  placeholder='Enter new password' type='password' autoComplete='off' onChange={(e)=>{setPassword1(e.target.value)}}  />
           
          </div>
          

          <h2>Repeat new password</h2>
  
            <div className={styles.option_cnt}>
            <input className={styles.selection}
              placeholder='Repeat new password'
               type='password' autoComplete='off' 
               onChange={(e)=>{setPassword2(e.target.value)}}
               required
                />
            </div>
            <h3 style={{color:'red'}}>{passwordstext}</h3>
  
          <div className={styles.btn_cnt}>
            <button className={styles.btn_1} >Cancel</button>
            <button className={styles.btn_2} onClick={()=>{Reset()}}>Reseat</button>
          </div>
  
          <div>
  
          </div>
        </div>
  
               
      </div>
    </div>
    );
  };

export default Model2
