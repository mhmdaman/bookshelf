const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const readingListRoutes = require("./routes/readingList");
const recommendationRoutes = require("./routes/recommendations");

const app = express();

app.use(cors());
app.use(express.json());

// COMMENT ALL ROUTES FIRST
 app.use("/api/auth", authRoutes);
 app.use("/api/books", bookRoutes);
 app.use("/api/readingList", readingListRoutes);
 app.use("/api/recommendations", recommendationRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
