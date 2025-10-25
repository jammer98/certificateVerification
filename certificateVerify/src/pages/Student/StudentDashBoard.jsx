import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function StudentDashBoard() {

  const navigate = useNavigate();

  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const contract = await getContract();
        
        if (!contract) {
          console.log("Contract not available");
          setLoading(false);
          return;
        }

        // Get current student address
        const studentAddress = await contract.runner?.getAddress();
        if (!studentAddress) {
          console.error("No wallet connected");
          setLoading(false);
          return;
        }

        // Use the dedicated contract function to get certificates by student
        const certificatesList = await contract.getCertificatesByStudent(studentAddress);

        // Convert the result to a plain array of objects
        const certs = certificatesList.map((cert) => ({
          certificateId: cert.certificateId,
          studentName: cert.studentName,
          courseName: cert.courseName,
          issueDate: cert.issueDate,
          issuer: cert.issuer,
          student: cert.student,
          isValid: cert.isValid
        }));

        setCertificates(certs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);
  
  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
        <button onClick={() => navigate("/")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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

      <div className='flex justify-center w-full min-h-screen'>
        <div className='flex flex-col items-start w-full max-w-7xl'>
          <div className='flex justify-start items-center p-5 w-full'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-[hsl(205,100%,94%)] p-3 rounded-4xl size-12 text-[hsl(205,75%,48%)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <h1 className='ml-4 font-bold text-neutral-700 text-2xl'>Student DashBoard</h1>
          </div>

          <div className='flex justify-between items-center w-full mb-4 mt-2'>
            <div className='ml-5 font-medium text-neutral-600 text-xl'>My Certificates</div>
            <div className='bg-[hsl(216,89%,55%)] mr-7 px-5 py-1 border border-blue-300 rounded-md text-white text-center'>{`${certificates.length}`} Certificates</div>
          </div>

          {loading ? (
            <div className='flex flex-col flex-1 justify-center items-center mt-2 rounded-xl w-full border-1 border-neutral-200 shadow-md py-20'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4'></div>
              <p className='text-neutral-500'>Loading certificates...</p>
            </div>
          ) : certificates.length === 0 ? (
            <div className='flex flex-col flex-1 justify-start items-center mt-2 rounded-xl w-full border-1 border-neutral-200 shadow-md'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-36 mb-6 size-14 text-neutral-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <p className='mb-2 font-bold text-neutral-700 text-3xl'>No Certificates Yet</p>
              <p className='text-neutral-400 text-lg leading-10 tracking-tight'>Your academic certificates will appear here once they are issued by your institutions.</p>
            </div>
          ) : (
            <table className='w-full border border-gray-300 rounded-lg'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='border p-2'>Certificate ID</th>
                  <th className='border p-2'>Course Name</th>
                  <th className='border p-2'>Issue Date</th>
                  <th className='border p-2'>Issuer Address</th>
                  <th className='border p-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert, idx) => (
                  <tr key={idx} className='hover:bg-gray-50'>
                    <td className='border p-2'>{cert.certificateId}</td>
                    <td className='border p-2'>{cert.courseName}</td>
                    <td className='border p-2'>{cert.issueDate}</td>
                    <td className='border p-2 font-mono text-sm'>{cert.issuer.slice(0, 6)}...{cert.issuer.slice(-4)}</td>
                    <td className='border p-2'>
                      {cert.isValid ? (
                        <span className='text-green-500 font-semibold'>✓ Valid</span>
                      ) : (
                        <span className='text-red-500 font-semibold'>✗ Revoked</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>  
      </div>   
    </>   
  )
}

export default StudentDashBoard