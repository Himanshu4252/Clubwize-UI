import React from 'react'
import style from './style.module.css'
import Image, {StaticImageData} from 'next/image'
import { Contributions, Impressions, GraphCont, GraphImp } from '../photo'

const LeftPanel = () => {
  return (
  <div className={style.leftPanelWrapper} >

    <div className={style.insights}>
      <div className={style.impressions}>
        <div className={style.impressionCountBox}>
          <div className={style.impressionCounts}>
            <div className={style.impressioncount}>
              <p className={style.totalImpressions}>21.2K</p>
              <p className={style.increment}>+12.63%</p>
            </div>
            <Image src={Impressions} alt='impressions'/>
          </div>
          <p className={style.impressionText}>My Impressions</p>
        </div>
        <Image src={GraphImp} alt='impressions Graph' className={style.widthFixer} />
      </div>
      
      <div className={style.Contributions}>
        <div className={style.contriCountBox}>
          <div className={style.contriCounts}>
            <div className={style.contricount}>
              <p className={style.totalContributions}>21.2K</p>
              <p className={style.increment}>+12.63%</p>
            </div>
            <Image src={Contributions} alt='contributions'/>
          </div>
          <p className={style.contributionText}>My Contributions</p>
        </div>
        <Image src={GraphCont} alt='Contributions Graph' className={style.widthFixer} />
      </div>
    
    </div>

  </div>

  )
}

export default LeftPanel