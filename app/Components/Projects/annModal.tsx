import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AnnModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-white rounded-lg shadow-lg w-[45vh]">
                <div className="flex justify-between items-center mb-4 p-1 pl-3 border-b">
                    <h2 className="text-md font-semibold">New Announcement</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <p className="text-2xl pr-2">&times;</p>
                    </button>
                </div>
                <div className="p-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Enter Announcement <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
                    </label>
                    <textarea
                        placeholder="Write here..."
                        className="w-full border border-gray-300 text-xs rounded-md p-2"
                    />
                </div>
                
                <div className="p-3">
                    <label className="block font-medium text-gray-700 mb-1 text-xs">
                        Files/Media <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
                    </label>
                    <div className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-50">
                        <input type="file" name="files" id="files" className="hidden" />
                        <label htmlFor="files" className="cursor-pointer text-xs">
                            + drag or upload a file
                        </label>
                    </div>
                </div>
                <div className="flex justify-end p-2 border-t">
                    <button onClick={onClose} className="text-xs border border-gray-400 text-black rounded-md px-4 py-1 mr-2">Cancel</button>
                    <button className="bg-[#22B573] text-xs text-white rounded-md px-4 py-1">Publish</button>
                </div>
            </div>
        </div>
    );
};

export default AnnModal;
