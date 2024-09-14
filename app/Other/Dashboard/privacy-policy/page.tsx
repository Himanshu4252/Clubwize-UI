import Clubs from '@/app/Components/Dashboard/Clubs/Clubs'
import Nodes from '@/app/Components/Dashboard/Nodes/Nodes'
import PrivacyPolicy from '@/app/Components/Dashboard/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

const PrivacyPage = () => {
  return (
<div className="inline-flex gap-4 w-full">

<div className="w-9/12 w-">
<PrivacyPolicy />
</div>
<div className="w-3/12 mr-4 flex flex-col gap-4">
<Nodes />
<Clubs />
</div>

</div>
  )
}

export default PrivacyPage