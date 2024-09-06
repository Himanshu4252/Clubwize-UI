import React, { useState } from 'react'
import styles from './Model_p.module.css'

interface ChildComponentProps {
    closeModal2: () => void;
  }
  
  
  
  const Model_p :React.FC<ChildComponentProps> = ({ closeModal2 }) => {


    // {image problem}

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');

    const [image2, setImage2] = useState<File | null>(null);
    const [preview2, setPreview2] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage2(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview2(objectUrl);
        }
    };

    const handleDeleteImage = () => {
        setImage(null);
        setPreview('');

        setImage2(null);
        setPreview2('');
    };

   




  
    
  
   

    

  
  
    const Reset = ()=>{
  
   
    }
  
    
    
    
  
    return (
      <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
       <div className={styles.model_upper_cnt}> 
        <h2>Basic Information</h2>
        <button className={styles.closeButton} onClick={()=>{closeModal2()}}>
          &times;
        </button></div>
        <div className={styles.model_lower_cnt}>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illo.</p>

          <div className={styles.pic_cnt}>

          <div className={styles.pic_cnt_1}>
                <div className={styles.img_show}>
                {preview ? (
                    <>
                        <img src={preview} alt="Image Preview" className={styles.image} />
                        
                    </>
                ) : (
                    <p></p>
                )}
                </div>
                
                <div className={styles.fileld_cnt}>
             
            <input 
                type="file" 
                id="imageUpload" 
                accept="image/*" 
                onChange={handleImageChange} 
                className={styles.input} 
            />
                </div>
                
               </div>
               <div className={styles.pic_cnt_1}>
                <div className={styles.img_show}>
                {preview ? (
                    <>
                        <img src={preview2} alt="Image Preview" className={styles.image} />
                       
                    </>
                ) : (
                    <p></p>
                )}
                </div>
                
                <div className={styles.fileld_cnt}>
             
            <input 
                type="file" 
                id="imageUpload" 
                accept="image/*" 
                onChange={handleImageChange2} 
                className={styles.input} 
            />
                </div>
                
               </div>

          </div>

          <div className={styles.full_name}></div>
          
  
          
           
  
          <div className={styles.btn_cnt}>
            <button className={styles.btn_1} onClick={handleDeleteImage} >Cancel</button>
            <button className={styles.btn_2} onClick={()=>{Reset()}}>Update</button>
          </div>
  
          <div>
  
          </div>
        </div>
  
               
      </div>
    </div>
    );
  };

export default Model_p
