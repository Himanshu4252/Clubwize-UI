import Log from "../Components/LFR/Log";
import OnBoardLeft from "../Components/Onboarding/OnboardLeft/OnBoardLeft";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      
        {children}
      
    </div>
  );
}
