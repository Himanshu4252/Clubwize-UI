import React, { useState } from 'react';
import Image from 'next/image';
import ViewTeam from './ViewTeam';

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface CreateTeamProps {
  onClose: () => void;
}

const teamMembers: Member[] = [
  { id: 1, name: 'Cameron Williamson', role: 'UI UX Designer', avatar: '/GrpChatImg/avatar1.png' },
  { id: 2, name: 'Courtney Henry', role: 'Marketing Coordinator', avatar: '/GrpChatImg/avatar2.png' },
  { id: 3, name: 'Cody Fisher', role: 'Nursing Assistant', avatar: '/GrpChatImg/avatar3.png' },
  { id: 4, name: 'Cofgery Fox', role: 'President of Sales', avatar: '/GrpChatImg/avatar4.png' },
  { id: 5, name: 'Cermot Williamson', role: 'Web Designer', avatar: '/GrpChatImg/avatar5.png' },
];

const CreateTeam: React.FC<CreateTeamProps> = ({ onClose }) => {
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);
  const [step, setStep] = useState<number>(1);
  const [groupName, setGroupName] = useState<string>('');
  const [imageUploaded, setImageUploaded] = useState<string | null>(null);
  const [showViewTeam, setShowViewTeam] = useState<boolean>(false);

  const handleMemberClick = (member: Member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m.id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleNextClick = () => {
    if (step === 1) {
      if (selectedMembers.length === 0) return;
      setStep(2);
    } else if (step === 2) {
      if (!groupName.trim()) return;
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handlePreviewClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUploaded(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewTeamClick = () => {
    setShowViewTeam(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center lg:items-center sm:items-start sm:pt-[10vh] md:items-start md:pt-[10vh] z-50 ">
      <div className="bg-white w-[28%] lg:w-[28%] md:w-[40%] sm:w-[42%] max-h-fit rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-2 mb-2 lg:p-2 lg:mb-2 sm:p-1 sm:mb-1 border-b border-gray-300">
          <h2 className="text-lg lg:text-lg sm:text-sm font-semibold flex-1">Create new team</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl font-bold">&times;</button>
        </div>

        {showViewTeam ? (
          <ViewTeam 
            selectedMembers={selectedMembers} 
            groupName={groupName} 
            imageUploaded={imageUploaded} 
            onClose={onClose} 
          />
        ) : step === 4 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
            <Image src="/GrpChatImg/success.png" alt="Success" width={200} height={200} className="mb-4" />
            <div className="mb-2 text-lg lg:text-lg sm:text-sm text-black">Created Successfully 🥳</div>
            <div className="mb-4 text-sm lg:text-sm sm:text-xs text-gray-400">Creating a code of conduct for a social media group is essential to maintain a positive and respectful online environment.</div>
            <button
              className="bg-white border border-gray-300 px-4 py-2 rounded text-sm font-semibold"
              onClick={handleViewTeamClick}
            >
              View Team
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-around p-2 lg:p-2 sm:p-1 border-b border-gray-300 h-[60px] lg:h-[60px] sm:h-[40px]" >
              <div className={`flex items-center ${step >= 1 ? 'text-green-500' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}>
                  {step >= 1 ? '✓' : '1'}
                </span>
                <span className="ml-2 text-sm lg:text-sm sm:text-xs font-semibold text-black">Members</span>
              </div>
              <div className="flex border-t border-gray-200" style={{ width: '18%', marginTop: '6px' }} />
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}>
                {step >= 2 ? '✓' : '2'}
              </span>
              <div className=" text-sm lg:text-sm sm:text-xs font-semibold text-black">Name</div>
              <div className="flex border-t border-gray-200" style={{ width: '18%', marginTop: '6px' }} />
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>
                {step >= 3 ? '✓' : '3'}
              </span>
              <div className=" text-sm lg:text-sm sm:text-xs font-semibold text-black">Picture</div>
            </div>

            {step === 1 && (
              <div className="flex-1 mb-4 overflow-y-auto">
                <div className="border-b border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="w-full h-9 lg:h-9 sm:h-6 p-2 bg-gray-100 text-sm lg:text-sm sm:text-xs border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-wrap">
                  {selectedMembers.map((member) => (
                    <span key={member.id} className="bg-gray-100 pl-1 pr-1 m-1 rounded flex items-center text-xs lg:text-xs sm:text-[0.7rem]">
                      {member.name}
                      <button onClick={() => handleMemberClick(member)} className="ml-2 text-2xl font-bold text-gray-500">&times;</button>
                    </span>
                  ))}
                </div>

                <div className="overflow-y-auto">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => handleMemberClick(member)}
                      className={`flex items-center p-2 cursor-pointer border-b border-gray-200 ${selectedMembers.includes(member) ? 'bg-gray-100' : ''}`}
                    >
                      <Image src={member.avatar} alt={member.name} width={40} height={40} className="mr-2 lg:mr-2 sm:mr-2 w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                      <div className="text-sm lg:text-sm sm:text-xs font-semibold flex-1">
                        <div>{member.name}</div>
                        <div className="text-xs lg:text-xs sm:text-[0.7rem] text-gray-500">{member.role}</div>
                      </div>
                      {selectedMembers.includes(member) && (
                        <svg width="31" height="32"className='h-6 w-6 sm:h-4 w-4 lg:h-6 w-6' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="16" r="15.5" fill="#22B573"/>
                        <path d="M23.7657 10.0831C23.4533 9.76398 22.9468 9.76398 22.6343 10.0831L13.0498 19.8715L9.3657 16.109C9.0533 15.7899 8.5468 15.79 8.23433 16.109C7.92189 16.4281 7.92189 16.9453 8.23433 17.2644L12.4841 21.6045C12.7964 21.9236 13.3033 21.9234 13.6155 21.6045L23.7657 11.2385C24.0781 10.9194 24.0781 10.4021 23.7657 10.0831Z" fill="white"/>
                        </svg>
                        
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex-1 p-4">
                <div className="mb-2 text-sm lg:text-sm sm:text-xs font-semibold">Enter group name</div>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full p-2 bg-gray-100 text-sm lg:text-sm sm:text-xs border border-gray-300 rounded"
                />
              </div>
            )}

            {step === 3 && (
              <div className="flex-1 p-4">
                <div className="mb-2 text-sm lg:text-sm sm:text-xs font-semibold">Upload an image</div>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 bg-gray-100 text-sm lg:text-sm sm:text-xs border border-gray-300 rounded"
                  onChange={handleImageUpload}
                />
              </div>
            )}

            <div className="flex justify-between p-2 border-t border-gray-300">
              <button
                className={`text-gray-500 border border-gray-300 px-4 py-1 rounded text-xs ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={step === 1}
                onClick={handlePreviewClick}
              >
                Preview
              </button>
              <button
                className={`bg-green-500 text-white px-6 py-1 rounded text-xs ${step === 1 && selectedMembers.length === 0 ? 'opacity-50 cursor-not-allowed' : ''} ${step === 2 && !groupName.trim() ? 'opacity-50 cursor-not-allowed' : ''} ${step === 3 && !imageUploaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={(step === 1 && selectedMembers.length === 0) || (step === 2 && !groupName.trim()) || (step === 3 && !imageUploaded)}
                onClick={handleNextClick}
              >
                {step === 3 ? 'Create' : 'Next'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateTeam;
