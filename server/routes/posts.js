import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  getPostById,
  deletePostById,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/:postId", verifyToken, getPostById);

//router.get("/open", getFeedPosts); //no token required (for testing)
//router.get("/open/:postId", getPostById); //no token required (for testing)

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* DELETE */
router.delete("/:postId", verifyToken, deletePostById);

export default router;
