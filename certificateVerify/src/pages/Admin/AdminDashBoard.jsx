import React from 'react'
import { useNavigate } from 'react-router'

function AdminDashBoard() {

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
            className="bg-[hsl(0,100%,86%)] p-3 rounded-4xl size-13 text-[hsl(0,100%,28%)]">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
              <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Admin DashBoard</h1>
          </div>

          <button onClick={()=>navigate('Issuerpage')} className='flex justify-center items-center mb-4 mt-2 ml-4 bg-[hsl(216,89%,55%)] mr-7 px-5 py-1 border border-blue-300 rounded-md text-white text-center hover:bg-[hsl(216,89%,65%)] cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="size-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className='ml-3'>Add Issuer</span>
          </button>

          <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full border-1 border-neutral-200 shadow-md'>
             <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24"
             stroke-width="1.5" 
             stroke="currentColor" 
             className="mt-36 mb-6 size-14 text-neutral-500 ">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>

              <p className='mb-2 font-bold text-neutral-500 text-3xl'>No Issuers Yet</p>
          </div>
        </div>  
    </div>   
    </>   
  )
}

export default AdminDashBoard



