"use client";

import styles from "../Sub_Componet/Side_Bar.module.css";

import Side_Bar from "../Sub_Componet/Side_Bar";
import SearchBar from "../searchPanel/SearchBar";

import Chat from "../Setting/Chat/Chat";
import Activity_copm from "./Activity_comp/Activity_copm";

const Activity = () => {
  return (
    <>
      <div className="flex gap-1" style={{ zIndex: "1000" }}>
        {/* Sidebar */}
        <div className="">
          <Side_Bar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col w-full">
          <SearchBar />

          <div className="flex flex-row gap-5">
            <div className="flex flex-col w-8/12 items-center h-screen my-1">
                <Activity_copm />
            </div>

            <div className="w-4/12">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
