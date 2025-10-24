// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CertificateVerification {

    struct Certificate {
        string studentName;
        string courseName;
        string issueDate;
        address issuer;
        address student;   // <-- ADDED
        bool isValid;
    }
    
    mapping(string => Certificate) public certificates;
    mapping(address => bool) public authorizedIssuers;
    mapping(address => string[]) public certificatesByStudent; // <-- ADDED

    address public admin;
    
    event CertificateIssued(string indexed certificateId, string studentName, string courseName, address indexed student); // <-- updated
    event CertificateRevoked(string indexed certificateId);
    event IssuerAuthorized(address indexed issuer);
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    modifier onlyAuthorizedIssuer() {
        require(authorizedIssuers[msg.sender], "Only authorized issuers can issue certificates");
        _;
    }
    
    constructor() {
        admin = msg.sender;
        authorizedIssuers[msg.sender] = true;
    }
    
    function authorizeIssuer(address _issuer) public onlyAdmin {
        authorizedIssuers[_issuer] = true;
        emit IssuerAuthorized(_issuer);
    }
    
    function issueCertificate(
        string memory _certificateId,
        string memory _studentName,
        string memory _courseName,
        string memory _issueDate,
        address _studentAddress     // <-- ADDED
    ) public onlyAuthorizedIssuer {
        require(bytes(_certificateId).length > 0, "Certificate ID cannot be empty");
        require(certificates[_certificateId].issuer == address(0), "Certificate already exists");
        require(_studentAddress != address(0), "Invalid student address");

        certificates[_certificateId] = Certificate({
            studentName: _studentName,
            courseName: _courseName,
            issueDate: _issueDate,
            issuer: msg.sender,
            student: _studentAddress,
            isValid: true
        });

        certificatesByStudent[_studentAddress].push(_certificateId); // <-- ADDED

        emit CertificateIssued(_certificateId, _studentName, _courseName, _studentAddress); // <-- UPDATED
    }
    
    // PUBLIC verification allowed (no change)
    function verifyCertificate(string memory _certificateId) 
        public 
        view 
        returns (
            string memory studentName,
            string memory courseName,
            string memory issueDate,
            address issuer,
            address student,
            bool isValid
        ) 
    {
        Certificate memory cert = certificates[_certificateId];
        require(cert.issuer != address(0), "Certificate does not exist");
        
        return (
            cert.studentName,
            cert.courseName,
            cert.issueDate,
            cert.issuer,
            cert.student,
            cert.isValid
        );
    }
    
    function revokeCertificate(string memory _certificateId) public onlyAuthorizedIssuer {
        require(certificates[_certificateId].issuer == msg.sender, "Can only revoke own certificates");
        certificates[_certificateId].isValid = false;
        emit CertificateRevoked(_certificateId);
    }
    
    function checkCertificateExists(string memory _certificateId) public view returns (bool) {
        return certificates[_certificateId].issuer != address(0);
    }
}
