'use client'
import React, { useState } from 'react'
import Styles from './Privecy.module.css'

function Privecy() {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(true);

  const toggleSlider = () => {
    setIsOn(!isOn);
  };

  const toggleSlider2 = () => {
    setIsOn2(!isOn2);
   
  };

  const toggleSlider3 = () => {
    setIsOn3(!isOn3);
   
  };

  return (
    <div className={Styles.privecy_cnt}>
      <div className={Styles.privecy_cnt_2}>
        <div className={Styles.upper_cnt}>
          Privacy Details
        </div>
        <div className={Styles.Lower_cnt}>
          <div className={Styles.insider_cnt}>
            Allow Direct Messages Without Request
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
            Make my profile visible in public search
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
            Allow members to mention any post or comment
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
            Who can see your contact
            <button className={Styles.btn_cnt_2}>
              <select className={Styles.select_cnt}>
                <option>Anuone</option>
                <option>No one</option>
                <option>Members</option>
              </select>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privecy;

