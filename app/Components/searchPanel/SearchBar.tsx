"use client"
import React, { useState } from 'react'
import { Chat, Bell, UserIcon, SearchIcon, dropIcon} from './photos'
import Image from 'next/image'
import style from './style.module.css'

const SearchBar = () => {

  const [profileDropdown, setProfileDropdown] = useState(false);
  const[dropDownIcon, setDropDownIcon] = useState(false);
  const handleProfClick =() =>{
    setProfileDropdown(!profileDropdown);
    setDropDownIcon(! dropDownIcon);
  }
  return (
  <div className={style.searchWrapper}>
    <div className={style.searchBar}>
      <Image src={SearchIcon} alt='searchICon' className={style.magnifyingGlass} />
      <input name='searchBox' className={style.searchInput} placeholder='Search for node, club, peoples, tags etc...'/>
    </div>
    <div className={style.messageDiv}>
      <Image src={Chat} alt='chat icon' />
      <p>Message</p>
    </div>
    <div className={style.notificationDiv}>
      <Image src={Bell} alt='notifications' />
      <div className={style.notificationAlert}>2</div>
    </div>
    <div className={style.userDiv} onClick={handleProfClick}>
      <Image src={UserIcon} alt='userIcon' />
      <div className={style.profileDropdown}>
        <button className={style.dropDownBtn}>Esther Howard <Image src={dropIcon} alt='dropdown Icon' style={{ transform: dropDownIcon ? "scaleY(-1)" : "scaleY(1)"}} /></button>
            { profileDropdown? (<ul className={style.profileDropdownOptions}>
              <li><a href="">Menu Item 1</a></li>
              <li><a href="">Menu Item 2</a></li>
              <li><a href="">Menu Item 3</a></li>
            </ul>):(null)}
</div>
    </div>


  </div>
  )
}

export default SearchBar