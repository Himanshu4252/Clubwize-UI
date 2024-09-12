import React, { useState } from 'react';

const AskQuestionModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg w-[55vh] max-w-md">
                <div className="flex justify-between items-center p-2 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Ask a Question</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
                        <span>&times;</span>
                    </button>
                </div>
                <div className="p-2 mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ask Question
                        <span className="inline-flex text-xs items-center justify-center w-3 h-3 border border-gray-500 rounded-full text-gray-500 ml-1">i</span>
                    </label>
                    <input
                        placeholder="Write here..."
                        className="w-full border border-gray-300 rounded-md p-2 text-xs"
                    />
                </div>
                <div className="flex justify-end p-2 border-t border-gray-200">
                    <button onClick={onClose} className="text-xs border border-gray-400 text-black rounded-md px-4 py-1 mr-2 hover:bg-gray-100">Cancel</button>
                    <button className="bg-green-500 text-xs text-white rounded-md px-4 py-1 hover:bg-green-600">Submit</button>
                </div>
            </div>
        </div>
    );
};

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border-b border-gray-200">
            <div
                className="py-2 flex justify-between items-center cursor-pointer text-sm"
                onClick={onClick}
            >
                <span className="font-medium">{question}</span>
                <span className="text-lg font-bold">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <p className="text-gray-400 mb-4 text-xs">{answer}</p>}
        </div>
    );
}

function ProjectFAQs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="max-w mx-auto p-6 bg-white shadow-md rounded-md text-xs">
            <AccordionItem
                question="What to Expect During and After Blood Donation?"
                answer="This section addresses concerns and uncertainties individuals may have about the blood donation process. It explains what to expect before, during, and after donation, including preparation tips, the donation procedure, potential side effects, and post-donation care. By providing clear information and guidance, readers can feel more confident and prepared to donate blood."
                isOpen={openIndex === 0}
                onClick={() => handleAccordionClick(0)}
            />
            <AccordionItem
                question="How often can I donate blood?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 1}
                onClick={() => handleAccordionClick(1)}
            />
            <AccordionItem
                question="Is there an age limit for blood donation?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 2}
                onClick={() => handleAccordionClick(2)}
            />
            <AccordionItem
                question="Can I donate blood if I have a medical condition or take medication?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 3}
                onClick={() => handleAccordionClick(3)}
            />
            <AccordionItem
                question="How long does the blood donation process take?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 4}
                onClick={() => handleAccordionClick(4)}
            />
            <AccordionItem
                question="Are there any side effects or risks associated with blood donation?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 5}
                onClick={() => handleAccordionClick(5)}
            />
            <AccordionItem
                question="Can I donate blood if I’ve recently traveled to a foreign country?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis eu metus elementum pharetra. Quisque consectetur nisl non magna vestibulum, vitae tincidunt justo aliquet. Sed interdum diam nec arcu condimentum, ac pretium dolor consequat. Mauris viverra neque ut orci consequat, et vulputate mauris."
                isOpen={openIndex === 6}
                onClick={() => handleAccordionClick(6)}
            />
            <div className="mt-4 flex justify-center">
                <button onClick={openModal} className="border border-gray-300 text-[#22B573] py-1 px-3 rounded-md flex items-center text-sm">
                <span className="flex items-center justify-center w-4 h-4 bg-[#22B573] text-white rounded-full text-xs mr-1">
      ?
    </span>
                    Ask a question
                </button>
            </div>
            <AskQuestionModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default ProjectFAQs;
