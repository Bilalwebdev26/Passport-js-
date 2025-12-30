import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
import User from "../model/user.model.js";

dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      // console.log("accessToken",accessToken);
      // console.log("refreshToken",refreshToken);

      try {
        let user = await User.findOneAndUpdate({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          });
        }
        console.log(user);
        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);
