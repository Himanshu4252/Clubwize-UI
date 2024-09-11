// projectData.tsx
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

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  traction: string;
  postedBy: string;
  relevanceScore1: string;
  relevanceScore2: string;
  avatar: StaticImageData;
}

export const ongoingProjects: ProjectData[] = [
    {
        id: 0,
        title: 'Blood Donation',
        description: '-',
        traction: '-',
        postedBy: '-',
        relevanceScore1: '-',
        relevanceScore2: '-',
        avatar: avatar1,
      },
    {
        id: 1,
        title: 'Grow Together: Cultivating Community Gardens',
        description: 'Start a campaign to establish community gardens in urban areas, promoting sustainable living, healthy eating, and community engagement. Volunteers can contribute by donating seeds, gardening tools, or their time to help maintain the gardens.',
        traction: '236 Adopted',
        postedBy: 'Marvin McKinney',
        relevanceScore1: '231',
        relevanceScore2: '12',
        avatar: avatar1,
      },
      {
        id: 2,
        title: 'Clean Earth, Green Future',
        description: 'Launch a project to clean up local parks, beaches, or rivers. Participants can organize cleanup events',
        traction: '23.45k Adopted',
        postedBy: 'Arlene McCoy',
        relevanceScore1: '12',
        relevanceScore2: '13.3k',
        avatar: avatar2,
      },
      {
        id: 3,
        title: 'Silver Tec, Bridging the Generation Gap',
        description: 'A project designed to connect different generations through technology and shared experiences.',
        traction: '6 Adopted',
        postedBy: 'Guy Hawkins',
        relevanceScore1: '59',
        relevanceScore2: '00',
        avatar: avatar3,
      },
      {
        id: 4,
        title: 'Warmth in Winter: Supporting the Homeless',
        description: 'Organize a campaign to collect warm clothing, blankets, and toiletries for homeless shelters in your community.',
        traction: '36 Adopted',
        postedBy: 'Devon Lane',
        relevanceScore1: '95.3k',
        relevanceScore2: '23',
        avatar: avatar4,
      },
      {
        id: 5,
        title: 'Education for All: Empowering Students',
        description: 'Start a project to collect school supplies such as notebooks, pencils, and backpacks for underprivileged students.',
        traction: '5.678k Adopted',
        postedBy: 'Savannah Nguyen',
        relevanceScore1: '23',
        relevanceScore2: '6',
        avatar: avatar5,
      },
      {
        id: 6,
        title: 'Paws for a Cause: Finding Fur-ever Homes',
        description: 'Host an adoption event at a local animal shelter to help homeless pets find loving families.',
        traction: '236 Adopted',
        postedBy: 'Cody Fisher',
        relevanceScore1: '6',
        relevanceScore2: '263',
        avatar: avatar6,
      },
      {
        id: 7,
        title: 'Empower Tomorrow: Mentoring the Next Generation',
        description: 'Create a mentoring program for at-risk youth in your community, pairing them with positive role models who can provide guidance and support.',
        traction: '236 Adopted',
        postedBy: 'Kristin Watson',
        relevanceScore1: '231',
        relevanceScore2: '136',
        avatar: avatar7,
      },
      {
        id: 8,
        title: 'Nourish and Nurture: Feeding Our Seniors',
        description: 'Launch a campaign to collect non-perishable food items for elderly individuals living alone or in assisted living facilities.',
        traction: '23 Adopted',
        postedBy: 'Cameron Williamson',
        relevanceScore1: '965',
        relevanceScore2: '3',
        avatar: avatar8,
      },
      {
        id: 9,
        title: 'Healing through Art: Supporting Our Veterans',
        description: 'Establish art therapy workshops for veterans dealing with post-traumatic stress disorder (PTSD) or other mental health challenges.',
        traction: '34 Adopted',
        postedBy: 'Floyd Miles',
        relevanceScore1: '96.3k',
        relevanceScore2: '12',
        avatar: avatar9,
      },
];

export const allProjects: ProjectData[] = [
  
  {
    id: 1,
    title: 'Grow Together: Cultivating Community Gardens',
    description: 'Start a campaign to establish community gardens in urban areas.',
    traction: '236 Adopted',
    postedBy: 'Marvin McKinney',
    relevanceScore1: '231',
    relevanceScore2: '12',
    avatar: avatar1,
    
  },
  {
    id: 2,
    title: 'Clean Earth, Green Future',
    description: 'Launch a project to clean up local parks, beaches, or rivers. Participants can organize cleanup events',
    traction: '23.45k Adopted',
    postedBy: 'Arlene McCoy',
    relevanceScore1: '12',
    relevanceScore2: '13.3k',
    avatar: avatar2,
  },
  {
    id: 3,
    title: 'Silver Tec, Bridging the Generation Gap',
    description: 'A project designed to connect different generations through technology and shared experiences.',
    traction: '6 Adopted',
    postedBy: 'Guy Hawkins',
    relevanceScore1: '59',
    relevanceScore2: '00',
    avatar: avatar3,
  },
  {
    id: 4,
    title: 'Warmth in Winter: Supporting the Homeless',
    description: 'Organize a campaign to collect warm clothing, blankets, and toiletries for homeless shelters in your community.',
    traction: '36 Adopted',
    postedBy: 'Devon Lane',
    relevanceScore1: '95.3k',
    relevanceScore2: '23',
    avatar: avatar4,
  },
  {
    id: 5,
    title: 'Education for All: Empowering Students',
    description: 'Start a project to collect school supplies such as notebooks, pencils, and backpacks for underprivileged students.',
    traction: '5.678k Adopted',
    postedBy: 'Savannah Nguyen',
    relevanceScore1: '23',
    relevanceScore2: '6',
    avatar: avatar5,
  },
  {
    id: 6,
    title: 'Paws for a Cause: Finding Fur-ever Homes',
    description: 'Host an adoption event at a local animal shelter to help homeless pets find loving families.',
    traction: '236 Adopted',
    postedBy: 'Cody Fisher',
    relevanceScore1: '6',
    relevanceScore2: '263',
    avatar: avatar6,
  },
  {
    id: 7,
    title: 'Empower Tomorrow: Mentoring the Next Generation',
    description: 'Create a mentoring program for at-risk youth in your community, pairing them with positive role models who can provide guidance and support.',
    traction: '236 Adopted',
    postedBy: 'Kristin Watson',
    relevanceScore1: '231',
    relevanceScore2: '136',
    avatar: avatar7,
  },
  
  
];

