import React, { useState } from 'react'
import Styles from './Blocked.module.css'
import Peppole from './Pepole_Blocked/Peppole'
import Club from './Club_Blocked/Club'
import Node from './Node_Blocked/Node'


function Blocked() {

  const [btn1,setBtn1] = useState(false)
  const [btn2,setBtn2] = useState(false)
  const [btn3,setBtn3] = useState(false)

  const [component,setComponent] = useState(1)
  
  const changeComp = (comp:number)=>{

      setComponent(comp)
    
  }

  const chnagoingComp = ()=>{

    switch (component) {
      case 1:
        return(<Peppole />)
        break;

      case 2:
          return(<Club />)
          break;

     case 3:
            return(<Node />)
            break;
    
      default:
        break;
    }


  }
 


  return (
    <div className={Styles.privecy_cnt}>
    <div className={Styles.privecy_cnt_2}>
      <div className={Styles.upper_cnt}>
        Blocked
      </div>
      <div className={`${Styles.Lower_cnt} no-scrollbar`}>
     <div className={Styles.button_cnt}>
      <button onClick={()=>{changeComp(1)}}  className={`${Styles.btn_1} ${component == 1 ? Styles.bg_color : ''}`}>Pepole</button>
      <button onClick={()=>{changeComp(2)}} className={`${Styles.btn_1} ${component == 2 ? Styles.bg_color : ''}`}>Club</button>
      <button onClick={()=>{changeComp(3)}} className={`${Styles.btn_1} ${component == 3 ? Styles.bg_color : ''}`}>Node</button>
     </div>
     <div className={Styles.components}>
           {chnagoingComp()}
     </div>
    

        
      </div>
    </div>
  </div>
  )
}

export default Blocked
