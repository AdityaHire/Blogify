const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

// REST API Routes
router.post("/", createBlog);          // CREATE
router.get("/", getBlogs);             // READ ALL
router.get("/:id", getBlogById);       // READ ONE
router.put("/:id", updateBlog);        // UPDATE
router.delete("/:id", deleteBlog);     // DELETE

module.exports = router;
