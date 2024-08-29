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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[28%] max-h-fit rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-2 mb-2 border-b border-gray-300">
          <h2 className="text-lg font-semibold flex-1">Create new team</h2>
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
            <div className="mb-2 text-lg text-black">Created Successfully 🥳</div>
            <div className="mb-4 text-sm text-gray-400">Creating a code of conduct for a social media group is essential to maintain a positive and respectful online environment.</div>
            <button
              className="bg-white border border-gray-300 px-4 py-2 rounded text-sm font-semibold"
              onClick={handleViewTeamClick}
            >
              View Team
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-around p-2 border-b border-gray-300" style={{ height: '60px' }}>
              <div className={`flex items-center ${step >= 1 ? 'text-green-500' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}>
                  {step >= 1 ? '✓' : '1'}
                </span>
                <span className="ml-2 text-sm font-semibold text-black">Members</span>
              </div>
              <div className="flex border-t border-gray-200" style={{ width: '18%', marginTop: '6px' }} />
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}>
                {step >= 2 ? '✓' : '2'}
              </span>
              <div className=" text-sm font-semibold text-black">Name</div>
              <div className="flex border-t border-gray-200" style={{ width: '18%', marginTop: '6px' }} />
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>
                {step >= 3 ? '✓' : '3'}
              </span>
              <div className=" text-sm font-semibold text-black">Picture</div>
            </div>

            {step === 1 && (
              <div className="flex-1 mb-4 overflow-y-auto">
                <div className="border-b border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="w-full p-2 bg-gray-100 text-sm border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-wrap">
                  {selectedMembers.map((member) => (
                    <span key={member.id} className="bg-gray-100 pl-1 pr-1 m-1 rounded flex items-center text-xs">
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
                      <Image src={member.avatar} alt={member.name} width={40} height={40} className="mr-2" />
                      <div className="text-sm font-semibold flex-1">
                        <div>{member.name}</div>
                        <div className="text-xs text-gray-500">{member.role}</div>
                      </div>
                      {selectedMembers.includes(member) && (
                        <Image src="/GrpChatImg/tick.png" alt="selected" width={16} height={16} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex-1 p-4">
                <div className="mb-2 text-sm font-semibold">Enter group name</div>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full p-2 bg-gray-100 text-sm border border-gray-300 rounded"
                />
              </div>
            )}

            {step === 3 && (
              <div className="flex-1 p-4">
                <div className="mb-2 text-sm font-semibold">Upload an image</div>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 bg-gray-100 text-sm border border-gray-300 rounded"
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
