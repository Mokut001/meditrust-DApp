import { ethers } from "ethers";

// Replace with your actual deployed contract address on Sepolia/Polygon/etc.
const CONTRACT_ADDRESS = "0xYourDeployedContractAddressHere";

// Minimal ABI based on the MediTrust.sol
const ABI = [
  "function addRecord(address patient, string ipfsHash) public",
  "function getRecords(address patient) public view returns (tuple(string ipfsHash, uint256 timestamp, address uploadedBy)[])"
];

export const getContract = async () => {
  if (!window.ethereum) {
    throw new Error("No Ethereum wallet found. Please install MetaMask.");
  }

  // Request account access
  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};