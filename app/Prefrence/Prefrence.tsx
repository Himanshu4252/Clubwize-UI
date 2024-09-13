import React, { useState } from 'react'
import Styles from './Prefrence.module.css'

function Prefrence() {

    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const [isOn3, setIsOn3] = useState(true);
    const [isOn4, setIsOn4] = useState(true);
  
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


  return (
    <div className={Styles.privecy_cnt}>
    <div className={Styles.privecy_cnt_2}>
      <div className={Styles.upper_cnt}>
        Privacy Setting
      </div>
      <div className={Styles.Lower_cnt}>
        <div className={Styles.insider_cnt}>
        Anyone can see  the foram
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
        Anyone can join the foram
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
        Anyone can Post on the foram
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

      </div>
    </div>

    <div className={Styles.privecy_cnt_2}>
      <div className={Styles.upper_cnt}>
      Content control
      </div>
      <div className={Styles.Lower_cnt}>
        <div className={Styles.insider_cnt}>
        Content needs approval before being visible to the group.
          <button className={Styles.btn_cnt}>
            <div className={Styles.sliderContainer}>
              <input
                type="checkbox"
                id="slider4"
                className={Styles.sliderCheckbox}
                checked={isOn}
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

     


      </div>
    </div>

    
  </div>
  )
}

export default Prefrence
