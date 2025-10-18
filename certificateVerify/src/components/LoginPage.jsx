import React from 'react'

function LoginPage() {
  return (
    <div className='flex flex-warp justify-center items-center w-5xl'>
        <div className='flex flex-col flex-wrap items-center'>
            <div className='flex flex-warp justify-between'>
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
                    <p>Back to Home</p>
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
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col flex-warp justify-center items-center'>
                <button className='bg-white hover:bg-neutral-200 text-neutral-600 text-center'> Student Login </button>
                <button className='bg-white hover:bg-neutral-200 text-neutral-600 text-center'> University Login </button>
                <button className='bg-white hover:bg-neutral-200 text-neutral-600 text-center'> Verifier Login </button>
            </div>
            </div>
    </div>
  )
}

export default LoginPage