import React from 'react'
import style from './style.module.css'
import LeftPanel from './Panels/LeftPanel'
import RightPanel from './Panels/RightPanel'
const Dashboard = () => {
  return (<div className={style.DashboardWrapper}>

    <div className={style.leftPanel}>
      < LeftPanel />
    </div>

    <div className={style.rightPanel}>
      <RightPanel />
    </div>
  </div>
  )
}

export default Dashboard