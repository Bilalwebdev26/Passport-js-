import express from "express";
import {} from "../config/passport.js";
import {
  googleAuth,
  googleCallback,
} from "../controller/passport.controller.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
    } catch (error) {
      console.log("Google Login error : ", error);
      res.redirect(`${process.env.CLIENT_URL}/login?error=google_failed`);
    }
  }
);
router.get("/me", isAuthenticated, (req, res) => {
  console.log("Req.user : ",req.user)
  res.json({ success: true, user: req.user });
});
export default router;
