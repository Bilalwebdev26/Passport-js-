import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    console.log("Req.header : ",req.cookies?.token|| req.header("Authorization")?.replace("Bearer ", "").trim())
    const authHeader = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "").trim();

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access token is missing or invalid",
      });
    }

    //const token = authHeader.split(" ")[1];
    console.log(authHeader);
    
    jwt.verify(authHeader, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(400).json({
            success: false,
            message:
              "Access Token has expired, use refreshtoken to generate again",
          });
        }
        return res.status(400).json({
          success: false,
          message: "Access token is missing or invalid",
        });
      }
      const { id } = decoded;
      console.log(id)

      const user = await User.findById(id);
      console.log(user)
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "user not found",
        });
      }

      req.user = user;
      req.userId = user._id;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
