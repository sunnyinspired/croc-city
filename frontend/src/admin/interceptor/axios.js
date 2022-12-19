import axios from "axios";

const JWTInterceptor = axios.create();

JWTInterceptor.interceptors.response.use(res => res, async error => {
    //const navigate = useNavigate()
    let refresh = false
    if(error.response.status === 401 && !refresh){
        console.log("hello")
        refresh = true
       axios.get("/api/get-token", {withCredentials: true}).then(response => {
        if(response.status === 401){
            return axios.post('/api/logout', {withCredentials: true}).then(response =>{
                if(response.data.auth == false){
                    localStorage.removeItem("authInfo");
                    //alert(response.data.message)
                    //navigate("/admin")
                }
            })
        }
        if(response.status === 200){
            return axios(error.config)
        }
       });
        
    }
    refresh = false;
    return error;
})

export default JWTInterceptor;