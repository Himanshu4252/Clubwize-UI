"use client"
import { routes } from "@/app/Routes/routes";
import { useRouter, usePathname } from "next/navigation";
// import { useRouter } from 'next/router';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const router= useRouter();
    const pathName = usePathname();
    

    const handleChat = () => {
        router.push('/main/ChapterFeed/Chat')
    }

    const handleFeed = () => {
        router.push('/main/ChapterFeed/Feed')
    }

    const handleMember = () => {
        router.push('/main/ChapterFeed/Member')
    }
    
    const isCurrentLink = (href : any) => {
      return pathName === href;
    };

    return (
<>
        <div className="text-base font-medium text-center  border-b border-gray-200 dark:text-gray-400 dark:border-gray-500 w-full">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              onClick={handleChat}
              className={`${isCurrentLink(routes.chatChapter) ? 'text-green-500 border-b-2  ' : 'text-gray-500'} inline-block p-4 border-b-green-500 rounded-t-lg active cursor-pointer`}
            >
              Chat
            </a>

            {/* <svg 
              width="100" height="5" viewBox="0 0 168 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H164C166.209 0.5 168 2.29086 168 4.5H0Z"
                fill="#22B573"
              />
            </svg> */}
          </li>
          <li className="me-2">
            <a
              onClick={handleFeed}
              className={`${isCurrentLink(routes.feedChapter) ? 'text-green-500 border-b-2' : 'text-gray-500'} inline-block p-4 border-b-green-500 rounded-t-lg  hover:text-green-500 hover:border-gray-300   hover:border-b-green-500 cursor-pointer`}
              aria-current="page"
            >
              Feed
              
            </a>
           

          </li>
          <li className="me-2">
            <a
              onClick={handleMember}
              className={`${isCurrentLink(routes.memberChapter) ? 'text-green-500 border-b-2' : 'text-gray-500'} inline-block p-4 border-b-green-500 rounded-t-lg hover:text-green-500 hover:border-gray-300   hover:border-b-green-500 cursor-pointer`}
              aria-current="page"
            >
              Member
              
            </a>
           

          </li>
        </ul>
      </div>
      <div className="mt-4">
      {children}
      </div>
      </>

    )}