import React from 'react'
import Side_Bar from '../Sub_Componet/Side_Bar'
import styles from './page.module.css'
import Profile from '../Profile/Profile'

function page() {
  return (
    <>
    <div className={styles.home_cnt}>
      <Side_Bar />
      <Profile />
    
    </div>
    
    </>
    
  )
}

export default page
