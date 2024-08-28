import React from 'react'
import style from './style.module.css';
import SearchBar from '../Components/searchPanel/SearchBar';

const page = () => {
  return (<div className={style.testingWrapper} >
  <div className={style.siderBar}>
  </div>
  <div className={style.searchPanel}>
    <SearchBar />
  </div>
  </div>
  )
}

export default page