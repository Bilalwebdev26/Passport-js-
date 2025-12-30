import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
    },
    googleId: {
      type: String,
    },
    avatar: {
      type: String,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isLoggedIn: {
      type: Boolean,
      default: false,
    },

    token: {
      type: String,
      default: null,
    },

    otp: {
      type: String,
      default: null,
    },

    otpExpiry: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
