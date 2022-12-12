import React, { useRef } from "react";
import SideBar from "../components/sidebar";
import { Manifest } from "./tripItems";
import { useParams } from "react-router-dom";
import ReactToPrint from 'react-to-print'

const PrintManifest = () =>{
    const id = useParams()
    const tID = id.tripID 
    const componentRef = useRef();
    
    
   
return(
    <>
    
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-5 col-md-9 admin-content table-responsive">
            
            <Manifest trip_id={tID} ref={componentRef} />
            <div className="manifest">
                <ReactToPrint
                    trigger={() => <button className="btn btn-primary aln-right">Print Manifest</button>}
                    content={() => componentRef.current}
                />
            </div>
            
            
            </div>
        </div>
    </div> 
    </>
)
}

export default PrintManifest;