import Team from "../Components/Create_Team/Team";

export default function Home() {
  return (
    <main className="w-full flex gap-5">
      <div className="w-1/12 bg-gray-300"></div>
      <div className="w-2/12 bg-gray-300"></div>
      <div className="w-6/12 bg-gray-300">
        <div className="h-1/6 bg-gray-300"></div>
        <div className="h-5/6 bg-gray-400"></div>
      </div>
      <div className="w-3/12">
        <Team />
      </div>
    </main>
  );
}
