import axios from "axios";
import React from "react";
import { useEffect } from "react";

const AuthSuccess = () => {
  useEffect(() => {
    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      console.log("Params : ", params);
      const accessToken = params.get("token");
      console.log("accessToken : ", accessToken);
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        try {
          const res = await axios.get("http://localhost:3000/auth/me", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          // if(res.data.success){

          // }
          console.log(res);
          
        } catch (error) {
          console.log("Error in authsuccess : ", error);
        }
      }
    };
    handleAuth()
  }, []);
  return <div>AuthSuccess</div>;
};

export default AuthSuccess;
