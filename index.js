import Link from "next/link";

export default function Home() {
  return (
    <div style={{padding:40}}>
      <h1>MediTrust Netlify v2</h1>
      <p>Decentralized Hospital Authorization System (Cardano Preprod)</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}