import FP from "../Components/LFR/FP";
import OnBoardLeft from "../Components/Onboarding/OnboardLeft/OnBoardLeft";

export default function Home() {
  return (
    <main  className="w-full flex">
    <div className="w-5/12">
    <OnBoardLeft />
    </div>
    <div className="w-7/12">
    <FP />
    </div>
    </main>
  );
}
