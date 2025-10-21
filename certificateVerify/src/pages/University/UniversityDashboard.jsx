import React from 'react'
import { useNavigate } from 'react-router'

function UniversityDashboard() {

  const navigate = useNavigate(); 


  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
            <button onClick={()=>navigate("/")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="mr-3 size-5">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span>Back To Home</span>
            </button> 
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="mr-7 size-7">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
      </div>

  
    <div className='flex justify-center w-full min-h-screen '>

        <div className='flex flex-col items-start w-full max-w-7xl'>
          <div className='flex justify-start items-center p-5 w-full'>
             <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className ="size-12 bg-[hsl(162,46%,89%)] text-[hsl(161,88%,32%)] p-3 rounded-full">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
                </svg>
              <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>University DashBoard</h1>
          </div>

          <div className='flex justify-start items-center w-full mb-4 mt-2 '>
           <button onClick={()=>navigate("/UniversityDashBoard/IssueNewCertificate")} className='bg-[hsl(216,89%,55%)] p-2 text-center hover:bg-[hsl(216,89%,80%)] rounded-lg flex justify-start ml-5 mt-3 items-center tracking-wide cursor-pointer'>

            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-6 text-white">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
            <span className='ml-2 mr-3 text-white'>Issue New Certificates</span>
           </button>
          </div>

          <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full'>
             <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className ="mt-36 mb-6 size-14 text-neutral-500 ">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
                </svg>
              <p className='mb-2 font-bold text-neutral-700 text-3xl'>Ready to Issue Certificates</p>
              <p className='text-neutral-400 text-lg leading-10 tracking-tight text-balance text-center'> Create blockchain-secured certificates for your students each certificate will be permanently recorded and verifiable.</p>

          </div>
        </div>  
    </div>   
    </> 
  )
}

export default UniversityDashboard