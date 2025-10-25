import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import { getContract } from '../../utils/provider';


function IssuerPage() {


    const [issuerAddress,setIssuerAddress] = useState("");

    const handleAddIssuer = async () =>{
      try{
        const contract = await getContract();

        if(!contract){ 
          console.error("getcontract function didnt work");
        }

        const tx = await contract.authorizeIssuer(issuerAddress);
        await tx.wait();

        alert(" Issuer authorized successfully !!! ");
        setIssuerAddress("");
      }
      catch(error){
        console.log("trasaction failed ! ", error);
      }
    }

    const navigate = useNavigate();
    

    


  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
            <button onClick={()=>navigate("/AdminDashBoard")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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
              <span>Back To Admin DashBoard</span>
            </button> 
              <button className='bg-white hover:bg-neutral-100 p-2 rounded-full cursor-pointer' onClick={() => navigate("/")}>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-7">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </button>
      </div>

  
    <div className='flex justify-center w-full min-h-screen'>

        <div className='flex flex-col items-center w-full max-w-7xl '>
          <div className='flex justify-start items-center p-5 w-full'>
             <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="size-12 bg-[hsl(276,100%,85%)] text-[hsl(291,35%,15%)] p-3 rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

              <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>New Issuer DashBoard</h1>
          </div>

          <div className='flex flex-col items-center bg-white border-1 border-neutral-300 rounded-2xl w-2xl mt-20 p-10 shadow-md shadow-neutral-300'>
            <div className='flex items-center w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6 text-neutral-600">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className='text-neutral-500 font-medium text-lg ml-3'>Add Issuer</span>
            </div>

            <div className='w-full mt-4 text-lg text-neutral-400'>Issuer's Ethereum Address *</div>

            <div className='bg-neutral-200 w-full rounded-2xl hover:bg-neutral-100 mt-4'>
              <input type="text" value={issuerAddress} onChange={(event) => setIssuerAddress(event.target.value)} placeholder='Enter Ethereum Address (eg.0xe1643...)' className='w-full p-4 rounded-2xl outline-none' />
            </div>

            <div className='text-neutral-500 mt-4'>
              <p>Enter the Ethereum Address to make them a valid certificate Issuer.</p>
            </div>

            <div className='w-full rounded-2xl mt-4'>
              <button onClick={handleAddIssuer} className='flex items-center bg-[hsl(216,89%,55%)] w-full rounded-xl justify-center p-3 text-white text-shadow-md hover:bg-[hsl(216,89%,80%)] cursor-pointer '>
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
                <div className='font-medium text-lg ml-2'>Add Issuer</div>
              </button>
            </div>
          </div>
        </div>
    </div>   
    </> 
  )
}



export default IssuerPage





// import { useState } from "react";
// import { getContract } from "../provider";   // your provider.js

// function IssuerPage() {
//   const [issuerAddress, setIssuerAddress] = useState("");

//   async function handleAddIssuer(){
//     try {
//       const contract = await getContract();
//       if(!contract) return;

//       const tx = await contract.authorizeIssuer(issuerAddress);
//       await tx.wait();    // wait for block confirmation

//       alert("Issuer Added Successfully ✅");

//     } catch(err){
//       console.log(err);
//       alert("Transaction Failed ❌");
//     }
//   }

//   return (
//     <>
//       {/* your UI ... */}
//       <input 
//         type="text"
//         placeholder="Enter Ethereum Address"
//         onChange={(e)=>setIssuerAddress(e.target.value)}
//       />

//       <button onClick={handleAddIssuer}>Add Issuer</button>
//     </>
//   )
// }




// const isIssuer = await contract.authorizedIssuers(address); I can access this from my front-end because this authoried issuer is stored in the blockchain 
