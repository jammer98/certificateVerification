import { ethers } from "ethers";
import abi from "../abi/CertificateABI.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const getContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask not detected!");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  return contract;
};
