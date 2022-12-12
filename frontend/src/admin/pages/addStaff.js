import React, { useEffect, useState } from "react";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import SideBar from "../components/sidebar";
import  {StateLGA} from '../data/stateLGAs';
import axios from "axios";
//import Booking from "../components/bookingtab";
var todayDate = new Date().toISOString().slice(0, 10);

const AddStaff = () =>{
    const sortedStates = StateLGA.sort((a,b) => a.state > b.state ? 1:-1);
    const [stateLga, setStateLGA] = useState([])
    const [dept, setDept] = useState([])
    const [pos, setPos] = useState([])
    const [staffPhoto, setStaffPhoto] = useState(null)
    const [display, setDisplay] = useState("mt-3 d-none")
    const [response, setResponse] = useState([])
    //const [photo, setPhoto] = useState(null)
    const [values, setValues] = useState({
        firstName:'',
        middleName: '',
        lastName:'',
        dob: '',
        sex: '',
        lga: '',
        state: '',
        address: '',
        email: '',
        phone: '',
        dept: '',
        pos: '',
        photo:[]
    })

    const findLGA = (e)=>{
        if(e.target.value !== "")
        {
            const query = sortedStates.find(state => state.state === e.target.value);
            const result = query.lgas.sort()
            setStateLGA(result);
        }
        else{
            setStateLGA([]);
        }
    }
useEffect(() =>{
    axios.get("/api/get-departments").then((res) =>{
            setDept(res.data.dept)
        });
    
    axios.get("/api/get-positions").then((res) =>{
            setPos(res.data.positions)
        });
}, [],[]);


const setInfo = (e) =>{
    let x = e.target.value;
    if(e.target.files && e.target.files[0]){
        x = e.target.files[0];
    }
   
        
    setValues({...values, [e.target.name]:x});
}



const showPhoto = (e) => {
    if(e.target.files && e.target.files[0]){
        setDisplay("mt-3")
        setStaffPhoto(URL.createObjectURL(e.target.files[0]));
        //setValues({photo: e.target.files[0]})
    }
    
}
const addStaff = (e) =>{
    e.preventDefault();
    axios.post("/api/add-staff", values, {   
        headers: { "Content-Type": "multipart/form-data" }
    }
    ).then((res) =>{
        setResponse(res.data)
    })
}
return(
    <>
    
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-7 admin-content">
            <h3 className="text-center">ADD STAFF</h3>
            
            <Form method="POST" onSubmit={addStaff} encType="multipart/form-data">
        
                        <div className="form-item row">
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>First Name: </FormLabel>
                                    <Form.Control type="text" name="firstName" required onChange={setInfo} />
                                </FormGroup>
                            </div>
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>Last Name: </FormLabel>
                                    <Form.Control type="text" name="lastName" required onChange={setInfo} />
                                </FormGroup>
                            </div> 
                        </div>
                        <div className="form-item row">
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>Date of Birth:</FormLabel>
                                    <Form.Control type="date" name="dob" required max={todayDate} onChange={setInfo} />
                                </FormGroup>
                            </div>
                            <div className="col">
                                <FormLabel>Sex:</FormLabel>
                                <Form.Select aria-label="Default select example" name="sex" required onChange={setInfo} >
                                    <option value=""></option>
                                    <option value="f">FeMale</option>
                                    <option value="m">Male</option>
                                </Form.Select>
                            </div> 
                        </div>

                        <div className="form-item row">
                            <div className="col">
                                <FormLabel>State of Origin:</FormLabel>
                                <Form.Select aria-label="Default select example" name="state" required onChange={e => {findLGA(e); setInfo(e)}}>
                                <option></option>
                                {
                                    sortedStates.map(stateItem =>

                                        <option value={stateItem.state} key={stateItem.state}>{stateItem.state}</option>

                                    )
                                }
                                </Form.Select>
                            </div>
                            <div className="col">
                                <FormLabel>LGA:</FormLabel>
                                <Form.Select aria-label="Default select example" name="lga" required onChange={setInfo}>
                                <option></option>
                                {
                                    stateLga.map(lga =>

                                        <option value={lga}>{lga}</option>

                                    )
                                }
                                </Form.Select>
                            </div> 
                            
                        </div>

                        <div className="form-item row">
                            <div className="col">
                                <FormLabel>Email:</FormLabel>
                                <Form.Control type="email" name="email" required placeholder="Enter email" onChange={setInfo}>
                                
                                </Form.Control>
                            </div>
                            <div className="col">
                            <FormLabel>Phone:</FormLabel>
                                <Form.Control type="tel" name="phone" required placeholder="Enter Phone Number" onChange={setInfo}>
                                
                                </Form.Control>
                            </div> 
                            
                        </div>

                        <div className="form-item">
                        <FormLabel>Address: </FormLabel>
                        <Form.Control as="textarea" rows={4}  name="address" required className="w-60" onChange={setInfo}>
                            
                        </Form.Control>
                        </div>
                        
                        <div className="form-item row">
                            <div className="col">
                                <FormLabel>Unit / Department:</FormLabel>
                                <Form.Select aria-label="Default select example" name="dept" required onChange={setInfo}>
                                <option></option>
                                {
                                    dept.sort((a,b) => a.dept_name > b.dept_name ? 1: -1).map(deptItem =>

                                        <option value={deptItem.dept_id} key={deptItem.dept_id}>{deptItem.dept_name}</option>

                                    )
                                }
                                </Form.Select>
                            </div>
                            <div className="col">
                                <FormLabel>Position:</FormLabel>
                                <Form.Select aria-label="Default select example" name="pos" required onChange={setInfo}>
                                <option value=""></option>
                                {
                                    pos.sort((a,b) => a.position > b.position ? 1: -1).map(pos =>

                                        <option value={pos.pos_id} key={pos.pos_id}>{pos.position}</option>

                                    )
                                }
                                </Form.Select>
                            </div> 
                            
                        </div>
                        <div className="form-item">
                            <FormGroup>
                                <FormLabel>Upload Photo:</FormLabel>
                                <Form.Control type="file" name="photo" onChange={e =>{showPhoto(e); setInfo(e);}} accept="image/png" />
                            </FormGroup>
                            
                                
                                
                                <div className={display}>

                                    <img src={staffPhoto} alt="Staff Profile Pic" className="w-50"/>
                                </div>
                            
                        </div>
                        <div className="form-item">
                            <FormGroup>
                            <Form.Control type="submit"  name="addStaff" id="btn-book" value="Save" />
                            </FormGroup>
                        </div>
                        <div className={response.class_name}>
                               <h3> {response.server_message}</h3>
                        </div>
                    </Form>
        </div>
        </div>
        </div> 
    </>
)
}

export default AddStaff