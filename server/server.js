// server/server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a schema for summaries
const summarySchema = new mongoose.Schema({
  text: String,
  summarizedText: String,
});

// Define a model for the schema
const Summary = mongoose.model("Summary", summarySchema);

// Replace OpenAI with Python-based summarizer
app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Text to summarize is required" });
  }

  try {
    // Call local Python Flask API
    const response = await axios.post("http://localhost:8000/summarize", { text });
    const summarizedText = response.data.summary;

    // Save to MongoDB
    const newSummary = new Summary({ text, summarizedText });
    await newSummary.save();

    res.json({ summary: summarizedText });
  } catch (error) {
    console.error("Error calling local summarizer:", error.message);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
