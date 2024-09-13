import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddContModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-white rounded-md shadow-lg  w-[50vh]">
                <div className="flex justify-between items-center mb-4 p-1 pl-3 border-b">
                    <h2 className="text-md font-semibold ">Add Contribution</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <p className="text-2xl pr-2">&times;</p>
                    </button>
                </div>
                <div className=" p-3">
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                        Volunteers <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Value"
                        className="w-full border border-gray-300 text-xs rounded-md p-2"
                    />
                </div>
                <div className=" p-3">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1 gap-1">
                        <div>
                    <span className="text-[#22B573] text-xs">128</span>  <span className="text-[0.5rem] align-baseline">/1000</span>
                    </div>
                    <div className="w-[26vh] bg-gray-200 rounded-full h-1">
                        <div className="bg-[#22B573] h-1 w-[10vh] rounded-full" ></div>
                    </div>
                    <div className="flex items-center space-x-1 p-1">
                    <span className="text-[#22B573] text-[0.5rem]">+11.01%</span>
                    <svg width="11" height="7" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.28825 2.10777L12.8334 0.5L11.4532 6.1061L9.73141 4.4532L6.95407 7.34627C6.85978 7.44448 6.72952 7.5 6.59337 7.5C6.45723 7.5 6.32697 7.44448 6.23268 7.34627L4.19337 5.22199L1.19407 8.34627C1.00283 8.54547 0.686314 8.55193 0.487109 8.36069C0.287903 8.16946 0.281444 7.85294 0.472681 7.65373L3.83268 4.15373C3.92697 4.05552 4.05723 4 4.19337 4C4.32952 4 4.45978 4.05552 4.55407 4.15373L6.59337 6.27801L9.01002 3.76067L7.28825 2.10777Z" fill="#22B573"/>
</svg>

      
    </div>
                        
                    </div>
                   
                </div>
                <div className="p-3">
                    <label className="block font-medium text-gray-700 mb-1 text-xs">
                        Files/Media <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
                    </label>
                    <div className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-50">
          <input type="file" name="files" id="files"className="hidden" />
          <label htmlFor="files" className="cursor-pointer text-xs">
            + drag or upload a file
          </label>
        </div>
                </div>
                <div className="flex justify-end p-2">
                    <button onClick={onClose} className=" text-xs border border-gray-400 text-black rounded-md px-4 py-1 mr-2">Cancel</button>
                    <button className="bg-[#22B573] text-xs text-white rounded-md px-4 py-1">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddContModal;
