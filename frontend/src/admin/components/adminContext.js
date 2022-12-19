import axios from "axios";
import React,{ createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
 
const AdminContext = createContext();
 
export const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("authInfo")) {
      let user = JSON.parse(localStorage.getItem("authInfo"));
      return user;
    }
    return null;
  });

/*   const [user, setUser] = useState(() => {
    if (localStorage.getItem("authInfo")) {
      let user = JSON.parse(localStorage.getItem("authInfo"));
      return user.userData;
    }
    return null;
  }); */

  /* const refreshToken = async () => {
    if (localStorage.getItem("authInfo")) {
      let tokens = JSON.parse(localStorage.getItem("authInfo"));
      let decoded =  jwt_decode(tokens.access_token);
      const now = new Date().getTime()
      if(now > decoded.exp * 1000){
        let getToken = await axios.post("/api/get-token",tokens.userData.admin_id);
        
        const response = {
          access_token: getToken.data.access_token,
          userData: {
            admin_id:user.admin_id,
            role_id: user.role_id,
            username: user.username
          }
        }
        localStorage.setItem("authInfo",  JSON.stringify(response));
        setToken(response)
        
      }
    }
    return null;
  } */
 
  const navigate = useNavigate();
 
  const login = async (payload) => {
    const { data} = await axios.post(
      "/api/login",
      payload, {
        withCredentials: true
      }
    );
    //axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
    if(data.auth === true){
      const response = await axios.get("/api/authUser");
      localStorage.setItem("authInfo",  JSON.stringify(response.data.userData));
    setUser(response.data.userData);
    navigate("/admin/dashboard");
    }
    
  };
  return (
    <AdminContext.Provider value={{ user, login, }}>
      {children}
    </AdminContext.Provider>
  );
};
 
export default AdminContext;