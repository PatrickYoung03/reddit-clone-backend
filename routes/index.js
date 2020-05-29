const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllUsers,
  createUser,
  getUserByUsername,
  getAllPosts,
  getByTitle,
  updatePost
} = require("../models/index");

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

//get all posts and posts by search
router.get("/posts", async (req, res) => {
  const { search } = req.query;
  if (search) {
    const result = await getByTitle(search);
    res.json(result);
  }
  const result = await getAllPosts();
  res.json(result);
});

// get all users
router.get("/users", async (req, res) => {
  const result = await getAllUsers();
  if (result) {
    return res.json({ payload: result, success: true });
  }
});

// create user
router.post("/users", async (req, res) => {
  const { body } = req;
  const result = await createUser(body);
  if (result) {
    return res.json({ success: true, message: "you have created a user" });
  }
  res.json({ success: false });
});

// get users by username
router.get("/users", async (req, res) => {
  const { search } = req.query;
  const data = await getUserByUsername(search);
  res.json({ payoad: data, success: true });
});

router.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const update = await updatePosts(body, id);
  res.send(`you have updated the post ${body.title}`);
});

module.exports = router;
