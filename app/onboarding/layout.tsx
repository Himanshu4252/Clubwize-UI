import React from 'react'
import OnBoardLeft from '../Components/Onboarding/OnboardLeft/OnBoardLeft';
import Greetings from '../Components/Onboarding/OnboardingRight/Greetings';
import Register from '../Components/Onboarding/OnboardingRight/Register/Register';

interface Props{
    children: React.ReactNode;
}

const OnboardingLayout = ({children}: Props) => {
  return (
    <div className='flex w-full h-screen' data-theme="night">
        <aside className='w-2/5 bg- p-5 bg-onboarding-bg'>
           <OnBoardLeft />
        </aside>
        <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-white">
        {/* <div className='w-3/5 bg-white p-5'> */}
        <div className="bg- p-10 rounded-lg">

        <Greetings />
        {children}
        </div>
        </div>
        </div>
  )
}

export default OnboardingLayout