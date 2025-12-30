import passport from "passport";
export const googleAuth = (req, res) => {
  try {
    console.log("Hit")
    passport.authenticate("google", { scope: ["profile"] });
  } catch (error) {
    console.log("Error while geting google auth : ", error);
  }
};
export const googleCallback = (req, res) => {
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/failure",
  });
};
