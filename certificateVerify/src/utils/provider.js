import { ethers } from "ethers";
import { CONTRACT_ADDRESS,Contract_abi } from "./contract";


export const getContract = async () => {

    if(!window.ethereum){
        alert(" MetaMask not detected! , Please Install Metamask ");
        return null;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, Contract_abi, signer);
    
}