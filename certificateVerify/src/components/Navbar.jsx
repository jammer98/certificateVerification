import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { useNavigate } from 'react-router';
import { useAccountContext } from '../Context/AccountContext';
 
function Navbar({PortalSelectionRef}) {

  const navigate =  useNavigate(); 

  const {walletAddress,connectWallet} = useAccountContext();
  
  // const [logindropdown,setLogindropdown] = useState(false);
  // const dropdownRef = useRef(null);
  const adminWalletAddress = "0x73E3893a007022500df2a1674e988a592b7aA23F";

  // const connectWallet = async () => {
  //   try {
  //     if (window.ethereum) {
  //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       const account = accounts[0];
  //       setWalletAddress(account);
  //       // 👇 scroll down smoothly to the portal cards section
  //       PortalSelectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  //     } else {
  //       alert("Please install MetaMask to continue!");
  //     }
  //   } catch (error) {
  //     console.error("MetaMask connection failed:", error);
  //   }
  // }


  // const disconnectWallet = () => {
  //   setWalletAddress(null);
  // }


// useEffect(() => {
//   async function checkConnection() {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//       if (accounts.length > 0) {
//         setWalletAddress(accounts[0]);
//       }
//     }
//   }
//   checkConnection();

//   // Listen for change
//   window.ethereum?.on("accountsChanged", (accounts) => {
//     if (accounts.length > 0) {
//       setWalletAddress(accounts[0]);
//     } else {
//       setWalletAddress(null);
//     }
//   });
// }, []);



 
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
        <button onClick={()=> navigate("/")} className='mr-0 text-neutral-900 text-3xl hover:text-neutral-700'> Certify-Chain </button>
      </div>
        <div className='flex justify-center gap-8'>
          <div className='flex flex-row justify-center items-center p-2 border border-neutral-200 rounded-xl text-neutral-600 hover:text-neutral-400 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5"
              stroke="currentColor" 
              class="size-6">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              <button onClick={()=> { 
                                    if(!walletAddress){
                                        alert("Please connect MetaMask wallet first");
                                        return;    
                                    } 
                                    if(walletAddress.toLowerCase() === adminWalletAddress.toLowerCase()){
                                        navigate("/AdminDashBoard")
                                    }
                                    else{
                                        alert("Not authorized !! Only Admin can access this page");
                                    }
                                      }
                                }
                                className='ml-3 px-1.5 rounded-xl text-center cursor-pointer'>
              Admin 
              </button>
            </div> 
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