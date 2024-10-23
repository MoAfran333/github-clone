import express from "express";
import {
  getUserProfileAndRepos,
  likeProfile,
  getLikes,
} from "../controllers/user.controllers.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// TODO => GET likes (who liked our profile)

router.get("/likes", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
