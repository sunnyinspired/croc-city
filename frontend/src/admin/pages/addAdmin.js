import React, { useEffect, useState } from "react";
import {Form, FormLabel, FormGroup, } from "react-bootstrap";
import SideBar from "../components/sidebar";
import axios from "axios";

const AddAdmin = () =>{
    const [staffEmail, setStaffEmail] = useState([])
    const [roles, setRoles] = useState([])
    const [staff, setStaff] = useState([])
    const [response, setResponse] = useState([])
    //const [photo, setPhoto] = useState(null)
    const [values, setValues] = useState({
        staff_id:'',
        username: '',
        email: '',
        password:'',
        role: ''
    });
    const [verifypassword, setVerifyPassword] = useState({
        password: '',
        message:'',
        class: ''
    });

    const findEmail = (e)=>{
        if(e.target.value !== "")
        {
            const query = staff.find(staff => staff.staff_id === +e.target.value);
            setStaffEmail(query);
        }
        else{
            setStaffEmail([]);
        }
    }
useEffect(() =>{
    axios.get("/api/get-staff").then((res) =>{
            setStaff(res.data)
        });
    axios.get("/api/get-roles").then((res) =>{
            setRoles(res.data)
        });
}, []);


const setInfo = (e) =>{
    let x = e.target.value;        
    setValues({...values, [e.target.name]:x});
}

function checkPassword(e){
    if(e.target.value === values.password){
        setVerifyPassword({
            password: e.target.value,
            message: " Passwords Match!",
            class: "pwd-correct bi bi-check-circle-fill"
        })
    }
    else{
        setVerifyPassword({
            password: e.target.value,
            message: " Passwords Do Not Match!",
            class: "pwd-wrong bi bi-exclamation-circle-fill"
        })
    }
}


const addUser = (e) =>{
    e.preventDefault();
    if(values.password !== verifypassword.password){
        alert("Password Mismatch! Kindly check!")
    }
    else{
        axios.post("/api/add-admin", values).then((res) =>{
            setResponse(res.data)
        })
    }
}
return(
    <>
    
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-7 admin-content">
            <h3 className="text-center">ADD ADMIN ACCOUNT</h3>
            
            <Form method="POST" onSubmit={addUser}>
        
                        <div className="form-item row">
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>Select Staff: </FormLabel>
                                    <Form.Select  name="staff_id" required onChange={e => {findEmail(e); setInfo(e)}}>
                                        <option></option>
                                        {
                                            staff.map(staff =>
                                                <>
                                                <option value={staff.staff_id}>{staff.staff_name}</option>
                                                </>
                                                )
                                        }
                                    </Form.Select>
                                </FormGroup>
                            </div>
                            <div className="col">
                                <FormLabel>Email:</FormLabel>
    
                                <Form.Select  name="email" required  onChange={setInfo}>
                                    <option></option>
                                    <option value={staffEmail.email}>{staffEmail.email}</option>
                                </Form.Select>
                            </div>
                        </div>  
                        <div className="form-item row">
                            <div className="col">
                                <FormLabel>Username: </FormLabel>
                                <Form.Control type="text" name="username" placeholder="Enter username" required onChange={setInfo} />  
                            </div>
                            <div className="col">
                            <FormLabel>Select Role: </FormLabel>
                                <Form.Select  name="role" required  onChange={setInfo}>
                                    <option></option>
                                    {roles.sort((a,b) => a.role_name > b.role_name ? 1 :  -1).map(role =>
                                        <option value={role.role_id}>{role.role_name}</option>
                                    )}
                                </Form.Select>
                            </div>
                        </div>  
                        <div className="form-item row">
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>Password:</FormLabel>
                                    <Form.Control type="password" name="password" placeholder="Enter passowrd" required  onChange={setInfo} />
                                </FormGroup>
                            </div>
                            <div className="col">
                                <FormGroup>
                                    <FormLabel>Verify Password:</FormLabel>
                                    <Form.Control type="password"  placeholder="Enter passowrd" required  onChange={checkPassword} />
                                </FormGroup>
                                <span className={verifypassword.class}>{verifypassword.message}</span>
                            </div>
                            
                        </div>
                        
                       
                        
                        <div className="form-item">
                            <FormGroup>
                            <Form.Control type="submit"  name="addStaff" id="btn-book" value="Save" />
                            </FormGroup>
                        </div>
                        <div className={response.class_name} role="alert">
                               <h3> {response.server_message}</h3>
                               {
                                response.length !== 0 ?
                               <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                : ''
                            }
                               </div>
                    </Form>
        </div>
        </div>
        </div> 
    </>
)
}

export default AddAdmin;