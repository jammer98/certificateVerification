
import React, { forwardRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAccountContext } from '../Context/AccountContext';
import { getContract } from '../utils/provider';

const AccessPortal = forwardRef((prop, ref) => {
    const navigate = useNavigate();
    const { walletAddress } = useAccountContext();
    const [isAuthorizedIssuer, setIsAuthorizedIssuer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        checkAuthorization();
    }, [walletAddress]);

    const checkAuthorization = async () => {
        if (!walletAddress) {
            setIsAuthorizedIssuer(false);
            setIsAdmin(false);
            return;
        }

        try {
            const contract = await getContract();
            if (!contract) return;

            // Check if user is authorized issuer
            const authorized = await contract.authorizedIssuers(walletAddress);
            setIsAuthorizedIssuer(authorized);

            // Check if user is admin
            const adminAddress = await contract.admin();
            setIsAdmin(walletAddress.toLowerCase() === adminAddress.toLowerCase());

        } catch (error) {
            console.error("Error checking authorization:", error);
            setIsAuthorizedIssuer(false);
            setIsAdmin(false);
        }
    };

    const handleUniversityPortalClick = () => {
        if (!walletAddress) {
            alert("Please Connect to Metamask !!");
            return;
        }

        if (!isAuthorizedIssuer) {
            alert("❌ Access Denied: You are not an authorized issuer. Please contact the admin for authorization.");
            return;
        }

        navigate("/UniversityDashBoard");
    };

    const handleAdminPortalClick = () => {
        if (!walletAddress) {
            alert("Please Connect to Metamask !!");
            return;
        }

        if (!isAdmin) {
            alert("❌ Access Denied: Only the admin can access this portal.");
            return;
        }

        navigate("/AdminDashBoard");
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-20 p-5 '>
                <div className='font-semibold text-neutral-700 text-4xl'>Choose Your Access Portal</div>
                <p className='mx-auto p-4 max-w-3xl text-gray-600 text-lg text-center leading-relaxed'>
                    Select your role to access the appropriate features and functionality
                </p>
            </div>
            <div ref={ref} className='flex flex-row justify-center items-center gap-30 mx-auto mt-10 mb-40 max-w-6xl'>

                {/* Student Portal */}
                <div className='shadow-lg hover:shadow-2xl p-6 border border-neutral-200 rounded-xl w-80 transition'>
                    <div className="flex justify-center mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-25 bg-[hsl(205,100%,86%)] p-5 rounded-full"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                        </svg>
                    </div>
                    <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>Student portal</div>
                    <h1 className='mt-3 p-2 text-neutral-900 text-center'>Access and share your verified academic certificates</h1>
                    <button 
                        onClick={() => {
                            if (!walletAddress) {
                                alert("Please Connect to Metamask !!");
                            } else {
                                navigate("/StudentDashBoard");
                            }
                        }}
                        className='bg-sky-500 hover:bg-sky-300 px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer'
                    >
                        Access Portal
                    </button>
                </div>

                {/* University Portal - With Authorization Check */}
                <div className={`shadow-lg hover:shadow-2xl p-6 border rounded-xl w-80 transition ${
                    walletAddress && !isAuthorizedIssuer ? 'border-red-300 opacity-75' : 'border-neutral-200'
                }`}>
                    <div className="flex justify-center mb-3">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-25 bg-[hsl(162,46%,89%)] text-[hsl(161,88%,32%)] p-5 rounded-full"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                            />
                        </svg>
                    </div>
                    <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>University portal</div>
                    <h1 className='mt-3 p-2 text-neutral-900 text-center'>Issue and manage blockchain-secured certificates</h1>
                    
                    {/* Authorization Status Indicator */}
                    {walletAddress && (
                        <div className={`text-xs text-center mb-2 font-semibold ${
                            isAuthorizedIssuer ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {isAuthorizedIssuer ? '✅ Authorized Issuer' : '🔒 Authorization Required'}
                        </div>
                    )}
                    
                    <button 
                        onClick={handleUniversityPortalClick}
                        className={`px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer ${
                            walletAddress && !isAuthorizedIssuer 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-sky-500 hover:bg-sky-300'
                        }`}
                    >
                        Access Portal
                    </button>
                </div>

                {/* Verifier Portal */}
                <div className='shadow-lg hover:shadow-2xl p-6 border border-neutral-200 rounded-xl w-80 transition'>
                    <div className="flex justify-center mb-3"> 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-25 bg-[hsl(272,83%,93%)] text-[hsl(272,81%,54%)] p-5 rounded-full"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
                            />
                        </svg>
                    </div>
                    <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>Verifier portal</div>
                    <h1 className='mt-3 p-2 text-neutral-900 text-center'>Instantly verify the authenticity of certificates</h1>
                    <button 
                        onClick={() => {
                            if (!walletAddress) {
                                alert("Please Connect to Metamask !!");
                            } else {
                                navigate("/VeriferDashBoard");
                            }
                        }} 
                        className='bg-sky-500 hover:bg-sky-300 px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer'
                    >
                        Access Portal
                    </button>
                </div>
            </div>
        </>
    )
})

export default AccessPortal;






// import React, { forwardRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import { useAccountContext } from '../Context/AccountContext';
// import { getContract } from '../utils/provider';

// const AccessPortal = forwardRef((prop, ref) => {
//     const navigate = useNavigate();
//     const { walletAddress } = useAccountContext();
//     const [isAuthorizedIssuer, setIsAuthorizedIssuer] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         checkAuthorization();
//     }, [walletAddress]);

//     const checkAuthorization = async () => {
//         if (!walletAddress) {
//             setIsAuthorizedIssuer(false);
//             setIsAdmin(false);
//             return;
//         }

//         try {
//             const contract = await getContract();
//             if (!contract) return;

//             // Check if user is authorized issuer
//             const authorized = await contract.authorizedIssuers(walletAddress);
//             setIsAuthorizedIssuer(authorized);

//             // Check if user is admin
//             const adminAddress = await contract.admin();
//             setIsAdmin(walletAddress.toLowerCase() === adminAddress.toLowerCase());

//         } catch (error) {
//             console.error("Error checking authorization:", error);
//             setIsAuthorizedIssuer(false);
//             setIsAdmin(false);
//         }
//     };

//     const handleUniversityPortalClick = () => {
//         if (!walletAddress) {
//             alert("Please Connect to Metamask !!");
//             return;
//         }

//         if (!isAuthorizedIssuer) {
//             alert("❌ Access Denied: You are not an authorized issuer. Please contact the admin for authorization.");
//             return;
//         }

//         navigate("/UniversityDashBoard");
//     };

//     const handleAdminPortalClick = () => {
//         if (!walletAddress) {
//             alert("Please Connect to Metamask !!");
//             return;
//         }

//         if (!isAdmin) {
//             alert("❌ Access Denied: Only the admin can access this portal.");
//             return;
//         }

//         navigate("/AdminDashBoard");
//     };

//     return (
//         <>
//             <div className='flex flex-col justify-center items-center mt-20 p-5 '>
//                 <div className='font-semibold text-neutral-700 text-4xl'>Choose Your Access Portal</div>
//                 <p className='mx-auto p-4 max-w-3xl text-gray-600 text-lg text-center leading-relaxed'>
//                     Select your role to access the appropriate features and functionality
//                 </p>
//             </div>
//             <div ref={ref} className='flex flex-row justify-center items-center gap-30 mx-auto mt-10 mb-40 max-w-6xl'>

//                 {/* Student Portal */}
//                 <div className='shadow-lg hover:shadow-2xl p-6 border border-neutral-200 rounded-xl w-80 transition'>
//                     <div className="flex justify-center mb-3">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="size-25 bg-[hsl(205,100%,86%)] p-5 rounded-full"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
//                             />
//                         </svg>
//                     </div>
//                     <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>Student portal</div>
//                     <h1 className='mt-3 p-2 text-neutral-900 text-center'>Access and share your verified academic certificates</h1>
//                     <button 
//                         onClick={() => {
//                             if (!walletAddress) {
//                                 alert("Please Connect to Metamask !!");
//                             } else {
//                                 navigate("/StudentDashBoard");
//                             }
//                         }}
//                         className='bg-sky-500 hover:bg-sky-300 px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer'
//                     >
//                         Access Portal
//                     </button>
//                 </div>

//                 {/* University Portal - With Authorization Check */}
//                 <div className={`shadow-lg hover:shadow-2xl p-6 border rounded-xl w-80 transition ${
//                     walletAddress && !isAuthorizedIssuer ? 'border-red-300 opacity-75' : 'border-neutral-200'
//                 }`}>
//                     <div className="flex justify-center mb-3">
//                         <svg 
//                             xmlns="http://www.w3.org/2000/svg" 
//                             fill="none" 
//                             viewBox="0 0 24 24" 
//                             strokeWidth="1.5" 
//                             stroke="currentColor" 
//                             className="size-25 bg-[hsl(162,46%,89%)] text-[hsl(161,88%,32%)] p-5 rounded-full"
//                         >
//                             <path 
//                                 strokeLinecap="round" 
//                                 strokeLinejoin="round" 
//                                 d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
//                             />
//                         </svg>
//                     </div>
//                     <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>University portal</div>
//                     <h1 className='mt-3 p-2 text-neutral-900 text-center'>Issue and manage blockchain-secured certificates</h1>
                    
//                     {/* Authorization Status Indicator */}
//                     {walletAddress && (
//                         <div className={`text-xs text-center mb-2 font-semibold ${
//                             isAuthorizedIssuer ? 'text-green-600' : 'text-red-600'
//                         }`}>
//                             {isAuthorizedIssuer ? '✅ Authorized Issuer' : '🔒 Authorization Required'}
//                         </div>
//                     )}
                    
//                     <button 
//                         onClick={handleUniversityPortalClick}
//                         className={`px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer ${
//                             walletAddress && !isAuthorizedIssuer 
//                                 ? 'bg-gray-400 cursor-not-allowed' 
//                                 : 'bg-sky-500 hover:bg-sky-300'
//                         }`}
//                     >
//                         Access Portal
//                     </button>
//                 </div>

//                 {/* Verifier Portal */}
//                 <div className='shadow-lg hover:shadow-2xl p-6 border border-neutral-200 rounded-xl w-80 transition'>
//                     <div className="flex justify-center mb-3"> 
//                         <svg 
//                             xmlns="http://www.w3.org/2000/svg" 
//                             fill="none" 
//                             viewBox="0 0 24 24" 
//                             strokeWidth="1.5" 
//                             stroke="currentColor" 
//                             className="size-25 bg-[hsl(272,83%,93%)] text-[hsl(272,81%,54%)] p-5 rounded-full"
//                         >
//                             <path 
//                                 strokeLinecap="round" 
//                                 strokeLinejoin="round" 
//                                 d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
//                             />
//                         </svg>
//                     </div>
//                     <div className='p-2 font-semibold text-neutral-700 text-lg text-center'>Verifier portal</div>
//                     <h1 className='mt-3 p-2 text-neutral-900 text-center'>Instantly verify the authenticity of certificates</h1>
//                     <button 
//                         onClick={() => {
//                             if (!walletAddress) {
//                                 alert("Please Connect to Metamask !!");
//                             } else {
//                                 navigate("/VeriferDashBoard");
//                             }
//                         }} 
//                         className='bg-sky-500 hover:bg-sky-300 px-5 py-2 rounded-lg w-full text-white text-center cursor-pointer'
//                     >
//                         Access Portal
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// })

// export default AccessPortal;
