import { connectWallet } from "../utils/lucid";

export default function Dashboard() {
  const handleConnect = async () => {
    await connectWallet();
    alert("Wallet connected (Preprod)");
  };

  return (
    <div style={{padding:40}}>
      <h2>Patient Dashboard</h2>
      <button onClick={handleConnect}>Connect Wallet</button>
    </div>
  );
}