import React from 'react'
import style from './style.module.css'
import { PeoplesIcon, LocationIcon, NodeProf1} from '../photo'
import { ClubIcon, Lock, NodeIcon} from '../../searchPanel/photos'
import Image, { StaticImageData } from 'next/image'

interface NodeProfileData {
    id: number;
    name: string;
    profileImage: StaticImageData;
    connections: string;
    location : string;
  }

interface ClubProfileData {
    id: number;
    name: string;
    profileImage: StaticImageData;
    connections: string;
    isPrivate: boolean;
  }

const Nodeprofiles: NodeProfileData[] = [
    {
      id: 1,
      name: 'World Design Summit',
      profileImage: NodeProf1,
      connections: '16.6k',
      location: 'Noida, India',
    },
    {
      id: 2,
      name: 'Tech Conference 2024',
      profileImage: NodeProf1,
      connections: '10.2k',
      location: 'Noida, India',
    },
  ];

  const Clubprofiles: ClubProfileData[] = [
    {
      id: 1,
      name: 'Montreal Canadiens',
      profileImage: NodeProf1,
      connections: '162',
      isPrivate: true,
    },
    {
      id: 2,
      name: 'Tech Innovators',
      profileImage: NodeProf1,
      connections: '10.5k',
      isPrivate: true,
    },
    {
        id: 3,
        name: 'Montreal Canadiens',
        profileImage: NodeProf1,
        connections: '162',
        isPrivate: true,
      },
      {
        id: 4,
        name: 'Tech Innovators',
        profileImage: NodeProf1,
        connections: '10.5k',
        isPrivate: true,
      }
  ];

