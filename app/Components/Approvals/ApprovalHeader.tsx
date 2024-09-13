
import { routes } from "@/app/Routes/routes";
import { useRouter } from "next/navigation";
import React from "react";

const ApprovalHeader = () => {


  return (
    <div className="inline-flex gap-2 justify-center items-center cursor-pointer">
      <span className="w-24 h-0 border border-1 text-gray-600"></span>
      <span className="text-gray-600">Approvals</span>
      <span className="w-24 h-0 border border-1 text-gray-600"></span>
    </div>
  );
};

export default ApprovalHeader;
