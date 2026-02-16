# MediTrust Netlify Deployment Guide

## Step 1
Push this repo to GitHub.

## Step 2
Go to Netlify → New Site → Import from GitHub.

## Step 3
Select main branch. Base directory: leave empty (root).

## Step 4
Build command: npm run build
Publish directory: .next

## Step 5
Add environment variable:
NEXT_PUBLIC_BLOCKFROST_KEY = your_preprod_key

## Step 6
Deploy.

All routes like /dashboard will now work.