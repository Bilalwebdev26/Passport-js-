import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {useUser} from "../hooks/useUser.js"
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const { user, loading, error } = useUser();
  const navigate = useNavigate()
 console.log("User : ",user)
 console.log("loading : ",loading)
 console.log("error : ",error?error:"")
 navigate("/")
  return <div>AuthSuccess</div>;
};

export default AuthSuccess;
