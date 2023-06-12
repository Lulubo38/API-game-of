const express = require("express");

const postController = require("../controller/post");

const router = express.Router();

// http://localhost:3003/blog/......
router.get("/posts", postController.getPosts);

router.post("/post", postController.createPost);

router.get("/post/:id", postController.getById);

module.exports = router;
const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Erreur " });
  }
};
// get the id in the data base
exports.getById = async (req, res) => {};
