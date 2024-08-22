import { useEffect, useState } from "react";
import  Table  from "react-bootstrap/Table";
import axios from "axios";
import editing from "../image/edit.png";
import deleting from "../image/delete.png"
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const Update=()=>{
    const [mydata,setMydata]=useState([]);
    
    const myNav= useNavigate();

    const loadData=()=>{
        let url="http://localhost:3000/car";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[]);

    const myDel=(myid)=>{
        let url=`http://localhost:3000/car/${myid}`;
        axios.delete(url).then((res)=>{
            message.success("record deleted");
            loadData();
        })
    }
     
    const myEdit=(myid)=>{
        myNav(`/myedit/${myid}`)
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td> {key.carno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
                <td> 
                    <a href="#">
                    <img src={editing} alt="" width="30px" height="30px" onClick={()=>{myEdit(key.id)}} /> </a>
                    <a href="#">
                    <img src={deleting} alt="" width="20px" height="20px" onClick={()=>{myDel(key.id)}}/>
                    </a>
                     </td>
            </tr>
            </>
        )
    })
    return(
        <>
         <h1>Update Car Data</h1>

         <Table striped bordered hover>
            <thead>
                <tr>
                <th>Car no</th>
                <th>Car name</th>
                <th>City</th>
                <th>Car charges/hour</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
         </Table>
        </>
    )
}

export default Update;


