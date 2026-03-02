const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Protected route
router.post("/add", auth, (req, res) => {
  res.send("You are authorized");
});

module.exports = router;
