"use client"
import React, { forwardRef } from 'react'
import { useRouter } from 'next/navigation';
import style from './style.module.css'
import Image, {StaticImageData} from 'next/image'
import { Contributions, Impressions, GraphCont, GraphImp, RVClub, RVNode, DebateIcon, RulesIcon, Mplace, ForwardIcon} from '../photo'
import PostCard from '../../NewsFeed/PostCard/PostCard'
import { routes } from '@/app/Routes/routes';


interface VisitedItem {
  id: number;
  icon: StaticImageData;
  visitedSection: string;
  visitClass: StaticImageData;
  visitedAccount: string;
  visitTime: string;
}
const visitedItems: VisitedItem[] = [
  {
    id: 1,
    icon: Mplace,
    visitedSection: 'Market Place in',
    visitClass: RVClub,
    visitedAccount: 'Vichithram',
    visitTime: '2 min ago',
  },
  {
    id: 2,
    icon: RulesIcon,
    visitedSection: 'Auction House in',
    visitClass: RVClub,
    visitedAccount: 'Artistic Haven',
    visitTime: '10 min ago',
  },
  {
    id: 3,
    icon: Mplace,
    visitedSection: 'Shop in',
    visitClass: RVNode,
    visitedAccount: 'Mystique Bazaar',
    visitTime: '5 hours ago',
  },
  {
    id: 4,
    icon: RulesIcon,
    visitedSection: 'Gallery in',
    visitClass: RVClub,
    visitedAccount: 'Avant-Garde',
    visitTime: '1 day ago',
  },
  {
    id: 5,
    icon: DebateIcon,
    visitedSection: 'Exhibition in',
    visitClass: RVClub,
    visitedAccount: 'Curio Chronicles',
    visitTime: '2 days ago',
  },
];
const LeftPanel = () => {

  const router = useRouter();
  
  const handleContribution = () => {
    router.push(routes.contributions)
  }

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
      
      <div className={`${style.Contributions} cursor-pointer`} onClick={handleContribution}>
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

    <div className={style.recentVisits}>
      <div className={style.recentvisitsText}>Recently Visited</div>
      {visitedItems.map((item) => (
        <div key={item.id} className={style.recentvisited}>
          <button className={style.RVcontent}>
            <div className={style.leftContent}>
              <Image src={item.icon} alt="Icon" />
              <p className={style.VisitedSection}>{item.visitedSection}</p>
              <Image src={item.visitClass} alt="Visited Class Icon" />
              <a className={style.visitedAccount}>{item.visitedAccount}</a>
              <p className={style.visitTime}> • {item.visitTime}</p>
            </div>
            <Image src={ForwardIcon} alt="forward button" />
          </button>
        </div>
      ))}

    </div>
    <div className={style.myContributions}>
      <div className={style.myContributionsText}>My Contributions (1.23K)</div>
      <div className={style.contributions}>
        <PostCard />
      </div>
      <div className={style.contributions}>
        <PostCard />
      </div>
    </div>

  </div>

  )
}

export default LeftPanel