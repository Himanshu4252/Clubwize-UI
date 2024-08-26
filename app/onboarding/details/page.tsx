import Details from "@/app/Components/Onboarding/OnboardingRight/Details/Details";
import OnBoardLeft from "../../Components/Onboarding/OnboardLeft/OnBoardLeft";

export default function Home() {
  return (
    <main  className="w-full flex">
    <div className="w-5/12">
    <OnBoardLeft />
    </div>
    <div className="w-7/12">
    <Details />
    </div>
    </main>
  );
}
