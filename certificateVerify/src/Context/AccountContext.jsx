// AccountContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);
  };

  // Auto-detect already connected wallet
  useEffect(() => {
    async function checkConnection() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) setWalletAddress(accounts[0]);
      }
    }
    checkConnection();
  }, []);

  return (
    <AccountContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </AccountContext.Provider>
  );
}

export const useAccountContext = () => useContext(AccountContext);
