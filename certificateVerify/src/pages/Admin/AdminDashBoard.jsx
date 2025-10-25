import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function AdminDashBoard() {
  const [issuers, setIssuers] = useState([]);
  const [issuersStatus, setIssuersStatus] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchIssuers();
  }, []);

  // ✅ NEW: Use getIssuersWithStatus() instead of events
  useEffect(() => {
    fetchIssuers();
  }, []);

  // ✅ NEW: Use getIssuersWithStatus() instead of events
  const fetchIssuers = async () => {
    try {
      // setIsLoading(true);
      const contract = await getContract();
      
      if (!contract) {
        console.error("Contract not available");
        return;
      }

      // ✅ Use the new function from your contract
      const [addresses, statuses] = await contract.getIssuersWithStatus();
      
      setIssuers(addresses);
      setIssuersStatus(statuses);

    } catch (error) {
      console.error("Could not fetch issuers:", error);
    } 
  };

  // ✅ NEW: Function to revoke issuer
  // const handleRevokeIssuer = async (issuerAddress) => {
  //   if (!window.confirm(`Are you sure you want to revoke authorization for ${issuerAddress}?`)) {
  //     return;
  //   }

  //   try {
  //     const contract = await getContract();
  //     if (!contract) return;

  //     const tx = await contract.revokeIssuer(issuerAddress);
  //     await tx.wait();

  //     alert("✅ Issuer revoked successfully!");
      
  //     // Refresh the list
  //     fetchIssuers();

  //   } catch (error) {
  //     console.error("Failed to revoke issuer:", error);
      
  //     if (error.message.includes("Cannot revoke admin")) {
  //       alert("❌ Cannot revoke admin");
  //     } else {
  //       alert(`❌ Failed to revoke issuer: ${error.message}`);
  //     }
  //   }
  // };

  // // ✅ NEW: Function to re-authorize issuer
  // const handleReauthorizeIssuer = async (issuerAddress) => {
  //   try {
  //     const contract = await getContract();
  //     if (!contract) return;

  //     const tx = await contract.authorizeIssuer(issuerAddress);
  //     await tx.wait();

  //     alert("✅ Issuer re-authorized successfully!");
      
  //     // Refresh the list
  //     fetchIssuers();

  //   } catch (error) {
  //     console.error("Failed to re-authorize issuer:", error);
  //     alert(`❌ Failed to re-authorize issuer: ${error.message}`);
  //   }
  // };

  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
        <button 
          onClick={() => navigate("/")} 
          className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="mr-3 size-5">
            <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span>Back To Home</span>
        </button> 
        <button 
          className='bg-white hover:bg-neutral-100 p-2 rounded-full cursor-pointer' 
          onClick={() => navigate("/")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-7">
            <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </button>
      </div>

      <div className='flex justify-center w-full min-h-screen'>
        <div className='flex flex-col items-start w-full max-w-7xl'>
          <div className='flex justify-start items-center p-5 w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="bg-[hsl(0,100%,86%)] p-3 rounded-4xl size-13 text-[hsl(0,100%,28%)]">
              <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Admin DashBoard</h1>
          </div>

          {/* ✅ NEW: Statistics */}
          <div className='flex gap-4 ml-4 mb-4'>
            <div className='bg-white p-4 rounded-lg shadow-md border border-neutral-200'>
              <p className='text-sm text-neutral-500'>Total Issuers</p>
              <p className='text-2xl font-bold text-neutral-700'>{issuers.length}</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('IssuerPage')} 
            className='flex justify-center items-center mb-4 ml-4 bg-[hsl(216,89%,55%)] mr-7 px-5 py-2 border border-blue-300 rounded-md text-white text-center hover:bg-[hsl(216,89%,65%)] cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className='ml-3'>Add Issuer</span>
          </button>

          {/* ✅ Loading State */}
          {issuers.length === 0 ? (
            <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full border-1 border-neutral-200 shadow-md'>
              <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="mt-36 mb-6 size-14 text-neutral-500">
                <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              <p className='mb-2 font-bold text-neutral-500 text-3xl'>No Issuers Yet</p>
            </div>
          ) : (
            // ✅ IMPROVED: Show issuers with status and actions
            <div className='bg-neutral-50 w-full mt-2 rounded-xl border-1 border-neutral-200 shadow-md pb-8'>
              <div className="p-6">
                <h2 className='text-xl font-bold text-neutral-700 mb-4'>Authorized Issuers</h2>
                <div className="space-y-3">
                  {issuers.map((issuer, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all
                        ${issuersStatus[index] 
                          ? 'bg-green-50 border-green-200 hover:bg-green-100 cursor-pointer ' 
                          : 'bg-red-50 border-red-200 hover:bg-red-100'
                        }`}
                    >
                      {/* Left: Address and Status */}
                      <div className='flex items-center gap-3 flex-1'>
                        <div className='flex flex-col'>
                          <span className='font-mono text-md text-neutral-700 font-semibold'>
                            {issuer}
                          </span>
                        </div>
                      </div>

                      {/* Right: Action Buttons */}
                      {/* <div className='flex gap-2'>
                        {issuersStatus[index] ? (
                          <button
                            onClick={() => handleRevokeIssuer(issuer)}
                            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold cursor-pointer'
                          >
                            Revoke
                          </button>
                        ) : (
                          <button
                            onClick={() => handleReauthorizeIssuer(issuer)}
                            className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold cursor-pointer'
                          >
                            Re-authorize
                          </button>
                        )}
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>  
      </div>   
    </>   
  );
}

export default AdminDashBoard;



// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import { getContract } from '../../utils/provider';

// function AdminDashBoard() {
//   const [issuers, setIssuers] = useState([]);
//   const [issuersStatus, setIssuersStatus] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchIssuers();
//   }, []);

//   // ✅ NEW: Use getIssuersWithStatus() instead of events
//   const fetchIssuers = async () => {
//     try {
//       setIsLoading(true);
//       const contract = await getContract();
      
//       if (!contract) {
//         console.error("Contract not available");
//         return;
//       }

//       // ✅ Use the new function from your contract
//       const [addresses, statuses] = await contract.getIssuersWithStatus();
      
//       setIssuers(addresses);
//       setIssuersStatus(statuses);

//     } catch (error) {
//       console.error("Could not fetch issuers:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ NEW: Function to revoke issuer
//   const handleRevokeIssuer = async (issuerAddress) => {
//     if (!window.confirm(`Are you sure you want to revoke authorization for ${issuerAddress}?`)) {
//       return;
//     }

//     try {
//       const contract = await getContract();
//       if (!contract) return;

//       const tx = await contract.revokeIssuer(issuerAddress);
//       await tx.wait();

//       alert("✅ Issuer revoked successfully!");
      
//       // Refresh the list
//       fetchIssuers();

//     } catch (error) {
//       console.error("Failed to revoke issuer:", error);
      
//       if (error.message.includes("Cannot revoke admin")) {
//         alert("❌ Cannot revoke admin");
//       } else {
//         alert(`❌ Failed to revoke issuer: ${error.message}`);
//       }
//     }
//   };

//   // ✅ NEW: Function to re-authorize issuer
//   const handleReauthorizeIssuer = async (issuerAddress) => {
//     try {
//       const contract = await getContract();
//       if (!contract) return;

//       const tx = await contract.authorizeIssuer(issuerAddress);
//       await tx.wait();

//       alert("✅ Issuer re-authorized successfully!");
      
//       // Refresh the list
//       fetchIssuers();

//     } catch (error) {
//       console.error("Failed to re-authorize issuer:", error);
//       alert(`❌ Failed to re-authorize issuer: ${error.message}`);
//     }
//   };

//   return (
//     <>
//       <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
//         <button 
//           onClick={() => navigate("/")} 
//           className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth="1.5" 
//             stroke="currentColor" 
//             className="mr-3 size-5">
//             <path strokeLinecap="round" 
//               strokeLinejoin="round" 
//               d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
//           </svg>
//           <span>Back To Home</span>
//         </button> 
//         <button 
//           className='bg-white hover:bg-neutral-100 p-2 rounded-full cursor-pointer' 
//           onClick={() => navigate("/")}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth="1.5" 
//             stroke="currentColor" 
//             className="size-7">
//             <path strokeLinecap="round" 
//               strokeLinejoin="round" 
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//           </svg>
//         </button>
//       </div>

//       <div className='flex justify-center w-full min-h-screen'>
//         <div className='flex flex-col items-start w-full max-w-7xl'>
//           <div className='flex justify-start items-center p-5 w-full'>
//             <svg xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth="1.5" 
//               stroke="currentColor" 
//               className="bg-[hsl(0,100%,86%)] p-3 rounded-4xl size-13 text-[hsl(0,100%,28%)]">
//               <path strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//             </svg>
//             <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Admin DashBoard</h1>
//           </div>

//           {/* ✅ NEW: Statistics */}
//           <div className='flex gap-4 ml-4 mb-4'>
//             <div className='bg-white p-4 rounded-lg shadow-md border border-neutral-200'>
//               <p className='text-sm text-neutral-500'>Total Issuers</p>
//               <p className='text-2xl font-bold text-neutral-700'>{issuers.length}</p>
//             </div>
//             <div className='bg-white p-4 rounded-lg shadow-md border border-neutral-200'>
//               <p className='text-sm text-neutral-500'>Active Issuers</p>
//               <p className='text-2xl font-bold text-green-600'>
//                 {issuersStatus.filter(status => status).length}
//               </p>
//             </div>
//             <div className='bg-white p-4 rounded-lg shadow-md border border-neutral-200'>
//               <p className='text-sm text-neutral-500'>Revoked Issuers</p>
//               <p className='text-2xl font-bold text-red-600'>
//                 {issuersStatus.filter(status => !status).length}
//               </p>
//             </div>
//           </div>

//           <button 
//             onClick={() => navigate('IssuerPage')} 
//             className='flex justify-center items-center mb-4 ml-4 bg-[hsl(216,89%,55%)] mr-7 px-5 py-2 border border-blue-300 rounded-md text-white text-center hover:bg-[hsl(216,89%,65%)] cursor-pointer'
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth="1.5" 
//               stroke="currentColor" 
//               className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//             </svg>
//             <span className='ml-3'>Add Issuer</span>
//           </button>

//           {/* ✅ Loading State */}
//           {issuers.length === 0 ? (
//             <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full border-1 border-neutral-200 shadow-md'>
//               <svg xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5" 
//                 stroke="currentColor" 
//                 className="mt-36 mb-6 size-14 text-neutral-500">
//                 <path strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
//               </svg>
//               <p className='mb-2 font-bold text-neutral-500 text-3xl'>No Issuers Yet</p>
//             </div>
//           ) : (
//             // ✅ IMPROVED: Show issuers with status and actions
//             <div className='bg-neutral-50 w-full mt-2 rounded-xl border-1 border-neutral-200 shadow-md pb-8'>
//               <div className="p-6">
//                 <h2 className='text-xl font-bold text-neutral-700 mb-4'>Authorized Issuers</h2>
//                 <div className="space-y-3">
//                   {issuers.map((issuer, index) => (
//                     <div 
//                       key={index} 
//                       className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all
//                         ${issuersStatus[index] 
//                           ? 'bg-green-50 border-green-200 hover:bg-green-100' 
//                           : 'bg-red-50 border-red-200 hover:bg-red-100'
//                         }`}
//                     >
//                       {/* Left: Address and Status */}
//                       <div className='flex items-center gap-3 flex-1'>
//                         <div className={`w-3 h-3 rounded-full ${issuersStatus[index] ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                         <div className='flex flex-col'>
//                           <span className='font-mono text-sm text-neutral-700 font-semibold'>
//                             {issuer}
//                           </span>
//                           <span className={`text-xs font-semibold ${issuersStatus[index] ? 'text-green-600' : 'text-red-600'}`}>
//                             {issuersStatus[index] ? '✅ Active' : '❌ Revoked'}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Right: Action Buttons */}
//                       <div className='flex gap-2'>
//                         {issuersStatus[index] ? (
//                           <button
//                             onClick={() => handleRevokeIssuer(issuer)}
//                             className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold'
//                           >
//                             Revoke
//                           </button>
//                         ) : (
//                           <button
//                             onClick={() => handleReauthorizeIssuer(issuer)}
//                             className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold'
//                           >
//                             Re-authorize
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>  
//       </div>   
//     </>   
//   );
// }

// export default AdminDashBoard;