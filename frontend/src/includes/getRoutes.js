import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const [from, setFrom] = useState([])

const Routes = () => {
    useEffect(() => {
        axios.get("/api/get-routes").then(res =>{
            setFrom(res.data)
        });
    },[])

return(
    <>
    <option value={from.route_id}>{from.route_from}</option>
    </>
)
}

export default Routes;