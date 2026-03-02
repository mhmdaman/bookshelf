const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();


let readingList = [];

router.post("/add", auth, (req, res) => {
  const { title, author } = req.body;

  const book = {
    id: Date.now(),
    title,
    author,
    userId: req.user.userId
  };

  readingList.push(book);
  res.json({ msg: "Book added to reading list", book });
});


router.get("/", auth, (req, res) => {
  const userBooks = readingList.filter(
    book => book.userId === req.user.userId
  );

  res.json(userBooks);
});


router.delete("/:id", auth, (req, res) => {
  const bookId = parseInt(req.params.id);

  readingList = readingList.filter(book => book.id !== bookId);

  res.json({ msg: "Book removed from reading list" });
});

module.exports = router;
