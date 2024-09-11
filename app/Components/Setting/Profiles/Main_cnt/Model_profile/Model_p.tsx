import React, { useState } from 'react'
import styles from './Model_p.module.css'
import pimg from '../Assets/Group 633852.svg'
import Image from 'next/image';

interface ChildComponentProps {




    closeModal2: () => void;
    setDat: (img1:string,img2:string,Firstname:string,lastname:string,designation:string) => void;
  }
  
  
  
  const Model_p: React.FC<ChildComponentProps> = ({ closeModal2, setDat }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [img1,setimg] = useState(pimg)

  const [image2, setImage2] = useState<File | null>(null);
  const [preview2, setPreview2] = useState<string>('');

  const [firstName, setFirstname] = useState('Leslia');
  const [lastName, setLastname] = useState('Alexender');
  const [designation, setDesignation] = useState('Lead Market Architect');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl); // Update the correct preview
    }
  };

  const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage2(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview2(objectUrl); // Correctly update the second preview
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
    setPreview('');

    setImage2(null);
    setPreview2('');
  };

  const update = () => {
    // Send both image previews to parent
    setDat(preview, preview2, firstName, lastName, designation);
    closeModal2(); // Close modal after updating
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.model_upper_cnt}>
          <h2>Basic Information</h2>
          <button className={styles.closeButton} onClick={closeModal2}>
            &times;
          </button>
        </div>
        <div className={styles.model_lower_cnt}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illo.</p>

          <div className={styles.pic_cnt}>
            {/* First Image */}
            <div className={styles.pic_cnt_1}>
              <div className={styles.img_show}>
                {preview ? <img src={preview} alt="Image Preview" className={styles.image} /> : <Image src={img1} alt="Image Preview" className={styles.image} width={80} height={80} />}
              </div>
              <div className={styles.fileld_cnt}>
                <input type="file" accept="image/*" onChange={handleImageChange} className={styles.input} />
              </div>
            </div>

            {/* Second Image */}
            <div className={styles.pic_cnt_1}>
              <div className={styles.img_show}>
                {preview2 ? <img src={preview2} alt="Image Preview" className={styles.image} /> : <Image src={img1} alt="Image Preview" className={styles.image} width={80} height={80} />}
              </div>
              <div className={styles.fileld_cnt}>
                <input type="file" accept="image/*" onChange={handleImageChange2} className={styles.input} />
              </div>
            </div>
          </div>

          {/* Input fields */}
          <div className={styles.full_name}>
            <div className={styles.input_1}>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className={styles.input_1}>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastname(e.target.value)} />
            </div>
          </div>

          <div className={styles.full_name_}>
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>

          <div className={styles.btn_cnt}>
            <button className={styles.btn_1} onClick={handleDeleteImage}>Cancel</button>
            <button className={styles.btn_2} onClick={update}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Model_p
