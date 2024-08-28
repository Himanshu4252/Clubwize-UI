// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Logo from "../../../../../public/assets/Component 4.png";
// import rect from "../../../../../public/assets/Onboarding/Rect.png";
// import Module from "./Popup/Module";

// export default function Node() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
//   const [nodeName, setNodeName] = useState("");
//   const [about, setAbout] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };


//   const isFormComplete = () => {
//     return (
//       profilePhoto &&
//       nodeName.trim() !== "" &&
//       about.trim() !== "" &&
//       location.trim() !== "" &&
//       description.trim() !== ""
//     );
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center">
//         <div className="w-8/12">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
//               <Image src={Logo} alt="Logo" width={40} height={40} />
//             </div>
//           </div>

//           <h1 className="text-center text-2xl font-bold mb-2">
//             Hey, Welcome to Clubwize 👋
//           </h1>
//           <p className="text-center text-gray-500 mb-6">
//             Welcome to the team, rookie! Get ready to crush it with Clubwize!
//           </p>

//           <div className="flex justify-center my-10">
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
//                   1
//                 </div>
//                 <span className="ml-2 text-gray-500">Details</span>
//               </div>
//               <span className="mx-4 text-gray-300">—</span>

//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
//                   2
//                 </div>
//                 <span className="ml-2 text-gray-500">Picture</span>
//               </div>
//               <span className="mx-4 text-gray-300">—</span>

//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
//                   3
//                 </div>
//                 <span className="ml-2 text-gray-500">Interest</span>
//               </div>
//               <span className="mx-4 text-gray-300">—</span>

//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
//                   ✓
//                 </div>
//                 <span className="ml-2 text-green-500">Node</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-medium text-gray-700">Search Node</h2>
//             <div className="relative flex items-center my-5">
//               <input
//                 type="text"
//                 placeholder="AI_Next"
//                 className="p-2 pl-5 border rounded-md w-full"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4">
//             <div className="flex justify-center items-center bg-green-50 border-2 border-dashed border-green-300 rounded-lg p-2">
//               <button onClick={toggleModal}>
//                 <span className="text-green-500">+ Create Node</span>
//               </button>
//             </div>
//             <div className="border rounded-lg p-4">
//               <Image src={rect} alt="Node 1" className=" rounded" />
//               <h3 className="mt-2 font-medium text-gray-700">AI_Next_Gen</h3>
//               <p className=" text-gray-400 text-sm">
//                 <span role="img" aria-label="users">
//                   👥
//                 </span>{" "}
//                 20.363k
//               </p>
//               <p className="text-center text-gray-500 mt-5 bg-gray-200 rounded">
//                 <span role="img" aria-label="location">
//                   📍
//                 </span>{" "}
//                 Mumbai, India
//               </p>
//             </div>
//             <div className="border rounded-lg p-4">
//               <Image src={rect} alt="Node 2" className=" rounded" />
//               <h3 className="mt-2 font-medium text-gray-700">AI_Next_Genre</h3>
//               <p className=" text-gray-500 text-sm">
//                 <span role="img" aria-label="users">
//                   👥
//                 </span>{" "}
//                 1.23k
//               </p>
//               <p className="text-center text-gray-500 mt-5 bg-gray-200 rounded">
//                 <span role="img" aria-label="location">
//                   📍
//                 </span>{" "}
//                 Surat, India
//               </p>
//             </div>
//           </div>

//           <div className="mb-6 flex mt-20">
//             <input type="checkbox" className="mr-2" />
//             <div className="ml-2 text-sm">
//               <label htmlFor="terms" className="font-medium text-gray-700">
//                 I agree to the{" "}
//                 <a href="#" className="text-green-500 underline">
//                   Terms of Services
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-green-500 underline">
//                   Privacy Policy
//                 </a>
//               </label>
//             </div>
//           </div>

//           <div className="mt-6 flex justify-end gap-5 col-span-2">
//             <a href="/onboarding/search">
//               <button
//                 type="button"
//                 className="px-10 py-2 bg-gray-200 text-gray-700 rounded-lg"
//               >
//                 Back
//               </button>
//             </a>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
//             <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">Create node</h2>
//                   <button
//                     onClick={toggleModal}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     &times;
//                   </button>
//                 </div>

//                 <div className="flex justify-center mb-6">
//                   <div className="flex items-center">
//                     <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center text-white">
//                       ✓
//                     </div>
//                     <span className="ml-2 text-green-500">Details</span>
//                   </div>
//                   <span className="mx-4 text-gray-300">—</span>
//                   <div className="flex items-center">
//                     <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-gray-500">
//                       2
//                     </div>
//                     <span className="ml-2 text-gray-500">Module</span>
//                   </div>
//                 </div>

//                 {/* Form Fields */}
//                 <div className="grid grid-cols-1 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Select profile photo
//                       </label>
//                       <div className="mt-1 flex items-center">
//                         <input
//                           className="flex justify-center items-center w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                           type="file"
//                           onChange={(e) => {
//                             if (e.target.files && e.target.files[0]) {
//                               setProfilePhoto(e.target.files[0]);
//                             } else {
//                               setProfilePhoto(null);
//                             }
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Enter node name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter name"
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                         value={nodeName}
//                         onChange={(e) => setNodeName(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         About
//                       </label>
//                       <textarea
//                         placeholder="Write text..."
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                         value={about}
//                         onChange={(e) => setAbout(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Select location
//                       </label>
//                       <select
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                       >
//                         <option value="">Select location</option>
//                         <option value="Location 1">Location 1</option>
//                         <option value="Location 2">Location 2</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         placeholder="Write text..."
//                         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="mt-6 flex justify-end gap-5">
//                     <button
//                       onClick={toggleModal}
//                       className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
//                     >
//                       Previews
//                     </button>
//                     <button
//                       onClick={openModal}
//                       className={`px-4 py-2 rounded-md ${
//                         isFormComplete()
//                           ? "bg-green-500 text-white"
//                           : "bg-green-200 text-gray-400 cursor-not-allowed"
//                       }`}
//                       disabled={!isFormComplete()}
//                     >
//                       Next
//                     </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
       



//       </div>
//     </>
//   );
// }
