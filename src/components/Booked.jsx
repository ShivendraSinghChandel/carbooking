import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Booked=()=>{
const [mydata,setMydata]=useState([]);

const loadData=()=>{
    let url="http://localhost:4000/user";
    axios.get(url).then((res)=>{
        setMydata(res.data);
    })
}

useEffect(()=>{
    loadData();
},[]);

const removeuser=(id)=>{
    const url=`http://localhost:4000/user/${id}`;
    axios.delete(url).then(()=>{
        message.success("user removed");
        loadData();
    })
}


const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td> {key.userid}  </td>
            <td> {key.username}  </td>
            <td> {key.useremail}  </td>
            <td> {key.allottime}  </td>
            <td> {key.allotduration} </td>
            <td> {key.carno} </td>
            <td><button onClick={()=>{removeuser(key.id)}}>Remove</button></td>
        </tr>
        </>
    )
})
    return(
        <>
        <h1>Car Data</h1>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Booking Time</th>
                <th>Booking Duration</th>
                <th>Booked Car No</th>
                </tr>
                
            </thead>
            <tbody>
                {ans}
            </tbody>
            
        </Table>
        </>
    )
}

export default Booked;