export const globalProjects: ProjectData[] = [
  {
    id: 1,
    title: 'Grow Together: Cultivating Community Gardens',
    description: 'Start a campaign to establish community gardens in urban areas.',
    traction: '236 Adopted',
    postedBy: 'Marvin McKinney',
    relevanceScore1: '231',
    relevanceScore2: '12',
    avatar: avatar1,
  },
  {
    id: 2,
    title: 'Clean Earth, Green Future',
    description: 'Launch a project to clean up local parks, beaches, or rivers. Participants can organize cleanup events',
    traction: '23.45k Adopted',
    postedBy: 'Arlene McCoy',
    relevanceScore1: '12',
    relevanceScore2: '13.3k',
    avatar: avatar2,
  },
  {
    id: 3,
    title: 'Silver Tec, Bridging the Generation Gap',
    description: 'A project designed to connect different generations through technology and shared experiences.',
    traction: '6 Adopted',
    postedBy: 'Guy Hawkins',
    relevanceScore1: '59',
    relevanceScore2: '00',
    avatar: avatar3,
  },
  {
    id: 4,
    title: 'Warmth in Winter: Supporting the Homeless',
    description: 'Organize a campaign to collect warm clothing, blankets, and toiletries for homeless shelters in your community.',
    traction: '36 Adopted',
    postedBy: 'Devon Lane',
    relevanceScore1: '95.3k',
    relevanceScore2: '23',
    avatar: avatar4,
  },
  {
    id: 5,
    title: 'Education for All: Empowering Students',
    description: 'Start a project to collect school supplies such as notebooks, pencils, and backpacks for underprivileged students.',
    traction: '5.678k Adopted',
    postedBy: 'Savannah Nguyen',
    relevanceScore1: '23',
    relevanceScore2: '6',
    avatar: avatar5,
  },
  {
    id: 6,
    title: 'Paws for a Cause: Finding Fur-ever Homes',
    description: 'Host an adoption event at a local animal shelter to help homeless pets find loving families.',
    traction: '236 Adopted',
    postedBy: 'Cody Fisher',
    relevanceScore1: '6',
    relevanceScore2: '263',
    avatar: avatar6,
  },
 
];
export const myProjects: ProjectData[] = [
    {
      id: 1,
      title: 'Grow Together: Cultivating Community Gardens',
      description: 'Start a campaign to establish community gardens in urban areas.',
      traction: '236 Adopted',
      postedBy: 'Marvin McKinney',
      relevanceScore1: '231',
      relevanceScore2: '12',
      avatar: avatar1,
    },
    {
        id: 2,
        title: 'Clean Earth, Green Future',
        description: 'Launch a project to clean up local parks, beaches, or rivers. Participants can organize cleanup events',
        traction: '23.45k Adopted',
        postedBy: 'Arlene McCoy',
        relevanceScore1: '12',
        relevanceScore2: '13.3k',
        avatar: avatar2,
      },
      {
        id: 3,
        title: 'Silver Tec, Bridging the Generation Gap',
        description: 'A project designed to connect different generations through technology and shared experiences.',
        traction: '6 Adopted',
        postedBy: 'Guy Hawkins',
        relevanceScore1: '59',
        relevanceScore2: '00',
        avatar: avatar3,
      },
      {
        id: 4,
        title: 'Warmth in Winter: Supporting the Homeless',
        description: 'Organize a campaign to collect warm clothing, blankets, and toiletries for homeless shelters in your community.',
        traction: '36 Adopted',
        postedBy: 'Devon Lane',
        relevanceScore1: '95.3k',
        relevanceScore2: '23',
        avatar: avatar4,
      },
      {
        id: 5,
        title: 'Education for All: Empowering Students',
        description: 'Start a project to collect school supplies such as notebooks, pencils, and backpacks for underprivileged students.',
        traction: '5.678k Adopted',
        postedBy: 'Savannah Nguyen',
        relevanceScore1: '23',
        relevanceScore2: '6',
        avatar: avatar5,
      },
      
  ];