const RightPanel = () => {
  return (<div className={style.RightPanelWrapper}>
    
      <button className={style.RightPanelButtonNode}> + Create Node
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.25 14C3.72917 14 3.28646 13.8224 2.92187 13.4674C2.55729 13.1123 2.375 12.6811 2.375 12.1739C2.375 11.6667 2.55729 11.2355 2.92187 10.8804C3.28646 10.5254 3.72917 10.3478 4.25 10.3478C4.39583 10.3478 4.53125 10.363 4.65625 10.3935C4.78125 10.4239 4.90104 10.4645 5.01562 10.5152L5.90625 9.43479C5.61458 9.12026 5.41146 8.76521 5.29688 8.36954C5.18229 7.97388 5.15625 7.57825 5.21875 7.18259L3.95312 6.77172C3.77604 7.02535 3.55208 7.22824 3.28125 7.38044C3.01042 7.5326 2.70833 7.6087 2.375 7.6087C1.85417 7.6087 1.41146 7.43113 1.04688 7.07608C0.682292 6.72099 0.5 6.28983 0.5 5.78262C0.5 5.27536 0.682292 4.84421 1.04688 4.48911C1.41146 4.13406 1.85417 3.95653 2.375 3.95653C2.89583 3.95653 3.33854 4.13406 3.70312 4.48911C4.06771 4.84421 4.25 5.27536 4.25 5.78262V5.90437L5.51562 6.3304C5.72396 5.96518 6.0026 5.65578 6.35156 5.40216C6.70052 5.14853 7.09375 4.98625 7.53125 4.91523V3.59127C7.125 3.47968 6.78906 3.26413 6.52344 2.94452C6.25781 2.625 6.125 2.2522 6.125 1.82609C6.125 1.31883 6.30729 0.887676 6.67187 0.532622C7.03646 0.177527 7.47917 0 8 0C8.52083 0 8.96354 0.177527 9.32812 0.532622C9.69271 0.887676 9.875 1.31883 9.875 1.82609C9.875 2.2522 9.73958 2.625 9.46875 2.94452C9.19792 3.26413 8.86458 3.47968 8.46875 3.59127V4.91523C8.90625 4.98625 9.29948 5.14853 9.64844 5.40216C9.99739 5.65578 10.276 5.96518 10.4844 6.3304L11.75 5.90437V5.78262C11.75 5.27536 11.9323 4.84421 12.2969 4.48911C12.6615 4.13406 13.1042 3.95653 13.625 3.95653C14.1458 3.95653 14.5885 4.13406 14.9531 4.48911C15.3177 4.84421 15.5 5.27536 15.5 5.78262C15.5 6.28983 15.3177 6.72099 14.9531 7.07608C14.5885 7.43113 14.1458 7.6087 13.625 7.6087C13.2917 7.6087 12.987 7.5326 12.7109 7.38044C12.4349 7.22824 12.2135 7.02535 12.0469 6.77172L10.7812 7.18259C10.8438 7.57825 10.8177 7.97134 10.7031 8.36192C10.5885 8.75255 10.3854 9.1101 10.0938 9.43479L10.9844 10.5C11.099 10.4493 11.2187 10.4112 11.3438 10.3859C11.4687 10.3605 11.6042 10.3478 11.75 10.3478C12.2708 10.3478 12.7135 10.5254 13.0781 10.8804C13.4427 11.2355 13.625 11.6667 13.625 12.1739C13.625 12.6811 13.4427 13.1123 13.0781 13.4674C12.7135 13.8224 12.2708 14 11.75 14C11.2292 14 10.7865 13.8224 10.4219 13.4674C10.0573 13.1123 9.875 12.6811 9.875 12.1739C9.875 11.971 9.90885 11.7757 9.97656 11.588C10.0443 11.4003 10.1354 11.2304 10.25 11.0783L9.35938 9.99782C8.93229 10.2312 8.47656 10.3478 7.99219 10.3478C7.50781 10.3478 7.05208 10.2312 6.625 9.99782L5.75 11.0783C5.86458 11.2304 5.95573 11.4003 6.02344 11.588C6.09115 11.7757 6.125 11.971 6.125 12.1739C6.125 12.6811 5.94271 13.1123 5.57812 13.4674C5.21354 13.8224 4.77083 14 4.25 14Z" fill="#ffff"/>
        </svg>
      </button>

      <button className={style.RightPanelButtonClub}>
        + Create Club
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.423 10.5483C10.8595 10.5483 11.2918 10.4745 11.6952 10.3313C12.0985 10.188 12.465 9.97802 12.7737 9.7133C13.0824 9.44858 13.3272 9.1343 13.4943 8.78843C13.6614 8.44255 13.7474 8.07184 13.7474 7.69747C13.7474 7.32309 13.6614 6.95239 13.4943 6.60651C13.3272 6.26063 13.0824 5.94636 12.7737 5.68164C12.465 5.41692 12.0985 5.20693 11.6952 5.06366C11.2918 4.92039 10.8595 4.84666 10.423 4.84666C9.84248 4.84654 9.27222 4.97765 8.76965 5.22676H8.67656C9.1387 4.99239 9.52166 4.65882 9.78771 4.2589C10.0538 3.85899 10.1937 3.40653 10.1938 2.94611C10.1938 2.59752 10.1137 2.25234 9.95818 1.93029C9.80262 1.60823 9.57462 1.3156 9.28718 1.06911C8.99974 0.822615 8.6585 0.627087 8.28294 0.493687C7.90739 0.360286 7.50487 0.291626 7.09837 0.291626C6.69187 0.291626 6.28935 0.360286 5.9138 0.493687C5.53824 0.627087 5.197 0.822615 4.90956 1.06911C4.62212 1.3156 4.39411 1.60823 4.23855 1.93029C4.08299 2.25234 4.00293 2.59752 4.00293 2.94611C4.00301 3.40653 4.14298 3.85899 4.40903 4.2589C4.67508 4.65882 5.05804 4.99239 5.52018 5.22676H5.42798C4.9404 4.98616 4.37703 4.84666 3.77421 4.84666C2.89253 4.84666 2.04696 5.14701 1.42352 5.68164C0.800075 6.21627 0.449829 6.94139 0.449829 7.69747C0.449829 8.45355 0.800075 9.17867 1.42352 9.7133C2.04696 10.2479 2.89253 10.5483 3.77421 10.5483C4.22798 10.5483 4.67693 10.4685 5.09323 10.3137C5.50953 10.1588 5.88432 9.93232 6.19436 9.64819C6.01218 11.2146 4.0867 12.4488 2.22283 12.4488H2.44446C2.26812 12.4488 2.09901 12.5089 1.97432 12.6158C1.84963 12.7227 1.77958 12.8678 1.77958 13.019C1.77958 13.1702 1.84963 13.3152 1.97432 13.4222C2.09901 13.5291 2.26812 13.5892 2.44446 13.5892H11.7527C11.9291 13.5892 12.0982 13.5291 12.2229 13.4222C12.3476 13.3152 12.4176 13.1702 12.4176 13.019C12.4176 12.8678 12.3476 12.7227 12.2229 12.6158C12.0982 12.5089 11.9291 12.4488 11.7527 12.4488H11.9744C10.1105 12.4488 8.185 11.2142 8.00327 9.6478C8.31312 9.93207 8.68779 10.1587 9.10404 10.3136C9.52029 10.4685 9.96922 10.5484 10.423 10.5483Z" fill="#ffff"/>
        </svg> 
      </button>

    <div className={style.suggested}>
        <div className={style.suggestion}>
            <Image src={NodeIcon} alt='nodeIcon' />
            Suggested nodes
        </div>
        {Nodeprofiles.map((profile) => (
        <div key={profile.id} className={style.Container}>
          <div className={style.Profile}>
            <Image src={profile.profileImage} alt={`${profile.name} Profile Image`} />
            <div className={style.about}>
              <p className={style.Name}>{profile.name}</p>
              <div className={style.Connections}>
                <Image src={PeoplesIcon} alt="Connections Icon" />
                <p className={style.Connection}>{profile.connections}</p>
              </div>
            </div>
          </div>
          <div className={style.LocationContainer}>
            <Image src={LocationIcon} alt="Location Icon" />
            <p className={style.Location}>{profile.location}</p>
          </div>
        </div>
      ))}
    </div>

    <div className={style.suggested}>
      <div className={style.suggestion}>
            <Image src={ClubIcon} alt='nodeIcon' />
            Suggested Clubs
        </div>
        {Clubprofiles.map((profile) => (
        <div key={profile.id} className={style.Container}>
          <div className={style.Profile}>
            <Image src={profile.profileImage} alt={`${profile.name} Profile Image`} />
            <div className={style.about}>
              <p className={style.Name}>{profile.name}</p>
              <div className={style.Connections}>
                <Image src={PeoplesIcon} alt="Connections" />
                <p className={style.Connection}>{profile.connections}</p>
              </div>
            </div>
          </div>
          <div className={style.PrivacyStatus}>
            <Image src={Lock} alt={profile.isPrivate ? 'Private' : 'Public'} />
            <p className={style.private}>
              {profile.isPrivate ? 'Private' : 'Public'}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RightPanel