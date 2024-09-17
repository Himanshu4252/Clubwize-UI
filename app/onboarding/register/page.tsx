import Register from "@/app/Components/Onboarding/OnboardingRight/Register/Register";
import OnBoardLeft from "../../Components/Onboarding/OnboardLeft/OnBoardLeft";
import Greetings from "@/app/Components/Onboarding/OnboardingRight/Register/Greetings";

export default function Home() {
  return (
  //   <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
  //   <div className="">
  //     <Greetings />
  //   </div>
  //   <div>
  //     <Register />
  //   </div>
  // </div>
    <main className="w-full flex">
      <div className="w-5/12">
        <OnBoardLeft />
      </div>
      <div className="w-7/12 h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-1/2">
          <Greetings />
        </div>
        <div className="w-1/2">
          <Register />
        </div>
      </div>
    </main>
  );
}
