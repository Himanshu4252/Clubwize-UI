import React from 'react';

const PropSolModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg w-[60vh]">
                <div className="flex justify-between items-center p-2 border-b mb-4">
                    <h2 className="text-xl text-black font-semibold">Propose Solution</h2>
                    <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={onClose}
                    >
                        <p className="text-2xl">&times;</p>
                    </button>
                </div >
                <div className="mb-4 p-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="solution-title">
                        Solution Title <i className="fas fa-info-circle text-gray-400"></i>
                    </label>
                    <input
                        type="text"
                        id="solution-title"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter title"
                    />
                </div>
                <div className="mb-4 p-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="solution">
                        Solution
                    </label>
                    <textarea
                        id="solution"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       
                        placeholder="Write Solution..."
                    ></textarea>
                </div>
                <div className="mb-4 p-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="files-media">
                        Files/Media
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>+ Upload document</span>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2 p-3">
                    <input
                        id="antonym"
                        name="antonym"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded"
                    />
                    <label htmlFor="antonym" className="ml-2 block text-sm text-gray-900">
                        Antonym
                    </label>
                </div>
                <div className="flex justify-end border-t p-2">
                    <button className="text-gray-800 border px-4 py-2 rounded-md mr-2">Cancel</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default PropSolModal;
