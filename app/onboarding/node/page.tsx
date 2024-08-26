
import CNode from "@/app/Components/Onboarding/OnboardingRight/Details/cnode";
import Node from "@/app/Components/Onboarding/OnboardingRight/Details/node";
import NodeLeft from "@/app/Components/Onboarding/OnboardLeft/NodeLeft";


export default function Home() {
  return (
    <main  className="w-full flex">
    <div className="w-5/12">
    <NodeLeft />
    </div>
    <div className="w-7/12">
    <CNode />
    </div>
    </main>
  );
}
