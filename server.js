const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MediTrust Backend Running (Preprod)");
});

app.post("/upload-record", (req, res) => {
  // Placeholder for IPFS upload logic
  res.json({
    message: "Medical record received",
    ipfsHash: "QmExampleHash"
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));