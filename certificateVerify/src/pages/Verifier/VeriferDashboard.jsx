import React from 'react'

function VeriferDashboard() {



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
          class="size-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
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
                class="size-10">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
                />
        </svg>
        </div>
        <div className='flex flex-col flex-warp items-center'>
          <div>verifier Dashboard</div>
          <div>Verifier User(Metamask)</div>
        </div>
        </div>
        <div className='flex flex-warp justify-center items-center'>
          verifier card
        </div>
      </div>

    </div>
  )
}

export default VeriferDashboard