import { useState } from "react";
import { getContract } from "../lib/contract";
import { ShieldCheck, Plus, Activity, Lock } from "lucide-react";

export default function Home() {
  const [patient, setPatient] = useState("");
  const [hash, setHash] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addRecord = async () => {
    if (!patient || !hash) return alert("Please fill in both fields.");
    
    setIsSubmitting(true);
    try {
      const contract = await getContract();
      // Initiates the blockchain transaction
      const tx = await contract.addRecord(patient, hash);
      
      console.log("Transaction sent:", tx.hash);
      
      // Wait for the transaction to be mined
      await tx.wait();
      
      alert("Medical Record successfully anchored to the blockchain!");
      setPatient("");
      setHash("");
    } catch (error) {
      console.error("Blockchain error:", error);
      alert("Error: " + (error.reason || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200 mb-4">
            <ShieldCheck className="text-white" size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">MediTrust</h1>
          <p className="text-gray-500 text-sm font-medium mt-1 uppercase tracking-widest">Secure Health Ledger</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 mb-2 block">Patient Address</label>
            <input
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 ring-blue-500/20 outline-none transition-all"
              placeholder="0x..."
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 mb-2 block">IPFS Document Hash</label>
            <input
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono focus:ring-2 ring-blue-500/20 outline-none transition-all"
              placeholder="Qm..."
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
          </div>

          <button 
            disabled={isSubmitting}
            onClick={addRecord}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              "Confirming On-Chain..."
            ) : (
              <>
                <Plus size={20} />
                Secure Record
              </>
            )}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between gap-4 text-center">
            <div className="flex-1">
                <Activity size={18} className="mx-auto text-blue-400 mb-1" />
                <p className="text-[10px] text-gray-400 font-bold uppercase">Real-time</p>
            </div>
            <div className="flex-1 border-x border-gray-100">
                <Lock size={18} className="mx-auto text-emerald-400 mb-1" />
                <p className="text-[10px] text-gray-400 font-bold uppercase">Encrypted</p>
            </div>
            <div className="flex-1">
                <ShieldCheck size={18} className="mx-auto text-amber-400 mb-1" />
                <p className="text-[10px] text-gray-400 font-bold uppercase">Verified</p>
            </div>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-xs font-medium">© 2024 MediTrust Protocol • Decentralized Infrastructure</p>
    </div>
  );
}