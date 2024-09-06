import Log from "../Components/LFR/Log";
import OnBoardLeft from "../Components/Onboarding/OnboardLeft/OnBoardLeft";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex">
      <div className="w-5/12">
        <OnBoardLeft />
      </div>
      <div className="w-7/12">
        {children}
      </div>
    </div>
  );
}
