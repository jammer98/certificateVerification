import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { getContract } from '../../utils/provider';

function IssueNewCertificate() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    certificateId: "",
    studentName: "",
    courseName: "",
    issueDate: "",
    studentAddress: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateCertificateIdFormat(id) {
    // Example format: VIT-2024-21BCE0001-CSE
    const pattern = /^[A-Z]+-\d{4}-[A-Z0-9]+-[A-Z]+$/;
    return pattern.test(id);
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // Returns DD/MM/YYYY
  }

  async function handleSubmitForm(event) {
    event.preventDefault();

    // Frontend validation
    if (!form.certificateId.trim()) {
      alert("Certificate ID is required!");
      return;
    }

    if (!validateCertificateIdFormat(form.certificateId)) {
      alert("Invalid Certificate ID format! Use format: UNI-YEAR-ROLLNO-COURSE (e.g., VIT-2024-21BCE0001-CSE)");
      return;
    }

    if (!form.studentName.trim()) {
      alert("Student name is required!");
      return;
    }

    if (!form.courseName.trim()) {
      alert("Course name is required!");
      return;
    }

    if (!form.issueDate) {
      alert("Issue date is required!");
      return;
    }

    if (!form.studentAddress.trim()) {
      alert("Student address is required!");
      return;
    }

    // Validate Ethereum address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(form.studentAddress)) {
      alert("Invalid Ethereum address format! Address must start with 0x followed by 40 hexadecimal characters.");
      return;
    }

    try {
      const contract = await getContract();

      if (!contract) {
        console.log("Contract not found!");
        alert("Unable to connect to the smart contract. Please check your wallet connection.");
        return;
      }

      const tx = await contract.issueCertificate(
        form.certificateId,
        form.studentName,
        form.courseName,
        formatDate(form.issueDate),
        form.studentAddress
      );

      await tx.wait();

      // Verify the certificate was created
      const exists = await contract.checkCertificateExists(form.certificateId);
      
      if (exists) {
        alert("Certificate Issued Successfully!");
        
        // Clear form after success
        setForm({
          certificateId: "",
          studentName: "",
          courseName: "",
          issueDate: "",
          studentAddress: ""
        });
        
        navigate("/UniversityDashboard");
      } else {
        alert("Certificate issuance may have failed. Please verify.");
      }

    } catch (error) {
      console.error("Form submission error:", error);

      // Parse specific error messages
      let errorMessage = "Failed to issue certificate!";

      if (error.message.includes("Certificate already exists")) {
        errorMessage = "This Certificate ID already exists!";
      } else if (error.message.includes("Only authorized issuers")) {
        errorMessage = "You are not authorized to issue certificates!";
      } else if (error.message.includes("user rejected") || error.message.includes("User denied")) {
        errorMessage = "Transaction was cancelled by user";
      } else if (error.message.includes("insufficient funds")) {
        errorMessage = "Insufficient funds to complete the transaction";
      }

      alert(errorMessage);
    }
  }

  return (
    <>
      <div className="top-0 z-50 sticky flex justify-between items-center p-2 max-w-7xl ml-31 bg-white">
        <button onClick={() => navigate("/UniversityDashboard")} className='flex justify-center items-center bg-white hover:bg-neutral-100 p-2 rounded-xl cursor-pointer'>
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
          <span>Back To University DashBoard</span>
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

      <div className='flex flex-warp flex-col bg-neutral-50 max-w-2xl mx-auto my-auto mt-15 rounded-2xl p-4 '>
        <div className='flex flex-warp items-center gap-4 text-3xl p-3 rounded-2xl w-full text-neutral-700  justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          <span>Issue new Certificate</span>
        </div>

        <form onSubmit={handleSubmitForm}>
          <div className='flex flex-col w-xl mt-3'>

            <div className='p-3 flex flex-col w-full '>
              <label htmlFor="certificateId" className='text-lg ml-4 mb-2'>Certificate Id <span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="certificateId"
                onChange={handleChange}
                value={form.certificateId}
                placeholder='Enter the Certificate Id (UNI-YEAR-ROLLNO-COURSE)'
                className='ml-4 border-1 border-neutral-300 bg-neutral-100 rounded-lg p-3 w-full outline-none hover:bg-white'
                required
              />
            </div>

            <div className='p-3 flex flex-col'>
              <label htmlFor="studentName" className='text-lg ml-4 mb-2'>Student Name <span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                placeholder='Student Name '
                className='ml-4 border rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 outline-none hover:bg-white'
                required
              />
            </div>

            <div className='p-3 flex flex-col'>
              <label htmlFor="courseName" className='text-lg ml-4 mb-2'>Course Name <span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="courseName"
                value={form.courseName}
                onChange={handleChange}
                placeholder='Course Name '
                className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 outline-none hover:bg-white'
                required
              />
            </div>

            <div className='p-3 flex flex-col'>
              <label htmlFor="issueDate" className='text-lg ml-4 mb-2'>Issue Date <span className='text-red-600'>*</span></label>
              <input
                type="date"
                name="issueDate"
                value={form.issueDate}
                onChange={handleChange}
                className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 hover:bg-white outline-none'
                required
              />
            </div>

            <div className='p-3 flex flex-col'>
              <label htmlFor="studentAddress" className='text-lg ml-4 mb-2'>Student Wallet Address <span className='text-red-600'>*</span></label>
              <input
                type="text"
                name="studentAddress"
                value={form.studentAddress}
                onChange={handleChange}
                placeholder='Enter the student address (e.g. 0xA1213....) '
                className='ml-4 border-1 rounded-lg p-3 w-full border-neutral-300 bg-neutral-100 hover:bg-white outline-none'
                required
              />
            </div>

            <div className='text-center mt-6 mb-3 flex flex-row justify-center items-center'>
              <button
                type="submit"
                className='text-white bg-blue-500 p-3 rounded-full hover:bg-blue-300 cursor-pointer flex items-center justify-center ml-10 w-full'
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p className='ml-2 text-shadow-md text-xl'>Issue Certificate</p>
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default IssueNewCertificate




