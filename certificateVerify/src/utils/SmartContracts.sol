// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title CertificateVerification
 * @dev A decentralized certificate issuance and verification system.
 *      Admin can authorize issuers; authorized issuers can issue, revoke, and
 *      list certificates for students. Students can verify their certificates
 *      via the blockchain.
 */
contract CertificateVerification {

    struct Certificate {
        string certificateId;
        string studentName;
        string courseName;
        string issueDate;
        address issuer;
        address student;
        bool isValid;
    }

    // --- Storage ---
    mapping(string => Certificate) private certificates;          // certificateId => Certificate
    mapping(address => bool) public authorizedIssuers;             // address => authorized
    mapping(address => string[]) private certificatesByStudent;    // student => certificateIds
    mapping(address => string[]) private certificatesByIssuer;     // issuer => certificateIds
    address[] private issuerList;                                  // ⭐ ADDED: List of all issuers

    address public admin;

    // --- Events ---
    event CertificateIssued(
        string certificateId,
        string studentName,
        string courseName,
        address indexed student,
        address indexed issuer,
        string issueDate
    );

    event CertificateRevoked(string indexed certificateId);
    event IssuerAuthorized(address indexed issuer);
    event IssuerRevoked(address indexed issuer);  // ⭐ ADDED

    // --- Modifiers ---
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyAuthorizedIssuer() {
        require(authorizedIssuers[msg.sender], "Only authorized issuers can issue certificates");
        _;
    }

    // --- Constructor ---
    constructor() {
        admin = msg.sender;
        authorizedIssuers[msg.sender] = true;
        issuerList.push(msg.sender);  // ⭐ ADDED: Add admin to issuer list
    }

    // --- Admin Functions ---
    function authorizeIssuer(address _issuer) external onlyAdmin {
        require(_issuer != address(0), "Invalid issuer address");
        
        // ⭐ Only add to list if not already authorized
        if (!authorizedIssuers[_issuer]) {
            authorizedIssuers[_issuer] = true;
            issuerList.push(_issuer);
            emit IssuerAuthorized(_issuer);
        }
    }

    // ⭐ ADDED: Remove issuer authorization
    function revokeIssuer(address _issuer) external onlyAdmin {
        require(_issuer != admin, "Cannot revoke admin");
        authorizedIssuers[_issuer] = false;
        emit IssuerRevoked(_issuer);
    }

    // ⭐ ADDED: Transfer admin rights
    function transferAdmin(address _newAdmin) external onlyAdmin {
        require(_newAdmin != address(0), "Invalid address");
        admin = _newAdmin;
    }

    // --- Certificate Management ---
    function issueCertificate(
        string memory _certificateId,
        string memory _studentName,
        string memory _courseName,
        string memory _issueDate,
        address _studentAddress
    ) external onlyAuthorizedIssuer {
        require(bytes(_certificateId).length > 0, "Certificate ID cannot be empty");
        require(bytes(_studentName).length > 0, "Student name cannot be empty");
        require(bytes(_courseName).length > 0, "Course name cannot be empty");
        require(certificates[_certificateId].issuer == address(0), "Certificate already exists");
        require(_studentAddress != address(0), "Invalid student address");

        certificates[_certificateId] = Certificate({
            certificateId: _certificateId,
            studentName: _studentName,
            courseName: _courseName,
            issueDate: _issueDate,
            issuer: msg.sender,
            student: _studentAddress,
            isValid: true
        });

        certificatesByStudent[_studentAddress].push(_certificateId);
        certificatesByIssuer[msg.sender].push(_certificateId);  // ⭐ ADDED

        emit CertificateIssued(_certificateId, _studentName, _courseName, _studentAddress, msg.sender, _issueDate);
    }

    function revokeCertificate(string memory _certificateId) external onlyAuthorizedIssuer {
        Certificate storage cert = certificates[_certificateId];
        require(cert.issuer == msg.sender, "Can only revoke own certificates");
        require(cert.isValid, "Certificate already revoked");

        cert.isValid = false;
        emit CertificateRevoked(_certificateId);
    }

    // --- Getters ---
    function verifyCertificate(string memory _certificateId)
        external
        view
        returns (Certificate memory)
    {
        Certificate memory cert = certificates[_certificateId];
        require(cert.issuer != address(0), "Certificate does not exist");
        return cert;
    }

    function checkCertificateExists(string memory _certificateId)
        external
        view
        returns (bool)
    {
        return certificates[_certificateId].issuer != address(0);
    }

    // For Student Dashboard: Get all certificates received by a student
    function getCertificatesByStudent(address _student)
        external
        view
        returns (Certificate[] memory)
    {
        string[] memory ids = certificatesByStudent[_student];
        uint256 count = ids.length;

        Certificate[] memory certList = new Certificate[](count);

        for (uint256 i = 0; i < count; i++) {
            certList[i] = certificates[ids[i]];
        }

        return certList;
    }

    // ⭐ ADDED: For University Dashboard: Get all certificates issued by an issuer
    function getCertificatesByIssuer(address _issuer)
        external
        view
        returns (Certificate[] memory)
    {
        string[] memory ids = certificatesByIssuer[_issuer];
        uint256 count = ids.length;

        Certificate[] memory certList = new Certificate[](count);

        for (uint256 i = 0; i < count; i++) {
            certList[i] = certificates[ids[i]];
        }

        return certList;
    }

    // ⭐ ADDED: Get only valid certificates for a student
    function getValidCertificatesByStudent(address _student)
        external
        view
        returns (Certificate[] memory)
    {
        string[] memory ids = certificatesByStudent[_student];
        
        // Count valid certificates first
        uint256 validCount = 0;
        for (uint256 i = 0; i < ids.length; i++) {
            if (certificates[ids[i]].isValid) {
                validCount++;
            }
        }

        // Create array of valid certificates
        Certificate[] memory validCerts = new Certificate[](validCount);
        uint256 index = 0;
        
        for (uint256 i = 0; i < ids.length; i++) {
            if (certificates[ids[i]].isValid) {
                validCerts[index] = certificates[ids[i]];
                index++;
            }
        }

        return validCerts;
    }

    // ⭐ ADDED: Get all authorized issuers (for admin dashboard)
    function getAllIssuers() external view returns (address[] memory) {
        return issuerList;
    }

    // ⭐ ADDED: Get authorized issuers with their authorization status
    function getIssuersWithStatus() external view returns (address[] memory, bool[] memory) {
        uint256 count = issuerList.length;
        bool[] memory statuses = new bool[](count);
        
        for (uint256 i = 0; i < count; i++) {
            statuses[i] = authorizedIssuers[issuerList[i]];
        }
        
        return (issuerList, statuses);
    }
}