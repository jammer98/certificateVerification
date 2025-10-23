import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

function Footer() {


    const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">CertifyChain</h2>
         <p className="text-sm">Blockchain-based Certificate Verification System</p>
        </div>

        <ul className="flex space-x-8 mt-3 sm:mt-0">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><Link to="/StudentDashBoard" className="hover:text-white"> Student portal </Link></li>
          <li><Link to="/UniversityDashBoard" className="hover:text-white"> University Portal </Link></li>
          <li><Link to="/VeriferDashBoard" className="hover:text-white"> verifier Portal </Link></li>
          <li><a href="https://github.com/jammer98/certificateVerification" target="_blank" className="hover:text-white"> Git Hub </a></li>
        </ul>

        <div className="text-sm mt-3 sm:mt-0">
          © {new Date().getFullYear()} CertifyChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer
