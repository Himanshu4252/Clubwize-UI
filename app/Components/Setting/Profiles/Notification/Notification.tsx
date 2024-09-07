'use client'
import React, { useState } from 'react'
import styles from './Notification.module.css'
import Styles from '../Privecy/Privecy.module.css'

function Notification() {

  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(true);
  const [isOn4, setIsOn4] = useState(false);
  const [isOn5, setIsOn5] = useState(false);
  const [isOn6, setIsOn6] = useState(true);


  const toggleSlider = () => {
    setIsOn(!isOn);
  };

  const toggleSlider2 = () => {
    setIsOn2(!isOn2);
   
  };

  const toggleSlider3 = () => {
    setIsOn3(!isOn3);
   
  };

  const toggleSlider4 = () => {
    setIsOn4(!isOn4);
   
  };

  const toggleSlider5 = () => {
    setIsOn5(!isOn5);
   
  };

  
  const toggleSlider6 = () => {
    setIsOn6(!isOn6);
   
  };

  

  return (
    <div className={Styles.privecy_cnt}>
      <div className={Styles.privecy_cnt_2}>
        <div className={Styles.upper_cnt}>
          Notification you recive
        </div>
        <div className={Styles.Lower_cnt}>

          <div className={Styles.insider_cnt}>
            Invitation to fourm
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider1"
                  className={Styles.sliderCheckbox}
                  checked={isOn}
                  onChange={toggleSlider}
                />
                <label
                  htmlFor="slider1"
                  className={`${Styles.slider} ${isOn ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>
          <div className={Styles.Boder_cnt}>
            <div className={Styles.boder}></div>
          </div>

          <div className={Styles.insider_cnt}>
            Message Connect request
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider2"
                  className={Styles.sliderCheckbox}
                  checked={isOn2}
                  onChange={toggleSlider2}
                />
                <label
                  htmlFor="slider2"
                  className={`${Styles.slider} ${isOn2 ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>
          <div className={Styles.Boder_cnt}>
            <div className={Styles.boder}></div>
          </div>

          <div className={Styles.insider_cnt}>
            Invitation to a chapter
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider3"
                  className={Styles.sliderCheckbox}
                  checked={isOn3}
                  onChange={toggleSlider3}
                />
                <label
                  htmlFor="slider3"
                  className={`${Styles.slider} ${isOn3 ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>
          <div className={Styles.Boder_cnt}>
            <div className={Styles.boder}></div>
          </div>

          <div className={Styles.insider_cnt}>
            Mention
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider4"
                  className={Styles.sliderCheckbox}
                  checked={isOn4}
                  onChange={toggleSlider4}
                />
                <label
                  htmlFor="slider4"
                  className={`${Styles.slider} ${isOn4 ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>
          <div className={Styles.Boder_cnt}>
            <div className={Styles.boder}></div>
          </div>

          <div className={Styles.insider_cnt}>
            Relevent mark for my contribution
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider5"
                  className={Styles.sliderCheckbox}
                  checked={isOn5}
                  onChange={toggleSlider5}
                />
                <label
                  htmlFor="slider5"
                  className={`${Styles.slider} ${isOn5 ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>
          <div className={Styles.Boder_cnt}>
            <div className={Styles.boder}></div>
          </div>



          <div className={Styles.insider_cnt}>
          Relevent mark for my comment
            <button className={Styles.btn_cnt}>
              <div className={Styles.sliderContainer}>
                <input
                  type="checkbox"
                  id="slider6"
                  className={Styles.sliderCheckbox}
                  checked={isOn6}
                  onChange={toggleSlider6}
                />
                <label
                  htmlFor="slider6"
                  className={`${Styles.slider} ${isOn6 ? Styles.on : Styles.off}`}
                ></label>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Notification
