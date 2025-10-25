

const CONTRACT_ADDRESS ="0xB2a37a8C0de31C48aAFD4026159d603418c78456";

const Contract_abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "student",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "issueDate",
				"type": "string"
			}
		],
		"name": "CertificateIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			}
		],
		"name": "CertificateRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "IssuerAuthorized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "IssuerRevoked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_issuer",
				"type": "address"
			}
		],
		"name": "authorizeIssuer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "authorizedIssuers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			}
		],
		"name": "checkCertificateExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllIssuers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_issuer",
				"type": "address"
			}
		],
		"name": "getCertificatesByIssuer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isValid",
						"type": "bool"
					}
				],
				"internalType": "struct CertificateVerification.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			}
		],
		"name": "getCertificatesByStudent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isValid",
						"type": "bool"
					}
				],
				"internalType": "struct CertificateVerification.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIssuersWithStatus",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			}
		],
		"name": "getValidCertificatesByStudent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isValid",
						"type": "bool"
					}
				],
				"internalType": "struct CertificateVerification.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_issueDate",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_studentAddress",
				"type": "address"
			}
		],
		"name": "issueCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			}
		],
		"name": "revokeCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_issuer",
				"type": "address"
			}
		],
		"name": "revokeIssuer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newAdmin",
				"type": "address"
			}
		],
		"name": "transferAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			}
		],
		"name": "verifyCertificate",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "studentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "courseName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issueDate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "student",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isValid",
						"type": "bool"
					}
				],
				"internalType": "struct CertificateVerification.Certificate",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// export const getContract = async () => {
//   if (!window.ethereum) {
//     alert(" MetaMask not detected! , Please Install Metamask ");
//     return null;
//   }

//   const provider = new ethers.BrowserProvider(window.ethereum);
//   const signer = await provider.getSigner();
//   const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
//   return contract;
// };

export {CONTRACT_ADDRESS, Contract_abi};
