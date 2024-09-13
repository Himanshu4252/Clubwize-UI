"use client"
import React from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalCard from "./ApprovalCard";
import { useRouter } from "next/navigation";
import { routes } from "@/app/Routes/routes";

const Approvals = () => {
  const router = useRouter();

  const handleRequest = () => {
      router.push(routes.approvalsReuqests)
  }

  return (
    <div className="flex flex-col gap-4 ">
      <ApprovalHeader />

      {/* Approval Reuests Bar */}
      <div className="inline-flex p-4 px-4 w-full justify-between items-center bg-white shadow-md rounded-md cursor-pointer" onClick={handleRequest}>
        <div className="inline-flex gap-2">
          <div className="border rounded-md w-12 h-12 flex justify-center items-center">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.94 11.3822C14.1265 10.5245 13.1491 9.90059 12.1196 9.56082C13.1453 8.63571 13.7912 7.29713 13.7912 5.81039C13.7912 3.02547 11.5255 0.759766 8.74053 0.759766C5.95561 0.759766 3.68987 3.02547 3.68987 5.81039C3.68987 7.29713 4.3357 8.63571 5.36142 9.56082C4.33189 9.90063 3.35444 10.5246 2.54094 11.3823C1.22483 12.7698 0.5 14.5672 0.5 16.4433V17.2408H16.981V16.4433C16.981 14.5672 16.2562 12.7698 14.94 11.3822ZM5.2848 5.81039C5.2848 3.90493 6.83503 2.3547 8.74049 2.3547C10.646 2.3547 12.1962 3.90493 12.1962 5.81039C12.1962 7.71585 10.646 9.26608 8.74049 9.26608C6.83503 9.26608 5.2848 7.71585 5.2848 5.81039ZM2.15113 15.6458C2.54693 12.8592 4.96443 10.861 7.14556 10.861H10.3354C12.5166 10.861 14.9341 12.8592 15.3299 15.6458H2.15113Z"
                fill="#212529"
              />
              <path
                d="M19.1084 7.67072V5.27832H17.5135V7.67072H15.1211V9.26566H17.5135V11.6581H19.1084V9.26566H21.5008V7.67072H19.1084Z"
                fill="#212529"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-max font-semibold h-4 ">Member Approval</div>
            <div className="h-4 w-max text-sm text-gray-600">
              Evaluate and decide on requests by either approving or rejecting
              them.
            </div>
          </div>
        </div>
        <div className="inline-flex gap-4 items-center">
          <span className="rounded-full text-sm p-1 px-2 bg-orange-500 text-white">
            561+
          </span>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.98546 8.50298L0.367108 14.5528C-0.122368 15.0006 -0.122368 15.7247 0.367108 16.1677C0.856587 16.6108 1.64808 16.6108 2.13756 16.1677L9.63592 9.3128C10.1098 8.87931 10.1202 8.18381 9.67238 7.73602L2.14276 0.833457C1.89803 0.609565 1.57518 0.500001 1.25754 0.500001C0.9399 0.500001 0.617055 0.609566 0.372315 0.833457C-0.117163 1.28124 -0.117163 2.00532 0.372315 2.44834L6.98546 8.50298Z"
              fill="#212529"
            />
          </svg>
        </div>
      </div>


      {/* Approval Accepted Message box */}
      <div className="inline-flex justify-between items-center bg-white rounded-md shadow-md w-full p-4">
        
        <div className="inline-flex gap-2 justify-start items-center">
          {/* member icon */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white p-1 px-2 text-sm">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7657 0.582085C15.4533 0.263003 14.9468 0.263003 14.6343 0.582085L5.04982 10.3705L1.3657 6.60804C1.0533 6.28896 0.546796 6.28899 0.234328 6.60804C-0.0781093 6.92709 -0.0781093 7.44436 0.234328 7.76344L4.48414 12.1036C4.79645 12.4226 5.30332 12.4224 5.61551 12.1036L15.7657 1.73752C16.0781 1.41847 16.0781 0.901167 15.7657 0.582085Z"
                fill="white"
              />
            </svg>
          </div>
          <span>
            You have Accept the Cameron Williamson feed post.{" "}
            <span className="underline text-green-500 cursor-pointer">
              View post
            </span>
          </span>
        </div>

        <div className="inline-flex gap-2 items-center px-6 py-1 border border-gray-400 rounded-md text-sm text-black cursor-pointer bg-gray-100 ">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.92347 0.230053C4.05235 0.377401 4.12476 0.577219 4.12476 0.785563C4.12476 0.993906 4.05235 1.19372 3.92347 1.34107L2.34701 3.14275H6.18744C7.4638 3.14275 8.68791 3.72222 9.5904 4.75368C10.493 5.78512 11 7.18411 11 8.64282V10.2143C11 10.4226 10.9275 10.6225 10.7986 10.7699C10.6697 10.9173 10.4948 11 10.3125 11C10.1302 11 9.95526 10.9173 9.82635 10.7699C9.69738 10.6225 9.62498 10.4226 9.62498 10.2143V8.64282C9.62498 7.60086 9.2628 6.60165 8.61813 5.86488C7.97345 5.12811 7.09914 4.7142 6.18744 4.7142H2.34701L3.92347 6.51585C3.98913 6.58837 4.04151 6.67504 4.07754 6.7709C4.11357 6.86676 4.13253 6.96992 4.13333 7.07419C4.13412 7.17853 4.11673 7.28201 4.08216 7.37858C4.04759 7.47515 3.99654 7.56283 3.93199 7.63661C3.86744 7.71039 3.79067 7.76877 3.70618 7.8083C3.62169 7.84774 3.53115 7.86762 3.43987 7.86675C3.34859 7.86581 3.25837 7.84412 3.17449 7.80295C3.09061 7.76178 3.01475 7.70191 2.95133 7.62687L0.201296 4.48398C0.0724084 4.33664 0 4.13682 0 3.92847C0 3.72013 0.0724084 3.52031 0.201296 3.37296L2.95133 0.230053C3.08025 0.0827528 3.25509 0 3.4374 0C3.6197 0 3.79454 0.0827528 3.92347 0.230053Z"
              fill="#343A40"
            />
          </svg>
          Undo
        </div>
      </div>


 {/* Approval Reject Message box */}
 <div className="inline-flex justify-between items-center bg-white rounded-md shadow-md w-full p-4">
        
        <div className="inline-flex gap-2 justify-start items-center">
          {/* member icon */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500 text-white p-1 px-2 text-sm">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7657 0.582085C15.4533 0.263003 14.9468 0.263003 14.6343 0.582085L5.04982 10.3705L1.3657 6.60804C1.0533 6.28896 0.546796 6.28899 0.234328 6.60804C-0.0781093 6.92709 -0.0781093 7.44436 0.234328 7.76344L4.48414 12.1036C4.79645 12.4226 5.30332 12.4224 5.61551 12.1036L15.7657 1.73752C16.0781 1.41847 16.0781 0.901167 15.7657 0.582085Z"
                fill="white"
              />
            </svg>
          </div>
          <span>
            You have Rejected the Cameron Williamson feed post.{" "}
            <span className="underline text-red-500 cursor-pointer">
              View post
            </span>
          </span>
        </div>

        <div className="inline-flex gap-2 items-center px-6 py-1 border border-gray-400 rounded-md text-sm text-black cursor-pointer bg-gray-100 ">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.92347 0.230053C4.05235 0.377401 4.12476 0.577219 4.12476 0.785563C4.12476 0.993906 4.05235 1.19372 3.92347 1.34107L2.34701 3.14275H6.18744C7.4638 3.14275 8.68791 3.72222 9.5904 4.75368C10.493 5.78512 11 7.18411 11 8.64282V10.2143C11 10.4226 10.9275 10.6225 10.7986 10.7699C10.6697 10.9173 10.4948 11 10.3125 11C10.1302 11 9.95526 10.9173 9.82635 10.7699C9.69738 10.6225 9.62498 10.4226 9.62498 10.2143V8.64282C9.62498 7.60086 9.2628 6.60165 8.61813 5.86488C7.97345 5.12811 7.09914 4.7142 6.18744 4.7142H2.34701L3.92347 6.51585C3.98913 6.58837 4.04151 6.67504 4.07754 6.7709C4.11357 6.86676 4.13253 6.96992 4.13333 7.07419C4.13412 7.17853 4.11673 7.28201 4.08216 7.37858C4.04759 7.47515 3.99654 7.56283 3.93199 7.63661C3.86744 7.71039 3.79067 7.76877 3.70618 7.8083C3.62169 7.84774 3.53115 7.86762 3.43987 7.86675C3.34859 7.86581 3.25837 7.84412 3.17449 7.80295C3.09061 7.76178 3.01475 7.70191 2.95133 7.62687L0.201296 4.48398C0.0724084 4.33664 0 4.13682 0 3.92847C0 3.72013 0.0724084 3.52031 0.201296 3.37296L2.95133 0.230053C3.08025 0.0827528 3.25509 0 3.4374 0C3.6197 0 3.79454 0.0827528 3.92347 0.230053Z"
              fill="#343A40"
            />
          </svg>
          Undo
        </div>
      </div>

      
      

      {/* Approval Container */}
      <div className="flex flex-col gap-4">
        <ApprovalCard />
        <ApprovalCard />
        <ApprovalCard />
      </div>
    </div>
  );
};

export default Approvals;
