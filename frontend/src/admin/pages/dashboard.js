import React, { useContext, useEffect, useState,} from "react";
import SideBar from "../components/sidebar";
import {useNavigate} from "react-router-dom";
import AdminContext from "../components/adminContext";
import JWTInterceptor from "../interceptor/axios";


const Dashboard = () =>{
    const { user } = useContext(AdminContext)
    const [msg, setMsg] = useState('');
    const navigate = useNavigate()
    
    useEffect(() => {
        try {
            JWTInterceptor
            .get("/api/dashboard", {withCredentials:true}).then((res) =>{
                if(res.data){
                    setMsg(res.data.message)
                }
                else{
                    navigate("/admin/logout")
                }
                
            });
        } catch (error) {
            console.log(error.response.data.error)
        }
       
    }, []);
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-3 admin-content col-md-8">
            <h3 className="text-center">Dashboard</h3>
            <h3 className="text-center">Hello, {user[0].username}</h3>
            <h3>{msg}</h3>
        </div>
        </div>
        </div> 
        </>
    )
}

export default Dashboard;