import { connectWallet } from "../utils/lucid";

export default function Dashboard() {
  const handleConnect = async () => {
    try {
      await connectWallet();
      alert("Wallet connected to Preprod");
    } catch (err) {
      alert("Wallet connection failed. Install Nami or Eternl.");
    }
  };

  return (
    <div style={{padding:40}}>
      <h2>Patient Dashboard</h2>
      <button onClick={handleConnect}>Connect Wallet</button>
    </div>
  );
}