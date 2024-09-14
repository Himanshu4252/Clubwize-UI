import React, { useState } from 'react';

interface FormValues {
  title: string;
  name:string;
  designation:string;
  variableTitle:string;
  units:string;
  region: string;
  budget: string;
  deadline: string;
  champions:string;
  significance: string;
  relatedEvent: string;
  closingRemark: string;
  solutionDetails: string;
  files: File | null;
}

const ToggleSwitch: React.FC<{ checked: boolean, onChange: () => void }> = ({ checked, onChange }) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-7 h-3.5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#22B573] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#22B573]"></div>
      </label>
    );
  };

const CreateIssue: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    name:'',
    designation:'',
    champions:'',
    variableTitle:'',
    units: '',
    region: '',
    budget: '',
    deadline: '',
    significance: '',
    relatedEvent: '',
    closingRemark: '',
    solutionDetails: '',
    files: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormValues({ ...formValues, files: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const [isPublic, setIsPublic] = useState(false);
  const [canBeAdopted, setCanBeAdopted] = useState(false);
  return (
    
    <div className="gap-1">
        <div className="text-xs mb-2"><span className="underline text-gray-800">
    <a href="/Issues" className="text-gray-800 hover:text-blue-600">Issues</a>
  </span> &gt; Create new Issue</div>
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
   
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="title" className="block text-xs font-medium text-gray-700 mb-1">
            Issue Title <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-xs font-medium text-gray-700 mb-1">
            Issue Type <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <select
            name="region"
            id="region"
            value={formValues.region}
            onChange={handleSelectChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          >
            <option value="">select Type</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-gray-700 mb-1">
           Where/Who <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>

          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            value={formValues.budget}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Where issues?"
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block text-xs font-medium text-gray-700 mb-1">
            Deadline If Any <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            value={formValues.deadline}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
          <label htmlFor="relatedEvent" className="block text-xs font-medium text-gray-700 mb-1">
            Reason of deadline <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="relatedEvent"
            id="relatedEvent"
            value={formValues.relatedEvent}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="write reason.."
          />
        </div>

        <div>
          <label htmlFor="closingRemark" className="block text-xs font-medium text-gray-700 mb-1">
            significance <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="closingRemark"
            id="closingRemark"
            value={formValues.closingRemark}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="significance"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
            Who should address<span className="inline-flex ml-1 text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-[45vh] border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter details"
          />
        </div>

       
      </div>

      <div className="mb-6">
        <label htmlFor="solutionDetails" className="block text-xs font-medium text-gray-700 mb-1">
         Issue Description
        </label>
        <textarea
          name="solutionDetails"
          id="solutionDetails"
          value={formValues.solutionDetails}
          onChange={handleInputChange}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200 h-28"
          placeholder="write here..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Files/media <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <div className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-100">
          <input type="file" name="files" id="files" onChange={handleFileChange} className="hidden" />
          <label htmlFor="files" className="cursor-pointer text-xs">
            + drag or upload a file
          </label>
        </div>
        <div className="mb-6 flex items-center space-x-2 mt-6">
        <label htmlFor="public" className="block text-xs font-medium text-gray-700 flex-1">
          Make this Issue public
        </label>
        <ToggleSwitch checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
      </div>

      <div className="mb-6 flex items-center space-x-2">
        <label htmlFor="adopt" className="block text-xs font-medium text-gray-700 flex-1">
         Show your name on this Issue?
        </label>
        <ToggleSwitch checked={canBeAdopted} onChange={() => setCanBeAdopted(!canBeAdopted)} />
      </div>

      <div className="flex justify-end space-x-2">
        <button type="button" className="px-8 py-1 text-xs bg-white text-red-500 rounded-md" onClick={onCancel}>Cancel</button>
        <button type="button" className="px-8 py-1 text-xs bg-white text-black border rounded-md">Save draft</button>
        <button type="submit" className="px-8 py-1 text-xs bg-[#22B573] text-white rounded-md">Publish</button>
      </div>
      </div>

      
    </form>
   


    </div>
  );
};

export default CreateIssue;
