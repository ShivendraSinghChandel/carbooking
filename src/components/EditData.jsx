import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const EditData=()=>{
    const {id}=useParams();
    const [mydata,setMydata]=useState({});
    const myNav=useNavigate();
    

    const loadData=()=>{
        let api=`http://localhost:3000/car/${id}`;
        axios.get(api).then((res)=>{
            message.success("data fetched");
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setMydata((values)=>({...values,[name]:value}))
    }

    const handleSubmit=()=>{
        let url=`http://localhost:3000/car/${id}`;
        axios.put(url,mydata).then((res)=>{
            message.success("data updated")
            myNav("/update")
        })
    }

    return(
        <>
           <h1>Edit student data</h1>
           Enter Roll no : <input type="text" name="carno" value={mydata.carno} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="name" value={mydata.name} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="city" value={mydata.city} onChange={handleInput} /> <br /><br />
           Enter Roll no : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} /> <br /><br />
           <button onClick={handleSubmit}>Save Data</button>
        </>
    )
}


export default EditData;


