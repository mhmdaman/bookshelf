const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get recommendations (protected route)
router.get("/", auth, (req, res) => {
  // Dummy recommendations for now
  const recommendations = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "Deep Work", author: "Cal Newport" }
  ];

  res.json({
    msg: "Book recommendations",
    user: req.user.userId,
    recommendations
  });
});

module.exports = router;
