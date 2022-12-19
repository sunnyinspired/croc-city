import React, { useContext } from "react";
import { useState } from "react";
import AdminContext from "../components/adminContext";

const AdminLogin = () =>{
    const { login } = useContext(AdminContext)
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const [loginMessage, setLoginMessage] = useState('')

    const setValue = (e) =>{
        setLoginInfo({...loginInfo, [e.target.name]:e.target.value});
    }
    const submitLogin = async (e) =>{
        e.preventDefault()
       await login(loginInfo)
        setLoginInfo({username:'', password: ''});
    }

    return(
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-5 admin-login">
                    <center><img src="/images/logo.png" alt="logo" className="align-self-center" /></center>
                    <h4>Admin Panel</h4>
                    <hr />
                    <form name="adminLogin" className="form"   onSubmit={submitLogin}>
                        <p>
                            <b>Username: </b>
                            <input type="text" className="form-control" placeholder=" Enter Username" 
                            name="username" onChange={setValue} value={loginInfo.username} /> 
                         </p> 
                         <p>
                         <b>Password: </b>
                            <input type="password" className="form-control" placeholder="Enter Password" 
                            name="password" onChange={setValue} value={loginInfo.password} /> 
                         </p> 
                         <p className="text-center">
                            <input type="submit" className="btn btn-subscribe" name="submitLogin" value="Login" />
                         </p>     
                    </form>
                    <h3> {loginMessage}</h3>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div> 
        </>
    )
}

export default AdminLogin;
