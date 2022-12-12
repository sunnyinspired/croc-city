import React from "react";
import SideBar from "../components/sidebar";
import { useState , } from "react";
import { GetRoutes, Trips, Vehicles } from "./tripItems";
import axios from "axios";
import { useAdminContext } from "./dashboard";

const ManageTrips = () =>{
    const [response, setResponse] = useState('')

    const {token, SetToken} = useAdminContext();

    function setValue(e){
            setResponse(e.target.value)
        };
        console.log("Your Token is: "+ token)
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-9 admin-content">
            <h3 className="text-center home-1st-text text-dark">
                ROUTES, TRIPS & VEHICLE MANAGEMENT <i className="bi bi-sliders"></i>
            </h3>
            <hr />
            <div className="row w-50">
                <div className="col">
                    <b>Select Item to Manage: </b>
                </div>
                <div className="col">
                    <select className="form-select" name="tripItem" required onChange={setValue}>
                        <option value=""></option>
                        <option value="routes">Manage Routes</option>
                        <option value="trips">Manage Trips</option>
                        <option value="vehicle">Manage Vehicles</option>
                    </select>
                </div>
            </div>
            <div className="mt-5 table-responsive">
                {
                    response === 'routes' ? <GetRoutes /> :
                    response === 'trips' ? <Trips /> :
                    response === 'vehicle' ? <Vehicles /> :
                    token
                }
            </div>
            
        </div>
        </div>
        </div> 
        </>
    )
}

export default ManageTrips;