import { Lucid, Blockfrost } from "lucid-cardano";

export async function connectWallet() {
  if (!window.cardano) throw new Error("Wallet not found");

  const lucid = await Lucid.new(
    new Blockfrost(
      "https://cardano-preprod.blockfrost.io/api/v0",
      process.env.NEXT_PUBLIC_BLOCKFROST_KEY
    ),
    "Preprod"
  );

  const api = await window.cardano.nami.enable();
  lucid.selectWallet(api);
  return lucid;
}