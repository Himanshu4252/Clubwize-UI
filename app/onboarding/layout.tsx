import React from 'react'
import OnBoardLeft from '../Components/Onboarding/OnboardLeft/OnBoardLeft';

interface Props{
    children: React.ReactNode;
}

const OnboardingLayout = ({children}: Props) => {
  return (
    <div className='flex w-full h-screen' data-theme="night">
        <aside className='w-2/5 bg- p-5 bg-onboarding-bg'>
           <OnBoardLeft />
        </aside>
        {children}
        </div>
  )
}

export default OnboardingLayout