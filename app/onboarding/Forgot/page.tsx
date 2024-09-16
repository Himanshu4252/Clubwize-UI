import OnBoardLeft from "@/app/Components/Onboarding/OnboardLeft/OnBoardLeft";
import FP from "../../Components/LFR/FP";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-5/12">
          <OnBoardLeft />
        </div>
        <div className="w-7/12">
          <FP />
        </div>
      </div>
    </>
  );
}
