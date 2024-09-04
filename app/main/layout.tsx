import { Inter } from "next/font/google";
import PageNavigation from "../Components/PageNavigation/PageNavigation";
import Team from "../Components/Create_Team/Team";
import Profile from "../Components/Profile/Profile";
import SearchBar from "../Components/searchPanel/SearchBar";
import Side_Bar from "../Components/Sub_Componet/Side_Bar";
import ModuleBar from "../Components/NewsFeed/ModuleBar/ModuleBar";
import All from "../Components/Debate/All";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4" style={{zIndex:'1000'}}>
    <div>
    <Side_Bar />  
    </div>
    

    <div className="flex flex-col w-full" >
      <SearchBar />

      <div className="flex flex-row justify-evenly" >
      <div className="w-2/12" style={{zIndex:'-1'}}>
         <Profile />
      </div>
       

        {/* Feed */}
        <div className='flex flex-col w-6/12 gap-4 items-center h-screen bg-[url("/img/FeedBackground.png")] my-1 '>
          <div className="w-full">
            <ModuleBar />
          </div>
          <div>
            {children}
          </div>
        </div>

        {/* Team */}
        <div className="w-3/12 ">
          <Team />
        </div>
      </div>
    </div>
  </div>
  );
}
