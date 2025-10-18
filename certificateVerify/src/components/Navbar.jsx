import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { useNavigate } from 'react-router';

function Navbar({PortalSelectionRef}) {

  const navigate =  useNavigate();

  const [walletAddress,setWalletAddress] = useState(null);
  // const [logindropdown,setLogindropdown] = useState(false);
  // const dropdownRef = useRef(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setWalletAddress(account);
        // 👇 scroll down smoothly to the portal cards section
        PortalSelectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert("Please install MetaMask to continue!");
      }
    } catch (error) {
      console.error("MetaMask connection failed:", error);
    }
  }
 
  // const shortAddress = (address) =>{
  //   address ? "{address.slice(0,6)}...{address.slice(-4)}" : "";
  // }

  // useEffect(()=>{
  //     function handleClickOutside(event){
  //       if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
  //         setLogindropdown(false);
  //       }
  //     }
  //     document.addEventListener("mousedown",handleClickOutside);
  //     return ()=> document.removeEventListener("mousedown",handleClickOutside)
  // },[]);

  return (
    <nav className="top-0 z-50 sticky bg-white shadow-md">
    <Container>
      <div>
        <h1 className='mr-0 text-neutral-900 text-3xl'> CertifyChain </h1>
      </div>
        <div className='flex justify-center gap-8'>
          <div className='flex flex-row justify-center items-center p-2 border border-neutral-200 rounded-xl text-neutral-600 hover:text-neutral-400 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="ml-2 size-5">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" 
          />
          </svg>
          <button onClick={()=>navigate("/LoginPage")}className='ml-3 px-1.5 rounded-xl text-center cursor-pointer'>login</button>
          </div>

          { walletAddress ? (
            <div className='flex justify-center items-center bg-[hsl(102,100%,56%)] p-2 border border-neutral-200 rounded-xl text-white cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-6">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" 
            />
          </svg>
          <span className="ml-3 font-semibold text-sm"> Connected {`${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}`}</span>
          </div>
          ) : 
          (<div className='flex justify-center items-center bg-blue-500 hover:bg-blue-400 text-shadow-lg p-2 border border-neutral-200 rounded-xl text-white cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-6">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" 
            />
          </svg>
          <button onClick={connectWallet} className='ml-3 rounded-xl text-center cursor-pointer'> Connect MetaMask</button>
          </div>) }
        </div>
    </Container>
    </nav>

  )
}

export default Navbar



// import React, { useState, useRef, useEffect } from 'react';
// import Container from './Container';
// import { useNavigate } from 'react-router';

// function Navbar({ PortalSelectionRef }) {
//   const navigate = useNavigate();
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [loginDropdown, setLoginDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const connectWallet = async () => {
//     try {
//       if (window.ethereum) {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const account = accounts[0];
//         setWalletAddress(account);
//         PortalSelectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//       } else {
//         alert("Please install MetaMask to continue!");
//       }
//     } catch (error) {
//       console.error("MetaMask connection failed:", error);
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setLoginDropdown(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="top-0 z-50 sticky bg-white shadow-md">
//       <Container>
//         <div className="flex justify-between items-center">
//           {/* Logo or Title */}
//           <h1 className="font-semibold text-neutral-900 text-3xl">CertifyChain</h1>

//           {/* Right Side Buttons */}
//           <div className="relative flex items-center gap-6" ref={dropdownRef}>
            
//             {/* Login button + dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setLoginDropdown(!loginDropdown)}
//                 className="flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-xl text-neutral-600 hover:text-neutral-400 transition"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="size-5"
//                 >
//                   <path fillRule="evenodd"
//                     d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//                     clipRule="evenodd" />
//                 </svg>
//                 <span className="font-medium">Login</span>
//               </button>

//               {/* Dropdown */}
//               {loginDropdown && (
//                 <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-xl w-44">
//                   <button
//                     onClick={() => navigate('/student-login')}
//                     className="block hover:bg-gray-100 px-4 py-2 w-full text-sm text-left"
//                   >
//                     Student Login
//                   </button>
//                   <button
//                     onClick={() => navigate('/university-login')}
//                     className="block hover:bg-gray-100 px-4 py-2 w-full text-sm text-left"
//                   >
//                     University Login
//                   </button>
//                   <button
//                     onClick={() => navigate('/verifier-login')}
//                     className="block hover:bg-gray-100 px-4 py-2 w-full text-sm text-left"
//                   >
//                     Verifier Login
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MetaMask Connect */}
//             {walletAddress ? (
//               <div className="flex items-center bg-green-500 p-2 border border-neutral-200 rounded-xl text-white cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="size-6">
//                   <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
//                 </svg>
//                 <span className="ml-3 font-semibold text-sm">
//                   {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
//                 </span>
//               </div>
//             ) : (
//               <button
//                 onClick={connectWallet}
//                 className="flex items-center bg-blue-500 hover:bg-blue-400 px-3 py-2 border border-neutral-200 rounded-xl text-white"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="mr-2 size-6">
//                   <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
//                 </svg>
//                 Connect MetaMask
//               </button>
//             )}
//           </div>
//         </div>
//       </Container>
//     </nav>
//   );
// }

// export default Navbar;



