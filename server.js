const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MediTrust Backend Running");
});

app.post("/upload-record", (req, res) => {
  res.json({
    message: "Record received",
    ipfsHash: "QmExampleHash"
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log("Backend running on port", PORT));