"use client";
import React, { useEffect, useState } from "react";
import module from "./Module.module.css";
import styles from "./Module.module.css";
import Team from "../Create_Team/Team";
import ModuleBar from "../NewsFeed/ModuleBar/ModuleBar";

import SearchBar from "../searchPanel/SearchBar";
import Side_Bar from "../Sub_Componet/Side_Bar";
import Module_page from "./modules/Module_page";
import Model from "./modules/Model/Model";
import Prefrence from "@/app/Prefrence/Prefrence";
import ProfileFeed from "../ProfileFeed/ProfileFeed";
import Feed from "@/app/Feed/page";
import FeedPage from "@/app/main/Feed/page";
import ActivityCopm from "../My_Activity/Activity_comp/Activity_copm";
import Actevity from "../Actevity/Actevity";
import Nodes from "./Nodes/Nodes";
import Members from "../Create_Team/TeamPopup/Members";
import Profile from "../Profile2/Profile";
import MembersFeed from "../MembersFeed/MembersFeed";
import Approvals from "../Approvals/Approvals";
import InsightsFeed from "../InsightsFeed/InsightsFeed";

function Module() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const setCloseModel = () => {
    setIsModelOpen(true);
  };

  const setOpenModel = () => {
    setIsModelOpen(false);
  };

  useEffect(() => {
    if (isModelOpen) {
      document.body.style.overflow = ""; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = ""; // Ensure it's always reset
    };
  }, [isModelOpen]);

  const [compindex, setCompindex] = useState(0);

  const compchange = (ind: number) => {
    setCompindex(ind);
  };

  const changecomps = () => {
    switch (compindex) {
      case 0:
        return <FeedPage />;
        break;
      case 1:
        return <Module_page setCloseModel={setCloseModel} />;
        break;
      case 2:
        return <ProfileFeed />;
        break;

      case 3:
        return <Nodes />;
        break;

      case 4:
        return <MembersFeed />;
        break;

      case 5:
        return <Approvals />;
        break;

      case 6:
        return <InsightsFeed />;
        break;

      case 7:
        return <Actevity />;
        break;

      case 8:
        return <Prefrence />;
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex gap-4 ">
      <div style={{ zIndex: "1000" }}>
        <Side_Bar />
      </div>

      {isModelOpen ? (
        <div className={styles.model_cnt} style={{ zIndex: "10" }}>
          <Model setOpenModel={setOpenModel} />
        </div>
      ) : (
        " "
      )}

      <div className="flex flex-col w-full">
        <SearchBar />

        <div className="flex flex-row justify-evenly " style={{ zIndex: "1" }}>
          <div className="w-2/12">
            <Profile compchange={compchange} />
          </div>

          {/* Feed */}
          <div className='w-fit flex flex-col  gap-4 h-screen bg-[url("/img/FeedBackground.png")] my-1 '>
            <div className="w-full flex space-x-2">
              <ModuleBar />
              <Team />
            </div>
            <div className="w-full lg:w-8/12 ">{changecomps()}</div>
          </div>

          {/* Team */}
          {/* <div className="w-3/12 ">
         
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Module;
