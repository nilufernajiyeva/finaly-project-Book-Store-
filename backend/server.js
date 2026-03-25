const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/Book"); // Modelimizi bura bağlayırıq
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. MongoDB-yə qoşulma (Bura mütləq lazımdır)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı uğurludur! ✅"))
  .catch((err) => console.log("Bağlantı xətası: ❌", err));

// --- API YOLLARI (ROUTES) ---

// 2. Bütün kitabları gətir (GET)
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Məlumat gətirilərkən xəta oldu." });
  }
});

// 3. Yeni kitab əlavə et (POST)
app.post("/api/books", async (req, res) => {
  try {
    const { title, author, price, image, category } = req.body;
    const newBook = new Book({ title, author, price, image, category });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: "Kitab əlavə edilə bilmədi." });
  }
});

// Test ana yol
app.get("/", (req, res) => {
  res.send("Book Store Backend işləyir!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda aktivdir.`);
});