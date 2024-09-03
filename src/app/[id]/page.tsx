import { NavMenu } from '@/components/NavMenu'
import PartyList from '@/components/PartyList'
import Transactions from '@/components/Transactions'
import React from 'react'

interface Params {
   params:{
    id:string
   }
}

const User = ({params}:Params) => {

    const uuid:string = params.id

  return (
    <div className='flex flex-col h-screen ' >
        <div id='nav' className='flex justify-center m-2 p-2'>
            <div>Navbar</div>
            <div>input to search for parties</div>
        </div>
         <div id='userIntro' className='flex ml-8'>
            <div>
                Hello user {params.id}
            </div>
         </div>
        <div id='user-content' className='flex  items-center'>
            <div id='partyList' className='m-8 p-4'>List of parties joined</div>
            <div id='TransactionList' className='m-4 p-4'>List of transactions done in user</div>
            
        </div>

    </div>
  )
}

export default User