import React, { useEffect, useState, createContext, useContext } from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) =>{
    const location = useLocation();
    const [token, SetToken] = useState('');
    if(location.state){
        SetToken(location.state.token)
    }
    return(
        <AdminContext.Provider value={{token, SetToken}}>
            {children}
        </AdminContext.Provider>
    );
}

export const useAdminContext = () => useContext(AdminContext);
const Dashboard = () =>{
    const {token, SetToken} = useAdminContext()
    const [msg, setMsg] = useState(token);
    
    /*useEffect(() => {
        axios.get("/api/dashboard", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then((res) =>{
            setMsg(res.data.message)
        });
    }, []);*/
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-3 admin-content col-md-8">
            <h3 className="text-center">Dashboard</h3>
            <h3>{msg}</h3>
        </div>
        </div>
        </div> 
        </>
    )
}

export default Dashboard;