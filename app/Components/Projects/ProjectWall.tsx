import React,{useState} from 'react';
import Image,{StaticImageData} from 'next/image';
import Prince1 from '@/public/ProjectsImg/prince1.png'
import Prince2 from '@/public/ProjectsImg/prince2.png'
import Prince3 from '@/public/ProjectsImg/prince3.png'
import PostCard from '../NewsFeed/PostCard/PostCard';
import AnnModal from './annModal';

const ProjectAnnouncement = ({ profileImg, name, contribution, date }: { profileImg: StaticImageData, name: string, contribution: string, date: string }) => (
    <div className="flex items-center p-4 border-b">
       <Image
  src={profileImg}
  alt={`Profile picture of ${name}`}
  width={32}
  height={32}
  className=" mr-4"
/>
    <div>
            <p className="text-sm font-semibold">{name} <span className="text-xs text-gray-500 font-medium">{contribution}</span></p>
            <p className="text-[0.7rem] text-gray-500">{date}</p>
        </div>
    </div>
);

const ProjectsWall: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const announcements = [
        {
            profileImg: Prince1,
            name: "Prince",
            contribution: "from Vichithram Contributed 362 Books",
            date: "21 Mar 2024 • 6:30 PM"
        },
        {
            profileImg:Prince2,
            name: "Prince",
            contribution: "from Vichithram Contributed 362 Books",
            date: "21 Mar 2024 • 6:30 PM"
        },
        {
            profileImg: Prince3,
            name: "Prince",
            contribution: "from Vichithram Contributed 362 Books",
            date: "21 Mar 2024 • 6:30 PM"
        }
    ];

    return (
        <div>
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-md mb-4">
            <div className="flex justify-between items-center p-4 mb-4 border-b">
                <div>
                    <h1 className="text-xl font-semibold">Project Wall</h1>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <button  onClick={() => setIsModalOpen(true)} className="bg-[#22B573] text-white text-xs px-4 py-2 rounded-md">+ New Announcement</button>
            </div>
            <div className='p-4'>
            <div className=" bg-gray-50 rounded-md ">
                {announcements.map((announcement, index) => (
                    <ProjectAnnouncement
                        key={index}
                        profileImg={announcement.profileImg}
                        name={announcement.name}
                        contribution={announcement.contribution}
                        date={announcement.date}
                    />
                ))}
                
            </div>
            </div>
            </div>
                <PostCard/>
                <AnnModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectsWall;
