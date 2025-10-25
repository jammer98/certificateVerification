import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function VeriferDashboard() {

  const navigate = useNavigate();

    const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setError('');
    setCertificateData(null);

    if (!certificateId) return setError('Please enter a certificate ID');

    try {
      const contract = await getContract();
      if (!contract) return;

      // Call verifyCertificate on the smart contract
      const cert = await contract.verifyCertificate(certificateId);

      setCertificateData({
        studentName: cert[0],
        courseName: cert[1],
        issueDate: cert[2],
        issuer: cert[3],
        student: cert[4],
        isValid: cert[5],
      });
    } catch (err) {
      console.error(err);
      setError('Certificate not found or invalid');
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

          {error && <p className='text-red-500 mt-4 p-3'>{error}</p>}

          {certificateData && (
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 w-full">
            <p><span className="font-semibold">Certificate ID:</span> {certificateId}</p>
            <p><span className="font-semibold">Student Name:</span> {certificateData.studentName}</p>
            <p><span className="font-semibold">Course Name:</span> {certificateData.courseName}</p>
            <p><span className="font-semibold">Issued On:</span> {certificateData.issueDate}</p>
            <p><span className="font-semibold">Issuer:</span> {certificateData.issuer}</p>
            <p><span className="font-semibold">Student Address:</span> {certificateData.student}</p>
            <p>
              <span className="font-semibold">Valid:</span>{" "}
              {certificateData.isValid ? (
                <span className="text-green-500">YES</span>
              ) : (
                <span className="text-red-500">NO</span>
              )}
            </p>
          </div>
        )}

        </div>
    </div>   
    </> 
 )
}

export default VeriferDashboard