import React from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useState } from "react";

const AddRoute = () =>{
    const [routes, setRoutes] = useState({
        routeFrom: '',
        routeTo: ''
    })
    const [response, setResponse] = useState([])

    const values = (e) =>{
        setRoutes({...routes, [e.target.name]:e.target.value})
    }
    function addRoute(e){
        e.preventDefault()
        axios.post("/api/add-route", routes).then(res =>{
            setResponse(res.data)
        })
    }
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-6 admin-content">
            <h3>ADD ROUTE</h3>
            <form className="form" name="addrouteForm" method="POST" onSubmit={addRoute}>
                <p>
                    <b>From:</b>
                    <input type="text" className="form-control col-md-5" name="routeFrom" placeholder="e.g Kaduna (Mando)" onChange={values} />
                </p>

                <p>
                    <b>To:</b>
                    <input type="text" className="form-control" name="routeTo" placeholder="e.g Abuja (Zuba" onChange={values}/>
                </p>

                <button type="submit" name="addRouteBtn" className="btn btn-primary btn-Add">Add Route</button>
            </form>
            <div className={response.class_name}>
                    <h3> {response.server_message}</h3>
            </div>
        </div>
        </div>
        </div> 
        </>
    )
}

export default AddRoute;