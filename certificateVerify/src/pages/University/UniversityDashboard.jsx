import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ethers } from 'ethers';
import { getContract } from '../../utils/provider';

function UniversityDashboard() {

  const navigate = useNavigate(); 

  const [certificates, setCertificates] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        if (!window.ethereum) {
          console.log("MetaMask not available");
          setLoading(false);
          return;
        }

        // Get provider and signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        
        setCurrentAccount(signerAddress);
        console.log("Fetching certificates for issuer:", signerAddress);

        // Get contract
        const contract = await getContract();
        
        if (!contract) {
          console.log("Contract not available");
          setLoading(false);
          return;
        }

        // Use the dedicated contract function to get certificates by issuer
        const certificatesList = await contract.getCertificatesByIssuer(signerAddress);

        console.log("Raw certificates list:", certificatesList);

        // Convert the result to a plain array of objects
        const certs = certificatesList.map((cert) => ({
          certificateId: cert.certificateId,
          studentName: cert.studentName,
          courseName: cert.courseName,
          issueDate: cert.issueDate,
          student: cert.student,
          issuer: cert.issuer,
          isValid: cert.isValid
        }));

        console.log("Processed certificates:", certs);
          
        setCertificates(certs);
        setLoading(false);
      } 
      catch (error) {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
            <button onClick={()=>navigate("/")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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
             <button className='bg-white hover:bg-neutral-100 p-2 rounded-full cursor-pointer' onClick={() => navigate("/")}>
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

  
    <div className='flex justify-center w-full min-h-screen '>

        <div className='flex flex-col items-start w-full max-w-7xl'>
          <div className='flex justify-start items-center p-5 w-full'>
             <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className ="size-12 bg-[hsl(162,46%,89%)] text-[hsl(161,88%,32%)] p-3 rounded-full">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
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
            className="size-6 text-white">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <span className='ml-2 mr-3 text-white'>Issue New Certificates</span>
           </button>
          </div>


          {loading ? (
            <div className='flex flex-col flex-1 justify-center items-center mt-20 rounded-xl w-full'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4'></div>
              <p className='text-neutral-500'>Loading certificates...</p>
            </div>
          ) : certificates.length === 0 ? (
              <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className ="mt-36 mb-6 size-14 text-neutral-500 ">
                <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
                />
                </svg>
                  <p className='mb-2 font-bold text-neutral-700 text-3xl'>Ready to Issue Certificates</p>
                  <p className='text-neutral-400 text-lg leading-10 tracking-tight text-balance text-center'> Create blockchain-secured certificates for your students each certificate will be permanently recorded and verifiable.</p>
            </div>
            ) : (
          <div className='bg-neutral-100 rounded-xl shadow-lg border border-gray-100 w-full mt-5'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200'>
                  <tr>
                    <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Certificate ID</th>
                    <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Student Name</th>
                    <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Course Name</th>
                    <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Issue Date</th>
                    <th className='px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Student Address</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {certificates.map((cert, idx) => (
                    <tr key={idx} className='hover:bg-gray-50 transition-colors'>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center gap-2'>
                          <div className='p-2 bg-blue-100 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-blue-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                          </div>
                          <span className='text-sm font-medium text-gray-900'>{cert.certificateId}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='text-sm text-gray-900 font-medium'>{cert.studentName}</span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='text-sm text-gray-700'>{cert.courseName}</span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center gap-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                          </svg>
                          <span className='text-sm text-gray-600'>{cert.issueDate}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <code className='px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono text-gray-700'>
                          {cert.student.slice(0, 6)}...{cert.student.slice(-4)}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) }
          
        </div>  
    </div>   
    </> 
  )
}

export default UniversityDashboard;