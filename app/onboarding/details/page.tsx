import Details from "@/app/Components/Onboarding/OnboardingRight/Details/Details";
import OnBoardLeft from "@/app/Components/Onboarding/OnboardLeft/OnBoardLeft";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-5/12">
          <OnBoardLeft />
        </div>
        <div className="w-7/12">
          <Details />
        </div>
      </div>
    </>
  );
}
