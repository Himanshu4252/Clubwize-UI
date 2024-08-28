import React, { useState } from 'react'
import style from './style.module.css'
import Image, {StaticImageData} from 'next/image'
import { Cross, proImage, CoverPhoto, Colon, NodeOne, NodeTwo, NodeThree, NodeFour, Online, Lock } from '../photos'
interface childProps{
  onChange: (newState: boolean) => void;
  
}
interface UserProfiles {
  id: number;
  coverPicture: StaticImageData;
  profilePicture: StaticImageData;
  isOnline: boolean;
  userName: string;
  userProfession: string;
  userDescription: string;
  isPrivate:boolean,
  usersConnections:string,
  userActivityCount: string;
  userActivity: string;
}
const UserProfile:UserProfiles[] =[
  {
    id:1,
    coverPicture: CoverPhoto,
    profilePicture: proImage,
    isOnline: false,
    userName:'Vichithram ',
    userProfession:'UI UX Designer',
    userDescription: 'Our mission is simple but crucial: to protect and promote the well-being of trees and forests.',
    isPrivate: true,
    usersConnections:'2.4K',
    userActivityCount: '21.3K+',
    userActivity:' contributions',
  }
];
const userConnections = [
  {
    id: 1,
    image: NodeOne,
    nodeName: 'Node name',
    nodeDescription: 'Big Burger ltd.',
  },
  {
    id: 2,
    image: NodeTwo,
    nodeName: 'Node name',
    nodeDescription: 'Small Fries Inc.',
  },
  {
    id: 3,
    image: NodeThree,
    nodeName: 'Node name',
    nodeDescription: 'Soda Company',
  },
  {
    id: 4,
    image: NodeFour,
    nodeName: 'Node Name',
    nodeDescription:'hostpital'
  },
  {
    id: 5,
    image: NodeOne,
    nodeName: 'Node name',
    nodeDescription: 'Big Burger ltd.',
  },
  {
    id: 6,
    image: NodeTwo,
    nodeName: 'Node name',
    nodeDescription: 'Small Fries Inc.',
  },
  {
    id: 7,
    image: NodeThree,
    nodeName: 'Node name',
    nodeDescription: 'Soda Company',
  },
  {
    id: 8,
    image: NodeFour,
    nodeName: 'Node Name',
    nodeDescription:'hostpital'
  }
];

type ButtonType = 'Nodes' | 'Clubs' | 'Chapters';

const Result = ({onChange}:childProps) => {
  const userProfiles = UserProfile[0];
  const[ResultDiv, setResultDiv] = useState<boolean>(true);
  const [selectedButton, setSelectedButton] = useState<ButtonType>('Nodes');

  const handleButtonClick = (button: ButtonType) => {
    setSelectedButton(button);
  };
  const handleClick =() =>{
    onChange(false);
  };
  const getButtonClass = (button: ButtonType) => {
    return button === selectedButton ? `${style.navigatorBtn} ${style.selected}` : style.navigatorBtn;
  };
  
  return (

        <div className={style.resultWrapper}>
            <button className={style.closeBtn} onClick={handleClick}>Close<Image src={Cross} alt='cross icon' /></button>
            <div className={style.result}>
              <div className={style.coverPicture}>
                <Image src={userProfiles.coverPicture} alt='cover photo not found ' />
              </div>
              <div className={style.profilePhotoDiv}>
              <Image src={userProfiles.profilePicture} alt='profile photo not found' className={style.profileImage}/>
              {userProfiles.isOnline && <Image src={Online} className={style.userOnline} alt='online'/>}
              </div>
              <div className={style.messageDiv} >
                <button className={style.messageBtn}>Join Club</button>
                <Image src={Colon} alt='colon Icon' className={style.colonStyle} />
              </div>
              <div className={style.profDescription}>
                <p className={style.userName}>{userProfiles.userName}</p>
                <p className={style.userProfession}>{userProfiles.userProfession}</p>
                <p className={style.userDescription}>{userProfiles.userDescription}</p>
                <div className={style.privacy}>{userProfiles.isPrivate && <div className={style.usersConnections}><Image src={Lock} alt='private'/><p>Private </p></div>}
                <p className={style.usersConnections}>{userProfiles.usersConnections}</p>
                </div>
                <div className={style.userAct}><p className={style.userActivityCount}>{userProfiles.userActivityCount}</p><p className={style.userActivity}>{userProfiles.userActivity}</p></div>
              </div>
              <div className={style.userConNavigator}>
                  <button className={getButtonClass('Nodes')} onClick={() => handleButtonClick('Nodes')} > Nodes </button>
                  <button className={getButtonClass('Clubs')} onClick={() => handleButtonClick('Clubs')}> Clubs </button>
                  <button className={getButtonClass('Chapters')} onClick={() => handleButtonClick('Chapters')} >Chapters</button>
              </div>
              <hr className={style.navDivider}/>
              <div className={style.userConnections}>
                {userConnections.map((connection) => (
               <div key={connection.id} className={style.connectionCard}>
               <Image src={connection.image} alt='User image' />
                <p className={style.nodeName}>{connection.nodeName}</p>
                <p className={style.nodeDescription}>{connection.nodeDescription}</p>
               </div>
                ))}
              </div>
              </div>
            </div>
  )
}

export default Result