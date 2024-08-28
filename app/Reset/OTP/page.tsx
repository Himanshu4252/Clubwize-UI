import OnBoardLeft from "../../Components/Onboarding/OnboardLeft/OnBoardLeft";
import OTP from "@/app/Components/LFR/Reset Password/OTP";

export default function Home() {
  return (
    <main  className="w-full flex">
    <div className="w-5/12">
    <OnBoardLeft />
    </div>
    <div className="w-7/12">
    <OTP />
    </div>
    </main>
  );
}
