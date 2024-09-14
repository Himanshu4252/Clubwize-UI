import React from 'react';
import { StaticImageData } from 'next/image';
import avatar1 from '@/public/ProjectsImg/avatar1.png';
import avatar2 from '@/public/ProjectsImg/avatar2.png';
import avatar3 from '@/public/ProjectsImg/avatar3.png';
import avatar4 from '@/public/ProjectsImg/avatar4.png';
import avatar5 from '@/public/ProjectsImg/avatar5.png';
import avatar6 from '@/public/ProjectsImg/avatar6.png';
import avatar7 from '@/public/ProjectsImg/avatar7.png';
import avatar8 from '@/public/ProjectsImg/avatar8.png';
import avatar9 from '@/public/ProjectsImg/avatar9.png';

export interface IssueData {
  id: number;
  title: string;
  description: string;
  postedDate: string;
  postedBy: string;
  relevanceScore1: string;
  relevanceScore2: string;
  avatar: StaticImageData;
}

export const liveIssues: IssueData[] = [
  {
    id: 1,
    title: 'Code of Conduct',
    description: 'Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.',
    postedDate: 'Jan 13, 2022',
    postedBy: 'Marvin McKinney',
    relevanceScore1: '231',
    relevanceScore2: '12',
    avatar: avatar1,
  },
  {
    id: 2,
    title: 'Seeking Strategies for Success',
    description: 'Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor.',
    postedDate: 'November 7, 2017',
    postedBy: 'Arlene McCoy',
    relevanceScore1: '12',
    relevanceScore2: '13.3k',
    avatar: avatar2,
  },
  {
    id: 3,
    title: 'Personal Protective Equipment',
    description: 'Use appropriate PPE based on the level of contact with patients, such as gloves, gowns, masks, and eye protection.',
    postedDate: 'August 24, 2013',
    postedBy: 'Guy Hawkins',
    relevanceScore1: '59',
    relevanceScore2: '00',
    avatar: avatar3,
  },
  {
    id: 4,
    title: 'Isolation Precautions',
    description: 'Follow isolation precautions as indicated for patients with known or suspected infectious diseases.',
    postedDate: 'July 14, 2015',
    postedBy: 'Devon Lane',
    relevanceScore1: '95.3k',
    relevanceScore2: '23',
    avatar: avatar4,
  },
  {
    id: 5,
    title: 'Environmental Cleaning and Disinfection',
    description: 'Maintain a clean and sanitary environment by regularly cleaning and disinfecting high-touch surfaces, patient rooms, and medical equipment.',
    postedDate: 'May 6, 2012',
    postedBy: 'Savannah Nguyen',
    relevanceScore1: '23',
    relevanceScore2: '6',
    avatar: avatar5,
  },
  {
    id: 6,
    title: 'Code of Conduct',
    description: 'Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.',
    postedDate: 'August 7, 2017',
    postedBy: 'Cody Fisher',
    relevanceScore1: '6',
    relevanceScore2: '263',
    avatar: avatar6,
  },
  {
    id: 7,
    title: 'Personal Protective Equipment',
    description: 'Use appropriate PPE based on the level of contact with patients, such as gloves, gowns, masks, and eye protection.',
    postedDate: 'March 13, 2014',
    postedBy: 'Kristin Watson',
    relevanceScore1: '231',
    relevanceScore2: '136',
    avatar: avatar7,
  },
  {
    id: 8,
    title: 'Code of Conduct',
    description: 'Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.',
    postedDate: 'October 30, 2017',
    postedBy: 'Cameron Williamson',
    relevanceScore1: '965',
    relevanceScore2: '3',
    avatar: avatar8,
  },
  {
    id: 9,
    title: 'Personal Protective Equipment',
    description: 'Use appropriate PPE based on the level of contact with patients, such as gloves, gowns, masks, and eye protection.',
    postedDate: 'March 13, 2014',
    postedBy: 'Floyd Miles',
    relevanceScore1: '96.3k',
    relevanceScore2: '12',
    avatar: avatar9,
  },
];