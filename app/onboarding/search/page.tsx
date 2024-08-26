import Search from "@/app/Components/Onboarding/OnboardingRight/Details/Search";
import NodeLeft from "@/app/Components/Onboarding/OnboardLeft/NodeLeft";


export default function Home() {
  return (
    <main  className="w-full flex">
    <div className="w-5/12">
    <NodeLeft />
    </div>
    <div className="w-7/12">
    <Search />
    </div>
    </main>
  );
}
