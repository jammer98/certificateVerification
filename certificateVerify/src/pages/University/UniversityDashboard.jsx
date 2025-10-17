import React from 'react'

function UniversityDashboard() {


  return (
    <div className='flex flex-col flex-warp justify-center items-center'>
      <div className='flex flex-warp justify-between items-center bg-white hover:bg-neutral-200 active:bg-neutral-200 focus:outline-2 focus:outline-neutral-200 focus:outline-offset-2' > 
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="size-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <p>Back to home</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className ="size-10">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
        </svg>
        </div>
      </div>
      <div>
        <div className='flex flex-warp justify-start items-center'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className ="size-10">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
            </svg>
        </div>
        <div className='flex flex-col flex-warp items-center'>
          <div>Univeristy Dashboard</div>
          <div>University User(Metamask)</div>
        </div>
        </div>
        <div className='flex justify-between items-center felx-warp'>
          <div className='bg-blue-500 hover:bg-blue-400 w-4 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-6">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            <button>Issue New Certifcates</button>
          </div>
          <span> (var) Certificates</span>
        </div>

        <div className='flex flex-warp justify-center items-center'>
          real certificates
        </div>
      </div>

    </div>
  )
}

export default UniversityDashboard