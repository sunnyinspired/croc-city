import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () =>{
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const history = useNavigate();

    const [loginMessage, setLoginMessage] = useState('')

    const setValue = (e) =>{
        setLoginInfo({...loginInfo, [e.target.name]:e.target.value});
    }
    const Login = async (e) =>{
        e.preventDefault()
       await axios.post("/api/login", loginInfo).then((res) =>{
            
            if(res.data.auth === true){                
                history('/admin/dashboard',{
                    state:{
                        token: res.data.token,
                        user:res.data.user,
                        isLoggedIn: true
                    }
                });
            }
            else{
                setLoginMessage(res.data.message);
            }
            
        }

        );
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
                    <form name="adminLogin" className="form"   onSubmit={Login}>
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