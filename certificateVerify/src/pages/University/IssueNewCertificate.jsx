import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function IssueNewCertificate() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
            certificateId:"",
            studentName:"",
            courseName:"",
            issueDate:"",
            studentAddress:""
  });

  function handleChange(e){
    setForm({ ...form , [e.target.name]: e.target.value });
  }

async function handelSubmitForm(event){
  event.preventDefault();

  try {
    const contract = await getContract();

    if(!contract){
      console.log("no contract babess !!");
      return;
    }

    const tx = await contract.issueCertificate( form.certificateId,
                                                form.studentName,
                                                form.courseName,
                                                form.issueDate,
                                                form.studentAddress
    );

    await tx.wait();

    alert(" Certificate Issued Sucessfully !!");
  } 
  
  catch (error) {
    console.error("form not submitted !!",error);
    alert("Failed to Issue Certificate !");
  }
}

  return (
    <>
          <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
            <button onClick={()=>navigate("/UniversityDashboard")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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
              <span>Back To University DashBoard</span>
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
    
          <div className='flex flex-warp flex-col bg-neutral-50 max-w-2xl mx-auto my-auto mt-15 rounded-2xl p-4'>
            <div className='flex flex-warp items-center gap-2 text-2xl ml-5'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6 ml-3">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            <span className='ml-2'>Issue new Certifiacte</span>
            </div>
            
            <form onSubmit={handelSubmitForm}>
                  <div className='flex flex-col w-xl mt-3'>

                    <div className='p-3 flex flex-col w-full'>
                      <label htmlFor="certificateId" className='text-lg ml-4 mb-2'>Certificate Id</label>
                      <input type="text" name="certificateId" onChange={handleChange} value={form.certificateId} placeholder='Enter the Certificate Id * ({UNI-CODE} - {YEAR} - {ROLLNO} - {COURSE})' className='ml-4 border-1 border-neutral-300 bg-neutral-100 rounded-lg p-3 w-full outline-none hover:bg-white'/>
                    </div>

                    <div className='p-3 flex flex-col'>
                      <label htmlFor="studentName" className='text-lg ml-4 mb-2'>Student Name</label>
                    <input type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder='Student Name *' className='ml-4 border rounded-lg p-3 w-full border-neutral-300 bg-neutral-2100 outline-none hover:bg-white'/>
                    </div>

                    <div className='p-3 flex flex-col'>
                      <label htmlFor="courseName" className='text-lg ml-4 mb-2'>Course Name</label>
                    <input type="text" name="courseName" value={form.courseName} onChange={handleChange} placeholder='Course Name *' className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 outline-none hover:bg-white'/>
                    </div>

                    <div className='p-3 flex flex-col'>
                      <label htmlFor="issueDate" className='text-lg ml-4 mb-2'>Issue Date</label>
                    <input type="date" name="issueDate" value={form.issueDate} onChange={handleChange} placeholder='Issue Date * [dd-mm-yyyy]' className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 hover:bg-white outline-none'/>
                    </div>

                    <div className='p-3 flex flex-col'>
                      <label htmlFor="studentAddress" className='text-lg ml-4 mb-2'>Student's Address</label>
                    <input type="text" name="studentAddress" value={form.studentAddress} onChange={handleChange} placeholder='enter the student address (eg.0xA1213....) *' className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 hover:bg-white outline-none'/>
                    </div>

                    <div className='text-center mt-6 mb-3 flex flex-row justify-center items-center '>
                      <button className='text-white bg-blue-500 p-3 rounded-full hover:bg-blue-300 cursor-pointer flex items-center justify-center ml-10 w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke-width="1.5" 
                          stroke="currentColor" 
                          class="size-6">
                          <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                        <p className='ml-2 text-shadow-md'>Issue Certificate</p></button>
                    </div>

                  </div>
            </form>
          </div>
</>
  )
}

export default IssueNewCertificate





// certificateId,
//         string memory _studentName,
//         string memory _courseName,
//         string memory _issueDate