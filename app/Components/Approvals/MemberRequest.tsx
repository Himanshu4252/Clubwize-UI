"use client"
import { routes } from '@/app/Routes/routes';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const MemberRequest = () => {
    const router = useRouter();
    const [threeDotOpen, setThreeDotOpen] = useState(false);
    const threeDotLinks = [
"Accept All",
"Reject All",
"Delete All",
    ]

    
  const handleApprovals = () => {
    router.push(routes.approvals)
  }

  const handleRequests = () => {
    router.push(routes.approvalsReuqests)
  }


    // const requestData: any = [];
    const requestData = [
        {
          name: "Marvin McKinney",
          occupation: "Dog Trainer"
        },
        {
          name: "Kathryn Murphy",
          occupation: "Nursing Assistant"
        },
        {
          name: "Arlene McCoy",
          occupation: "Marketing Coordinator"
        },
        {
          name: "Floyd Miles",
          occupation: "Web Designer"
        },
        {
          name: "Bessie Cooper",
          occupation: "Medical Assistant"
        },
        {
          name: "Ralph Edwards",
          occupation: "President of Sales"
        }
      ];
  return (
    <div className='flex flex-col'>

         {/* Breadcrumbs */}
  <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items space-x-1 md:space-x-2 rtl:space-x-reverse my-4 text-base">
    <li className="inline-flex items-center">
      <a onClick={handleApprovals} className="inline-flex items-center  text-black hover:text-blue-600 underline cursor-pointer">
     
        Approvals
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a onClick={handleRequests} className="ms-1  text-gray-500 hover:text-blue-600 md:ms-2  cursor-pointer">Member Requests</a>
      </div>
    </li>
    
  </ol>
</nav>

        <div className="flex flex-col bg-white rounded-lg shadow-md">   
        
        {/* Header */}
        <div className="inline-flex p-6 justify-between items-center">
            <p className='text-xl'>All Member request</p>
            <div className="relative">

            <svg className='cursor-pointer' onClick={()=> {setThreeDotOpen(!threeDotOpen)}} width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09161 6.90863C0.941226 6.90863 0 7.84986 0 9.00024C0 10.1506 0.941226 11.0919 2.09161 11.0919C3.242 11.0919 4.18323 10.1506 4.18323 9.00024C4.18323 7.84986 3.242 6.90863 2.09161 6.90863ZM2.09161 0.633789C0.941226 0.633789 0 1.57502 0 2.7254C0 3.87579 0.941226 4.81702 2.09161 4.81702C3.242 4.81702 4.18323 3.87579 4.18323 2.7254C4.18323 1.57502 3.242 0.633789 2.09161 0.633789ZM2.09161 13.1835C0.941226 13.1835 0 14.1247 0 15.2751C0 16.4255 0.941226 17.3667 2.09161 17.3667C3.242 17.3667 4.18323 16.4255 4.18323 15.2751C4.18323 14.1247 3.242 13.1835 2.09161 13.1835Z" fill="#212529"/>
</svg>

{threeDotOpen && (
            <div className="absolute right-0 top-8 bg-white shadow-md rounded-lg w-36 py-1 z-10">
              {threeDotOpen &&
                threeDotLinks.map((key, index) => (
                  <a
                    href="#"
                    key={index}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    {key}
                  </a>
                ))}
            </div>
          )}
                      </div>

        </div>

        <hr />

        {/* Approval Accepted Message box */}
      <div className="inline-flex justify-between items-center bg-white w-full p-6">
        
        <div className="inline-flex gap-2 justify-start items-center">
          {/* member icon */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white p-1 px-2 text-sm">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7657 0.582085C15.4533 0.263003 14.9468 0.263003 14.6343 0.582085L5.04982 10.3705L1.3657 6.60804C1.0533 6.28896 0.546796 6.28899 0.234328 6.60804C-0.0781093 6.92709 -0.0781093 7.44436 0.234328 7.76344L4.48414 12.1036C4.79645 12.4226 5.30332 12.4224 5.61551 12.1036L15.7657 1.73752C16.0781 1.41847 16.0781 0.901167 15.7657 0.582085Z"
                fill="white"
              />
            </svg>
          </div>
          <span>
            You have Accept the Cameron Williamson feed post.{" "}
            <span className="underline text-green-500 cursor-pointer">
              View post
            </span>
          </span>
        </div>

        <div className="inline-flex gap-2 items-center px-6 py-1 border border-gray-400 rounded-md text-sm text-black cursor-pointer bg-gray-100 ">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.92347 0.230053C4.05235 0.377401 4.12476 0.577219 4.12476 0.785563C4.12476 0.993906 4.05235 1.19372 3.92347 1.34107L2.34701 3.14275H6.18744C7.4638 3.14275 8.68791 3.72222 9.5904 4.75368C10.493 5.78512 11 7.18411 11 8.64282V10.2143C11 10.4226 10.9275 10.6225 10.7986 10.7699C10.6697 10.9173 10.4948 11 10.3125 11C10.1302 11 9.95526 10.9173 9.82635 10.7699C9.69738 10.6225 9.62498 10.4226 9.62498 10.2143V8.64282C9.62498 7.60086 9.2628 6.60165 8.61813 5.86488C7.97345 5.12811 7.09914 4.7142 6.18744 4.7142H2.34701L3.92347 6.51585C3.98913 6.58837 4.04151 6.67504 4.07754 6.7709C4.11357 6.86676 4.13253 6.96992 4.13333 7.07419C4.13412 7.17853 4.11673 7.28201 4.08216 7.37858C4.04759 7.47515 3.99654 7.56283 3.93199 7.63661C3.86744 7.71039 3.79067 7.76877 3.70618 7.8083C3.62169 7.84774 3.53115 7.86762 3.43987 7.86675C3.34859 7.86581 3.25837 7.84412 3.17449 7.80295C3.09061 7.76178 3.01475 7.70191 2.95133 7.62687L0.201296 4.48398C0.0724084 4.33664 0 4.13682 0 3.92847C0 3.72013 0.0724084 3.52031 0.201296 3.37296L2.95133 0.230053C3.08025 0.0827528 3.25509 0 3.4374 0C3.6197 0 3.79454 0.0827528 3.92347 0.230053Z"
              fill="#343A40"
            />
          </svg>
          Undo
        </div>
      </div>

      <hr />


        {/* List */}
<div className="flex flex-col px-6">
{requestData.length > 0 ? (requestData.map((request, index) => (
    <div key={index} className="inline-flex justify-between border-1 border-b  py-3 items-center">
    <div className="inline-flex gap-2">
        <span className="rounded-md w-12 h-12 bg-gray-500"></span>
        <div className="flex flex-col">
            <h5 className="font-medium">{request.name}</h5>
            <p className="text-sm">{request.occupation}</p>
        </div>
    </div>

    <div className="inline-flex justify-cemter  gap-4 text-sm">
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-red-500 text-red-500 cursor-pointer hover:bg-red-100">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.682992 0.682993C0.800196 0.565823 0.959139 0.500001 1.12487 0.500001C1.29059 0.500001 1.44954 0.565823 1.56674 0.682993L5.49987 4.61612L9.43299 0.682993C9.49065 0.623299 9.55961 0.575685 9.63586 0.542929C9.71212 0.510174 9.79413 0.492932 9.87712 0.492211C9.9601 0.49149 10.0424 0.507304 10.1192 0.538729C10.196 0.570155 10.2658 0.616563 10.3245 0.675246C10.3832 0.733929 10.4296 0.803711 10.461 0.880521C10.4924 0.957332 10.5082 1.03963 10.5075 1.12262C10.5068 1.20561 10.4896 1.28762 10.4568 1.36387C10.424 1.44012 10.3764 1.50909 10.3167 1.56674L6.38362 5.49987L10.3167 9.43299C10.4306 9.55087 10.4936 9.70875 10.4922 9.87262C10.4907 10.0365 10.425 10.1932 10.3091 10.3091C10.1932 10.425 10.0365 10.4907 9.87262 10.4922C9.70874 10.4936 9.55087 10.4306 9.43299 10.3167L5.49987 6.38362L1.56674 10.3167C1.44887 10.4306 1.29099 10.4936 1.12712 10.4922C0.963243 10.4907 0.806485 10.425 0.690605 10.3091C0.574725 10.1932 0.508994 10.0365 0.50757 9.87262C0.506146 9.70875 0.569143 9.55087 0.682992 9.43299L4.61612 5.49987L0.682992 1.56674C0.565822 1.44954 0.5 1.2906 0.5 1.12487C0.5 0.95914 0.565822 0.800197 0.682992 0.682993Z"
              fill="#DC3545"
            />
          </svg>
          Reject{" "}
        </div>
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-green-500 text-green-500 cursor-pointer hover:bg-green-100">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8243 0.699426C11.59 0.433525 11.2101 0.433525 10.9757 0.699426L3.78737 8.85645L1.02428 5.72105C0.789972 5.45515 0.410097 5.45518 0.175746 5.72105C-0.058582 5.98693 -0.058582 6.41799 0.175746 6.68389L3.3631 10.3007C3.59734 10.5665 3.97749 10.5664 4.21163 10.3007L11.8243 1.66229C12.0586 1.39641 12.0586 0.965328 11.8243 0.699426Z" fill="#22B573"/>
</svg>

          Accept{" "}
        </div>
      </div>



</div>
    ))) :
(
    <div className="flex justify-center items-center bg-white w-full h-52">
        <svg width="122" height="100" viewBox="0 0 122 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="121" height="99" transform="translate(0.5)" fill="white" fill-opacity="0.01"/>
<path d="M61.1033 99.4926C85.737 99.4926 105.707 95.7613 105.707 91.1584C105.707 86.5556 85.737 82.8242 61.1033 82.8242C36.4696 82.8242 16.5 86.5556 16.5 91.1584C16.5 95.7613 36.4696 99.4926 61.1033 99.4926Z" fill="#F5F5F7" fill-opacity="0.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M96.7863 66.6744L81.0462 47.3027C80.291 46.3908 79.187 45.8389 78.0245 45.8389H44.1824C43.0206 45.8389 41.9166 46.3908 41.1613 47.3027L25.4219 66.6744V76.7948H96.787V66.6744H96.7863Z" fill="#AEB8C2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7566 20.8359H83.4493C84.1473 20.8359 84.8166 21.1132 85.3102 21.6067C85.8037 22.1002 86.0809 22.7696 86.0809 23.4675V84.878C86.0809 85.576 85.8037 86.2453 85.3102 86.7388C84.8166 87.2324 84.1473 87.5096 83.4493 87.5096H38.7566C38.0586 87.5096 37.3893 87.2324 36.8958 86.7388C36.4023 86.2453 36.125 85.576 36.125 84.878V23.4675C36.125 22.7696 36.4023 22.1002 36.8958 21.6067C37.3893 21.1132 38.0586 20.8359 38.7566 20.8359V20.8359Z" fill="#F5F5F7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.5772 27.3838H77.6278C77.9768 27.3838 78.3115 27.5224 78.5582 27.7692C78.805 28.0159 78.9436 28.3506 78.9436 28.6996V45.1187C78.9436 45.4676 78.805 45.8023 78.5582 46.0491C78.3115 46.2958 77.9768 46.4344 77.6278 46.4344H44.5772C44.2282 46.4344 43.8935 46.2958 43.6468 46.0491C43.4 45.8023 43.2614 45.4676 43.2614 45.1187V28.6996C43.2614 28.3506 43.4 28.0159 43.6468 27.7692C43.8935 27.5224 44.2282 27.3838 44.5772 27.3838ZM44.7495 53.5772H77.4555C77.8501 53.5772 78.2287 53.734 78.5077 54.0131C78.7868 54.2922 78.9436 54.6707 78.9436 55.0654C78.9436 55.4601 78.7868 55.8386 78.5077 56.1177C78.2287 56.3967 77.8501 56.5535 77.4555 56.5535H44.7495C44.3548 56.5535 43.9763 56.3967 43.6972 56.1177C43.4182 55.8386 43.2614 55.4601 43.2614 55.0654C43.2614 54.6707 43.4182 54.2922 43.6972 54.0131C43.9763 53.734 44.3548 53.5772 44.7495 53.5772ZM44.7495 61.316H77.4555C77.8502 61.316 78.2288 61.4729 78.508 61.752C78.7871 62.0311 78.9439 62.4097 78.9439 62.8045C78.9439 63.1993 78.7871 63.5779 78.508 63.857C78.2288 64.1362 77.8502 64.293 77.4555 64.293H44.7495C44.3548 64.293 43.9762 64.1362 43.697 63.857C43.4179 63.5779 43.261 63.1993 43.261 62.8045C43.261 62.4097 43.4179 62.0311 43.697 61.752C43.9762 61.4729 44.3548 61.316 44.7495 61.316ZM96.6397 89.9358C96.1298 91.9562 94.339 93.4621 92.2087 93.4621H29.9962C27.866 93.4621 26.0752 91.9555 25.566 89.9358C25.4689 89.5508 25.4198 89.1552 25.4199 88.7581V66.6746H42.7344C44.6469 66.6746 46.1883 68.2851 46.1883 70.2404V70.2667C46.1883 72.2213 47.7476 73.7996 49.6601 73.7996H72.5449C74.4574 73.7996 76.0166 72.2068 76.0166 70.2515V70.2437C76.0166 68.2884 77.5581 66.6739 79.4706 66.6739H96.7851V88.7588C96.7851 89.1647 96.7344 89.5588 96.6397 89.9358Z" fill="#DCE0E6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.8162 21.9026L94.3227 23.6461C94.2073 23.6909 94.0815 23.7023 93.9599 23.6789C93.8383 23.6555 93.7258 23.5982 93.6352 23.5137C93.5447 23.4292 93.4799 23.3208 93.4483 23.2011C93.4166 23.0813 93.4194 22.9551 93.4563 22.8368L94.7306 18.7533C93.0273 16.8164 92.0273 14.4546 92.0273 11.9059C92.0273 5.33026 98.6839 0 106.896 0C115.106 0 121.763 5.33026 121.763 11.9059C121.763 18.4816 115.106 23.8118 106.895 23.8118C103.916 23.8118 101.142 23.1105 98.8162 21.9026Z" fill="#DCE0E6"/>
<path d="M112.751 14.0555C113.786 14.0555 114.626 13.2264 114.626 12.2035C114.626 11.1807 113.786 10.3516 112.751 10.3516C111.716 10.3516 110.877 11.1807 110.877 12.2035C110.877 13.2264 111.716 14.0555 112.751 14.0555Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M102.913 13.8238H99.1641L101.071 10.583L102.913 13.8238ZM105.256 10.583H108.535V13.8238H105.256V10.583Z" fill="white"/>
</svg>
<p>No Pending Request</p>
    </div>
)


}



{/* <div className="inline-flex justify-between">
    <div className="inline-flex gap-2">
        <span className="rounded-md w-12 h-12 bg-gray-500"></span>
        <div className="flex flex-col">
            <h5 className="font-medium">Marvin McKinney</h5>
            <p className="text-sm">Dog Trainer</p>
        </div>
    </div>

    <div className="inline-flex justify-end items-center gap-4 mt-4 text-sm">
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-red-500 text-red-500 cursor-pointer hover:bg-red-100">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.682992 0.682993C0.800196 0.565823 0.959139 0.500001 1.12487 0.500001C1.29059 0.500001 1.44954 0.565823 1.56674 0.682993L5.49987 4.61612L9.43299 0.682993C9.49065 0.623299 9.55961 0.575685 9.63586 0.542929C9.71212 0.510174 9.79413 0.492932 9.87712 0.492211C9.9601 0.49149 10.0424 0.507304 10.1192 0.538729C10.196 0.570155 10.2658 0.616563 10.3245 0.675246C10.3832 0.733929 10.4296 0.803711 10.461 0.880521C10.4924 0.957332 10.5082 1.03963 10.5075 1.12262C10.5068 1.20561 10.4896 1.28762 10.4568 1.36387C10.424 1.44012 10.3764 1.50909 10.3167 1.56674L6.38362 5.49987L10.3167 9.43299C10.4306 9.55087 10.4936 9.70875 10.4922 9.87262C10.4907 10.0365 10.425 10.1932 10.3091 10.3091C10.1932 10.425 10.0365 10.4907 9.87262 10.4922C9.70874 10.4936 9.55087 10.4306 9.43299 10.3167L5.49987 6.38362L1.56674 10.3167C1.44887 10.4306 1.29099 10.4936 1.12712 10.4922C0.963243 10.4907 0.806485 10.425 0.690605 10.3091C0.574725 10.1932 0.508994 10.0365 0.50757 9.87262C0.506146 9.70875 0.569143 9.55087 0.682992 9.43299L4.61612 5.49987L0.682992 1.56674C0.565822 1.44954 0.5 1.2906 0.5 1.12487C0.5 0.95914 0.565822 0.800197 0.682992 0.682993Z"
              fill="#DC3545"
            />
          </svg>
          Reject{" "}
        </div>
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-green-500 text-green-500 cursor-pointer hover:bg-green-100">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8243 0.699426C11.59 0.433525 11.2101 0.433525 10.9757 0.699426L3.78737 8.85645L1.02428 5.72105C0.789972 5.45515 0.410097 5.45518 0.175746 5.72105C-0.058582 5.98693 -0.058582 6.41799 0.175746 6.68389L3.3631 10.3007C3.59734 10.5665 3.97749 10.5664 4.21163 10.3007L11.8243 1.66229C12.0586 1.39641 12.0586 0.965328 11.8243 0.699426Z" fill="#22B573"/>
</svg>

          Accept{" "}
        </div>
      </div>



</div> */}

</div>

        </div>
        
    </div>
  )
}

export default MemberRequest