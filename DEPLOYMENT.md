# MediTrust Deployment Guide (Preprod)

## 1. Blockfrost
Create a Preprod project and copy your API key.

## 2. Frontend (Vercel)
- Import frontend folder to Vercel
- Add Environment Variable:
  NEXT_PUBLIC_BLOCKFROST_KEY

## 3. Backend
cd backend
npm install
node server.js

## 4. Wallet
Use Nami or Eternl set to Preprod network.