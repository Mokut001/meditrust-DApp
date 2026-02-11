# MediTrust - Decentralized Medical Records

A standard full-stack Ethereum DApp for securing patient data using IPFS hashes.

## 📁 Architecture Identification

### 1. On-Chain Code (Smart Contract)
- **File**: `contracts/MediTrust.sol`
- **Role**: This is the source of truth. It stores the mapping of patient addresses to their medical history hashes eternally on the blockchain.

### 2. Off-Chain Code (Frontend & Logic)
- **Frontend UI**: `pages/index.js` (React/Next.js). Handles user interaction and local state.
- **Integration Logic**: `lib/contract.js`. Uses the `ethers` library to bridge the browser wallet (MetaMask) with the Smart Contract.

## 🚀 How to Run
1. Unzip the files.
2. Run `npm install` to load dependencies.
3. Deploy the `MediTrust.sol` contract (using Remix or Hardhat).
4. Paste your **Contract Address** into `lib/contract.js`.
5. Run `npm run dev` to start the dashboard.
