import React from 'react'
import { useNavigate } from 'react-router'

function LoginPage() {


    const navigate= useNavigate();



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

    <div className='flex justify-center items-center min-h-screen text-2xl'>
      <div className='max-w-4xl mx-auto my-auto text-center flex-1 rounded-lg p-6 font-bold text-4xl mt-4'>
        Role-Based Login
        <div className='flex flex-warp items-center flex-col mt-10 gap-6 '>
            <button className='w-full bg-blue-200 max-w-md rounded-lg p-7 flex justify-center items-center hover:bg-blue-400 cursor-pointer'>
                <div className='flex justify-center items-center gap-8'>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="bg-[hsl(205,100%,94%)] p-3 rounded-4xl size-15 text-[hsl(205,75%,48%)]"
                >
             <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
              </svg>
              <span className='text-2xl font-bold'>Student Login</span>
                </div>
            </button>
           <button className='w-full bg-blue-200 max-w-md rounded-lg p-7 flex justify-center items-center hover:bg-blue-400 cursor-pointer'>
                <div className='flex justify-center items-center gap-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className ="size-15 bg-[hsl(162,46%,89%)] text-[hsl(161,88%,32%)] p-3 rounded-full">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
                </svg>
              <span className='text-2xl font-bold'>University Login</span>
                </div>
            </button>
            <button className='w-full bg-blue-200 max-w-md rounded-lg p-7 flex justify-center items-center hover:bg-blue-400 cursor-pointer'>
                <div className='flex justify-center items-center gap-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="size-15 bg-[hsl(272,83%,93%)] text-[hsl(272,81%,54%)] p-3 rounded-full ">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
                />
                </svg>
              <span className='text-2xl font-bold'>Verifier Login</span>
                </div>
            </button>
        </div>
      </div>
    </div>
    </>   
  )
}

export default LoginPage