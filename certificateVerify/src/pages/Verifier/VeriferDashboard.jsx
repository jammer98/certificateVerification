import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function VeriferDashboard() {

  const navigate = useNavigate();

  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setError('');
    setCertificateData(null);

    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }

    setLoading(true);

    try {
      const contract = await getContract();
      
      if (!contract) {
        setError('Unable to connect to the smart contract');
        setLoading(false);
        return;
      }

      // Call verifyCertificate on the smart contract
      const cert = await contract.verifyCertificate(certificateId);

      // Access properties by name (not array indices)
      setCertificateData({
        certificateId: cert.certificateId,
        studentName: cert.studentName,
        courseName: cert.courseName,
        issueDate: cert.issueDate,
        issuer: cert.issuer,
        student: cert.student,
        isValid: cert.isValid,
      });
      
      setLoading(false);
    } catch (err) {
      console.error("Verification error:", err);
      setError('Certificate not found or invalid. Please check the Certificate ID.');
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

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
                class="size-12 bg-[hsl(272,83%,93%)] text-[hsl(272,81%,54%)] p-3 rounded-full">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
                />
                </svg>
              <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Verifier DashBoard</h1>
          </div>

          <div className='flex flex-col items-center bg-white border-1 border-neutral-300 rounded-2xl w-2xl mt-20 p-10 shadow-md shadow-neutral-300'>
            <div className='flex items-center w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              class="size-6">
              <path fill-rule="evenodd" 
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
            <span className='text-neutral-600 font-medium text-lg ml-3'>Verify Certificate</span>
            </div>

            <div className='w-full mt-4 text-lg text-neutral-600'>Certificate Hash *</div>

            <div className='bg-neutral-200 w-full rounded-2xl hover:bg-neutral-100 mt-4'>
              <input type="text" value={certificateId} onChange={(e) => setCertificateId(e.target.value)} placeholder='Enter certificate ID (eg."AIT-25-7468-RCT")' className='w-full p-4 rounded-2xl outline-none' />
            </div>

            <div className='text-neutral-500 mt-4'>
              <p>Enter the unique certificate hash to verify its authenticity on the blockchain.</p>
            </div>

            <div className='w-full rounded-2xl mt-4'>
              <button onClick={handleVerify} className='flex items-center bg-[hsl(216,89%,55%)] w-full rounded-xl justify-center p-3 text-white text-shadow-md hover:bg-[hsl(216,89%,80%)] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      class="size-6">
                    <path fill-rule="evenodd" 
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                  </svg>
                <div className='font-medium text-lg ml-2'>Verify Certificate</div>
              </button>
            </div>
          </div>

          {error && (
            <div className='mt-6 p-4 bg-red-50 rounded-xl border border-red-200 w-full max-w-3xl'>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <p className='text-red-600 font-medium'>{error}</p>
              </div>
            </div>
          )}

          {certificateData && (
            <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-200 w-full max-w-3xl">
              <div className='flex items-center gap-2 mb-4 pb-4 border-b border-green-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <h3 className='text-xl font-bold text-green-800'>Certificate Verified Successfully</h3>
              </div>
              
              <div className='space-y-3'>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Certificate ID:</span>
                  <span className='text-gray-900'>{certificateData.certificateId}</span>
                </div>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Student Name:</span>
                  <span className='text-gray-900'>{certificateData.studentName}</span>
                </div>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Course Name:</span>
                  <span className='text-gray-900'>{certificateData.courseName}</span>
                </div>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Issued On:</span>
                  <span className='text-gray-900'>{certificateData.issueDate}</span>
                </div>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Issuer:</span>
                  <span className='text-gray-900 font-mono text-sm'>{certificateData.issuer}</span>
                </div>
                <div className='flex'>
                  <span className="font-semibold text-gray-700 w-40">Student Address:</span>
                  <span className='text-gray-900 font-mono text-sm'>{certificateData.student}</span>
                </div>
                <div className='flex items-center'>
                  <span className="font-semibold text-gray-700 w-40">Status:</span>
                  {certificateData.isValid ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                      </svg>
                      Valid Certificate
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM5.47 5.47a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                      Revoked Certificate
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
    </div>   
    </> 
 )
}

export default VeriferDashboard


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
// import { getContract } from '../../utils/provider';

// function VeriferDashboard() {

//   const navigate = useNavigate();

//   const [certificateId, setCertificateId] = useState('');
//   const [certificateData, setCertificateData] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async () => {
//     setError('');
//     setCertificateData(null);

//     if (!certificateId.trim()) {
//       setError('Please enter a certificate ID');
//       return;
//     }

//     setLoading(true);

//     try {
//       const contract = await getContract();
      
//       if (!contract) {
//         setError('Unable to connect to the smart contract');
//         setLoading(false);
//         return;
//       }

//       // Call verifyCertificate on the smart contract
//       const cert = await contract.verifyCertificate(certificateId);

//       // Access properties by name (not array indices)
//       setCertificateData({
//         certificateId: cert.certificateId,
//         studentName: cert.studentName,
//         courseName: cert.courseName,
//         issueDate: cert.issueDate,
//         issuer: cert.issuer,
//         student: cert.student,
//         isValid: cert.isValid,
//       });
      
//       setLoading(false);
//     } catch (err) {
//       console.error("Verification error:", err);
//       setError('Certificate not found or invalid. Please check the Certificate ID.');
//       setLoading(false);
//     }
//   };

//   // Handle Enter key press
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleVerify();
//     }
//   };

//   return (
//     <>
//       <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
//         <button onClick={() => navigate("/")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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
//         <button className='bg-white hover:bg-neutral-100 p-2 rounded-full cursor-pointer' onClick={() => navigate("/")}>
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
//         <div className='flex flex-col items-center w-full max-w-7xl'>
//           <div className='flex justify-start items-center p-5 w-full'>
//             <svg xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth="1.5" 
//               stroke="currentColor" 
//               className="size-12 bg-[hsl(272,83%,93%)] text-[hsl(272,81%,54%)] p-3 rounded-full">
//               <path strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" 
//               />
//             </svg>
//             <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Verifier DashBoard</h1>
//           </div>

//           <div className='flex flex-col items-center bg-white border-1 border-neutral-300 rounded-2xl w-2xl mt-20 p-10 shadow-md shadow-neutral-300'>
//             <div className='flex items-center w-full'>
//               <svg xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor" 
//                 className="size-6">
//                 <path fillRule="evenodd" 
//                   d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
//               </svg>
//               <span className='text-neutral-600 font-medium text-lg ml-3'>Verify Certificate</span>
//             </div>

//             <div className='w-full mt-4 text-lg text-neutral-600'>Certificate ID *</div>

//             <div className='bg-neutral-200 w-full rounded-2xl hover:bg-neutral-100 mt-4'>
//               <input 
//                 type="text" 
//                 value={certificateId} 
//                 onChange={(e) => setCertificateId(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder='Enter certificate ID (e.g., "VIT-2024-21BCE0001-CSE")' 
//                 className='w-full p-4 rounded-2xl outline-none bg-transparent' 
//               />
//             </div>

//             <div className='text-neutral-500 mt-4'>
//               <p>Enter the unique certificate ID to verify its authenticity on the blockchain.</p>
//             </div>

//             <div className='w-full rounded-2xl mt-4'>
//               <button 
//                 onClick={handleVerify} 
//                 disabled={loading}
//                 className='flex items-center bg-[hsl(216,89%,55%)] w-full rounded-xl justify-center p-3 text-white text-shadow-md hover:bg-[hsl(216,89%,80%)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
//               >
//                 {loading ? (
//                   <>
//                     <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
//                     <span className='font-medium text-lg'>Verifying...</span>
//                   </>
//                 ) : (
//                   <>
//                     <svg xmlns="http://www.w3.org/2000/svg" 
//                       viewBox="0 0 24 24" 
//                       fill="currentColor" 
//                       className="size-6">
//                       <path fillRule="evenodd" 
//                         d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
//                     </svg>
//                     <div className='font-medium text-lg ml-2'>Verify Certificate</div>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {error && (
//             <div className='mt-6 p-4 bg-red-50 rounded-xl border border-red-200 w-full max-w-3xl'>
//               <div className='flex items-center gap-2'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-500">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
//                 </svg>
//                 <p className='text-red-600 font-medium'>{error}</p>
//               </div>
//             </div>
//           )}

//           {certificateData && (
//             <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-200 w-full max-w-3xl">
//               <div className='flex items-center gap-2 mb-4 pb-4 border-b border-green-200'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
//                 </svg>
//                 <h3 className='text-xl font-bold text-green-800'>Certificate Verified Successfully</h3>
//               </div>
              
//               <div className='space-y-3'>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Certificate ID:</span>
//                   <span className='text-gray-900'>{certificateData.certificateId}</span>
//                 </div>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Student Name:</span>
//                   <span className='text-gray-900'>{certificateData.studentName}</span>
//                 </div>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Course Name:</span>
//                   <span className='text-gray-900'>{certificateData.courseName}</span>
//                 </div>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Issued On:</span>
//                   <span className='text-gray-900'>{certificateData.issueDate}</span>
//                 </div>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Issuer:</span>
//                   <span className='text-gray-900 font-mono text-sm'>{certificateData.issuer}</span>
//                 </div>
//                 <div className='flex'>
//                   <span className="font-semibold text-gray-700 w-40">Student Address:</span>
//                   <span className='text-gray-900 font-mono text-sm'>{certificateData.student}</span>
//                 </div>
//                 <div className='flex items-center'>
//                   <span className="font-semibold text-gray-700 w-40">Status:</span>
//                   {certificateData.isValid ? (
//                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
//                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
//                       </svg>
//                       Valid Certificate
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
//                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM5.47 5.47a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//                       </svg>
//                       Revoked Certificate
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//         </div>
//     </div>   
//     </> 
//   )
// }

// export default VeriferDashboard