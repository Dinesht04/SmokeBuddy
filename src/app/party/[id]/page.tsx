
import React from 'react'

interface Params {
   params:{
    id:string
   }
}

const PartyPage = ({params}:Params) => {

    const uuid:string = params.id

  return (
    <div className='flex flex-col h-screen ' >
        <div id='nav' className='flex justify-center m-2 p-2'>
            <div>Navbar</div>
            <div>input to search for parties</div>
        </div>
         <div id='userIntro' className='flex ml-8'>
            <div>
                Party Title {params.id}
            </div>
            <div>
                Start Session
            </div>
         </div>
        <div id='party-content' className='flex  items-center'>
            <div id='Member List' className='m-8 p-4'>List of members joined</div>
            <div id='TransactionList' className='m-4 p-4'>List of transactions done in party</div>
            
        </div>

    </div>
  )
}

export default PartyPage