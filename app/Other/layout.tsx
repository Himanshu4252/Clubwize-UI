import { Inter } from "next/font/google";
import PageNavigation from "../Components/PageNavigation/PageNavigation";
import Team from "../Components/Create_Team/Team";
import Profile from "../Components/Profile/Profile";
import SearchBar from "../Components/searchPanel/SearchBar";
import Side_Bar from "../Components/Sub_Componet/Side_Bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="flex gap-4">
    <div>
    <Side_Bar />  
    </div>
    

    <div className="flex flex-col w-full">
      <SearchBar />

      <div className="flex flex-row">
      {/* <div className="w-2/12">
         <Profile />
      </div> */}
       

        {/* Feed */}
        <div className='flex flex-col gap-4 items-start justify-start  h-screen bg-[url("/img/FeedBackground.png")] my-1 w-full '>
          <div className="w-full">
            {children}
          </div>
          
        </div>

       
      </div>
    </div>
  </div>
  );
}
