"use client"
import React, { useState } from 'react'
import { Chat, Bell, UserIcon, SearchIcon, dropIcon, Cross, NodeIcon, PeopleIcon, ClubIcon, UserPhoto, Recent} from './photos'
import Image, { StaticImageData} from 'next/image'
import style from './style.module.css'
import NodeResult from './Result/NodeResultpage'
import ClubResult from './Result/ClubResultpage'
import Popup from '../Notifications/Popup'

const SearchBar = () => {
  //useStates for the search component

  const [profileDropdown, setProfileDropdown] = useState<boolean>(false);
  const[dropDownIcon, setDropDownIcon] = useState<boolean>(false);
  const[searchIcon, setSearchIcon] = useState<boolean>(true);
  const[crossIcon, setCrossIcon] = useState<boolean>(false);
  const[searchField, setSearchField] = useState<boolean>(false);
  const[activeSearch, setActiveSearch] = useState<boolean>(false);
  const[nodeResultDiv, setNodeResultDiv] = useState<boolean>(false);
  const[clubResultDiv, setClubResultDiv] = useState<boolean>(false);
  const [isPopupVisible, setPopupVisible] = useState(false);


  //type def
  interface UserProfile {
    photo: StaticImageData;
    name: string;
    alt: string;
  }
  interface SearchItem {
    id: number;
    term: string;
  }
  interface searchBtn {
    id: number;
    photo: StaticImageData;
    Btn: string;
    alt: string;
  }
  interface SearchSuggestion {
    id: number;
    text: string;
    imageSrc: StaticImageData; 
    alt: string;
  }
  
  const handleProfClick =() =>{
    setProfileDropdown(!profileDropdown);
    setDropDownIcon(! dropDownIcon);
  }

  const handleInputClick = () =>{
    setSearchIcon(false);
    setCrossIcon(true);
    setSearchField(true);
  }
  const handleNotifButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
const userProfiles: UserProfile[] = [
  { photo: UserPhoto, name: 'Kristin Watson', alt: 'Kristin Watson profile' },
  { photo: UserPhoto, name: 'Katherene Kinny', alt: 'Katherene Kinny profile' },
  { photo: UserPhoto, name: 'Cillian Murphy', alt: 'Cillian Murphy profile' },
];
const searchTerms: SearchItem[] = [
  { id: 1, term: 'Gillete' },
  { id: 2, term: 'Darell Stiward' },
  { id: 3, term: 'sony adward' },
];
const searchBtns: searchBtn[] =[
  {id:1, photo:NodeIcon, Btn:'Node', alt:'Node Icon'},
  {id:2, photo:ClubIcon, Btn:'Club', alt:'club Icon'},
  {id:3, photo:NodeIcon, Btn:'Tags', alt:'hash Icon'},
  {id:4, photo:NodeIcon, Btn:'Post', alt:'plus Icon'},
  {id:5, photo:PeopleIcon, Btn:'People', alt:'people Icon'}
]
const [selectedButton, setSelectedButton] = useState<searchBtn | null>(null);

const searchSuggestions: SearchSuggestion[] = [
  { id: 1, text: 'Search suggestion one', imageSrc: SearchIcon, alt: 'searchIcon' },
  { id: 2, text: 'Search suggestion two', imageSrc: SearchIcon, alt: 'searchIcon' },
  { id: 3, text: 'Search suggestion three', imageSrc: SearchIcon, alt: 'searchIcon' },
  { id: 4, text: 'Search suggestion four', imageSrc: SearchIcon, alt: 'searchIcon' },
  { id: 5, text: 'Search suggestion five', imageSrc: SearchIcon, alt: 'searchIcon' },
];
const handleButtonClick = (button: searchBtn) => {
  setSelectedButton(button);
};

const SearchHistClick =(id: number, term : string) =>{
  //User clicked history can be used here...
  console.log(term);
}
const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNodeResultDiv(false);
    setClubResultDiv(false);
    setInputValue(value);

    if (value.trim() === '') {
      console.log('Input is empty');
      setSearchField(true);
      setActiveSearch(false)

    } else {
      console.log('Input value:', value);
      setSearchField(false);
      setActiveSearch(true);
    }
  };

 const handleSuggestionClick = (suggestion: SearchSuggestion) =>{
    console.log(suggestion.text);
    setActiveSearch(false);
    console.log(selectedButton?.Btn);
    if (selectedButton?.Btn === 'Node') {
      setNodeResultDiv(true);
    }else if(selectedButton?.Btn==='Club'){
      setClubResultDiv(true);
    }
    else{console.log("no result found for this search");}
  }
  const clickedCross = ()=>{
    setSearchIcon(true);
    setCrossIcon(false);
    setSearchField(false);
    setActiveSearch(false);
    setSelectedButton(null);
    setNodeResultDiv(false);
    setClubResultDiv(false);
    setInputValue('');
  }
  return (
<>
<div className={style.searchWrapper}>
    <div className={style.searchBar} >
      {searchIcon? (<Image src={SearchIcon} alt='searchICon' className={style.magnifyingGlass} />):(null)}
      {selectedButton?(<button className={`${style.selectedButton} ${style.inputFieldButton}`}>
            <Image src={selectedButton.photo} alt={selectedButton.alt} />
            {selectedButton.Btn}
            <div onClick={()=>{setSelectedButton(null)}} className={style.cutButton}><Image src={Cross} alt='cross icon' /></div>
          </button>):''}
      <input name='searchBox' className={style.searchInput} placeholder='Search for node, club, peoples, tags etc...' value={inputValue} onClick={handleInputClick} onChange={handleInputChange} />
      {crossIcon? (<button className={style.crossButton} onClick={clickedCross}><Image src={Cross} alt='cross icon' className={style.crossIcon} /></button> ):(null)}
    </div>

    <div className="inline-flex w-3/12 gap-4"> 
    <div className={style.messageDiv }>
      <Image src={Chat} alt='chat icon' />
      <p>Message</p>
    </div>
    <div>
      <button
        className={style.notificationDiv}
        onClick={handleNotifButtonClick}
      >
        <Image src={Bell} alt="notifications" width={24} height={24} />
        <div className={style.notificationAlert}>
          2
        </div>
      </button>
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
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
  </div>
    {searchField ? (  <div className={style.searchField}>
            <div className={style.searchCategories}>
              <p className={style.suggestionText}>Looking For...</p>
              <div className={style.categories}>
              {searchBtns.map((button) => (
                <button key={button.id} className={`${style.searchFieldButtons} ${selectedButton?.id === button.id ? style.selected : ''}` } onClick={() =>handleButtonClick(button)}>
                  <Image src={button.photo} alt={button.alt} />
                  {button.Btn}
                </button>
              ))}
              </div>
            </div>
            <div className={style.historySection}>
                <div className={style.historyControls}>
                  <p className={style.historyText}>Recent Search</p>
                  <button className={style.clearBtn}>Clear all</button>
                </div>
                <div className={style.userContainer}>
                  {userProfiles.map((profile, index) => (
                    <div key={index} className={style.UserProfile}>
                      <Image src={profile.photo} className={style.userPhoto} alt={profile.alt} />
                      <p className={style.userName}>{profile.name}</p>
                    </div>
                  ))}
                </div>
            </div>
            
            <div className={style.recentSearches}>
      {searchTerms.map(({ id, term }) => (
        <div className={style.searchItem} key={id}>
          <div onClick={() =>SearchHistClick(id, term) }className={style.recentSearch}>
            <Image src={Recent} alt='recent search' />
            <p>{term}</p>
          </div>
          <button className={style.closeBtn}>
            <Image src={Cross} alt='cross icon' />
          </button>
        </div>
      ))}
    </div>
            </div>):(null)}
    {activeSearch?(<div className={style.activeSearch}>
      {searchSuggestions.map(suggestion => (
        <div key={suggestion.id} className={style.searchSuggestion} onClick={() => handleSuggestionClick(suggestion)}>
          <Image src={suggestion.imageSrc} alt={suggestion.alt} className={style.magnifyingGlass} />
          <p>{suggestion.text}</p>
        </div>
      ))}
    </div>)
    :(null)}
    {nodeResultDiv?(< NodeResult onChange={(newState:boolean) =>{setNodeResultDiv(newState)}} />):(null)}
    {clubResultDiv?(< ClubResult onChange={(newState:boolean) =>{setNodeResultDiv(newState)}} />):(null)}

  </>
  )
}

export default SearchBar