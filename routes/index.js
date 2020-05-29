const express = require("express");
const router = express.Router();

const { createPost } = require("../models/index");

const { query } = require("../db/index");

// createPost
router.post("/posts", async (req, res) => {
  const { body } = req;
  console.log(body);
  const result = await createPost(body);
  if (result) {
    return res.json({ success: true, message: "you have made a new post" });
  }
  res.json({ success: false });
});

module.exports = router;
