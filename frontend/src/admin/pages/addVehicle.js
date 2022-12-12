import React from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useState } from "react";

const AddVehicle = () =>{
    const [vehicle, setVehicle] = useState({
        vehicleName: '',
        vehicleNumber: '',
        vehicleType: '',
        brandModel: '',
        chasisNo: '',
        plateNo: '',
        category: '',
        noOfSeats: '',
        vehicleColor:'',
        condition: '',
        vehiclePhoto: [],
       

    })
    const [display, setDisplay] = useState("mt-3 d-none")
    const [photo, setPhoto] = useState(null)
    const [response, setResponse] = useState([])

    const values = (e) =>{
        let x = e.target.value;
        if(e.target.files && e.target.files[0])
        {
            x = e.target.files[0];
            setPhoto(URL.createObjectURL(e.target.files[0]))
            setDisplay("mt-3")
        }

        setVehicle({...vehicle, [e.target.name]:x})
        //console.log(vehicle)
    }

    function addVehicle(e){
        e.preventDefault()
        axios.post("/api/add-vehicle", vehicle, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res =>{
            setResponse(res.data)
        })
    }
    return(
        <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-6 admin-content">
            <h3 className="text-center">ADD VEHICLE</h3>
            <form className="form"  method="POST" onSubmit={addVehicle} encType="multipart/form-data">
                <p>
                    <b>Vehicle Name:</b>
                    <input type="text" className="form-control col-md-5" name="vehicleName" placeholder="E.g Luxurious  Sienna" onChange={values} required  value={vehicle.vehicleName}/>
                </p>

                <p>
                    <b>Vehicle Number:</b>
                    <input type="text" className="form-control col-md-5" name="vehicleNumber" placeholder="E.g CC-203" onChange={values} required  value={vehicle.vehicleNumber}/>
                </p>

                <p>
                    <b>Select Vehicle Type:</b>
                    <select className="form-select col-md-5" name="vehicleType" required onChange={values} value={vehicle.vehicleType}>
                        <option value=""></option>
                        <option value="Bus">Bus</option>
                        <option value="Car/Sedan">Car/Sedan</option>
                        <option value="Mini Van">Mini Van</option>
                        <option value="SUV">SUV</option>
                        <option value="Wagon">Wagon</option>
                        <option value="Truck">Truck</option>
                    </select>
                </p>

                <p>
                    <b>Brand / Model:</b>
                    <input type="text" className="form-control" name="brandModel" placeholder="e.g Toyota / Sienna" onChange={values} value={vehicle.brandModel} required />
                </p>

                <p>
                    <b>Chasis Number:</b>
                    <input type="text" className="form-control" name="chasisNo" placeholder="Enter Vehicle Chasis Number" onChange={values} value={vehicle.chasisNo} required />
                </p>

                <p>
                    <b>Plate Number:</b>
                    <input type="text" className="form-control" name="plateNo" placeholder="e.g KAD-756D" onChange={values} value={vehicle.plateNo} required/>
                </p>

                <p>
                    <b>Vehicle Category:</b>
                    <select className="form-select col-md-5" name="category" required onChange={values} value={vehicle.category}>
                        <option value=""></option>
                        <option value="Loan Vehicle">Loan Vehicle</option>
                        <option value="Company Owned">Company Owned</option>
                    </select>
                </p>


                <p>
                    <b>No. of Seats:</b>
                    <input type="number" className="form-control" name="noOfSeats" placeholder="e.g 6" onChange={values} value={vehicle.noOfSeats} required />
                </p>

                <p>
                    <b>Vehicle Color:</b>
                    <input type="text" className="form-control" name="vehicleColor" placeholder="e.g Gray" onChange={values} value={vehicle.vehicleColor} required />
                </p>

                <p>
                    <b>Vehicle Condition:</b>
                    <select className="form-select col-md-5" name="condition" required onChange={values} value={vehicle.condition}>
                        <option value=""></option>
                        <option value="New">New</option>
                        <option value="Working">Working</option>
                        <option value="Faulty">Faulty</option>
                    </select>
                </p>

                <p>
                    <b>Vehicle Photo:</b>
                    <input type="file" className="form-control" name="vehiclePhoto" onChange={values} required accept="image/png" />
                </p>

                <div className={display}>

                    <img src={photo} alt="Vehicle Pic" className="w-50"/>
                </div>

                <p>
                    <input type="submit" name="addRouteBtn" className="btn btn-primary btn-Add" value="Add Vehicle" />
                </p>
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

export default AddVehicle;