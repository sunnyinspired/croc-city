import axios from "axios";
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
    const navigate = useNavigate()
    useEffect(() =>{
        axios.post('/api/logout').then(response =>{
            if(response.data.auth === false){
                localStorage.removeItem("authInfo");
                //alert(response.data.message)
                navigate("/admin")
            }
        });
    }, [])
        
}