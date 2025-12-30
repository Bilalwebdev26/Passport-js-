import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const handleGoggleLogin = async()=>{
    console.log("Button hit")
    console.log(`${import.meta.env.VITE_BACKEND_URL}/auth/google`)
    const res = window.location.href = "http://localhost:3000/auth/google";
    console.log(res)
}
const Header = () => {
  return (
    <div className="px-6 py-3 flex items-center justify-between">
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
      </div>
      <div className="">
        <button onClick={handleGoggleLogin}>Goggle Login</button>
      </div>
    </div>
  );
};

export default Header;
