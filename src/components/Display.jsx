import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Display=()=>{
const [mydata,setMydata]=useState([]);
const myNav=useNavigate();

const loadData=()=>{
    let url="http://localhost:3000/car";
    axios.get(url).then((res)=>{
        setMydata(res.data);
    })
}

useEffect(()=>{
    loadData();
},[]);

const bookCar=(carno)=>{
    myNav(`/booking/${carno}`)
}

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td> {key.carno}  </td>
            <td> {key.name}  </td>
            <td> {key.city}  </td>
            <td> {key.fees}  </td>
            <td> <button onClick={()=>{bookCar(key.carno)}}>Book</button> </td>
        </tr>
        </>
    )
})
const displaybookedcar=()=>{
    myNav("/booked")
}
    return(
        <>
        <h1>Car Data</h1>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Car no</th>
                <th>Car name</th>
                <th>City</th>
                <th>Car charges/hour</th>
                </tr>
                
            </thead>
            <tbody>
                {ans}
            </tbody>
            
        </Table>
        <button onClick={displaybookedcar}>Display Booked Car Data</button>
        </>
    )
}

export default Display;

