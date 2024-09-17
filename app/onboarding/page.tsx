import React from "react";
import Log from "../Components/LFR/Log";
import OnBoardLeft from "../Components/Onboarding/OnboardLeft/OnBoardLeft";

const OnboardingPage = () => {
  return (
    <>
      <div className="flex">
        <div className="w-5/12">
          <OnBoardLeft />
        </div>
        <div className="w-7/12">
          <Log />
        </div>
      </div>
    </>
  );
};

export default OnboardingPage;
