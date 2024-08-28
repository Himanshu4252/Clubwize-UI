import React from 'react';
import Image from 'next/image';

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface ViewTeamProps {
  selectedMembers: Member[];
  groupName: string;
  imageUploaded: string | null;
  onClose: () => void;
}

const allMembers: Member[] = [
  { id: 1, name: 'Cameron Williamson', role: 'UI UX Designer', avatar: '/GrpChatImg/avatar1.png' },
  { id: 2, name: 'Courtney Henry', role: 'Marketing Coordinator', avatar: '/GrpChatImg/avatar2.png' },
  { id: 3, name: 'Cody Fisher', role: 'Nursing Assistant', avatar: '/GrpChatImg/avatar3.png' },
  { id: 4, name: 'Cofgery Fox', role: 'President of Sales', avatar: '/GrpChatImg/avatar4.png' },
  { id: 5, name: 'Cermot Williamson', role: 'Web Designer', avatar: '/GrpChatImg/avatar5.png' },
];

const ViewTeam: React.FC<ViewTeamProps> = ({ selectedMembers, groupName, imageUploaded, onClose }) => {
  const [step, setStep] = React.useState<number>(1);

  const handleNextClick = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRemoveMember = (member: Member) => {
    console.log(`Remove ${member.name}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[28%] max-h-fit rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-2 mb-2 border-b border-gray-300">
          <h2 className="text-lg font-semibold flex-1">View Team</h2>
          <button
            onClick={onClose}
            className="text-gray-600 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

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
                disabled
              />
            </div>

            <div className="flex flex-wrap">
              {selectedMembers.map((member) => (
                <span key={member.id} className="bg-gray-100 pl-1 pr-1 m-1 rounded flex items-center text-xs">
                  <span className="text-gray-500">{member.name}</span>
                  <button
                    onClick={() => handleRemoveMember(member)}
                    className="ml-2 text-2xl font-bold text-gray-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <div className="overflow-y-auto">
              {allMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center p-2 cursor-pointer border-b border-gray-200 ${selectedMembers.some(m => m.id === member.id) ? 'bg-gray-100' : ''}`}
                >
                  <Image src={member.avatar} alt={member.name} width={40} height={40} className={`mr-2 ${selectedMembers.some(m => m.id === member.id) ? 'opacity-20' : ''}`} />
                  <div className="text-sm font-semibold flex-1">
                    <div className={`${selectedMembers.some(m => m.id === member.id) ? 'text-gray-500' : ''}`}>{member.name}</div>
                    <div className={`text-xs ${selectedMembers.some(m => m.id === member.id) ? 'text-gray-500' : ''}`}>{member.role}</div>
                  </div>
                  {selectedMembers.some(m => m.id === member.id) && (
                    <button>
                      <Image src="/GrpChatImg/tick.png" alt="selected" width={16} height={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-1 p-4">
            <div className="mb-2 text-sm font-semibold">Group Name</div>
            <input
              type="text"
              value={groupName}
              className="w-full p-2 bg-gray-100 text-sm border border-gray-300 rounded"
              disabled
            />
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 p-4">
            <div className="mb-2 text-sm font-semibold">Uploaded Image</div>
            <div className="flex items-center justify-center">
              {imageUploaded ? (
                <Image src={imageUploaded} alt="Uploaded" width={200} height={200} />
              ) : (
                <p>No image uploaded</p>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-between p-2 border-t border-gray-300">
          <button
            className="text-gray-500 border border-gray-300 px-4 py-1 rounded text-xs"
            disabled={step === 1}
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          <button
            className="bg-green-500 text-white px-6 py-1 rounded text-xs"
            onClick={handleNextClick}
          >
            {step === 3 ? 'Create' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
