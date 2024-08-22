import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const Search=()=>{
    const [carno,setCarno]=useState("");
    const [mydata,setMydata]=useState([]);

    const mySearch=()=>{
        let url= `http://localhost:3000/car/?carno=${carno}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }

    const ans= mydata.map((key)=>{
        return(
            <>
             <tr>
                <td>{key.carno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
             </tr>
            </>
        );
    })

    return(
        <>
        <h1>Search Car</h1>
         Enter Rollno: <input type="text" value={carno} onChange={(e)=>{setCarno(e.target.value)}} />
         <button onClick={mySearch} style={{marginLeft:"10px", padding:"5px 15px", border:"2px solid whitesmoke", backgroundColor:"black",color:"white",borderRadius:"10px"}}>Search</button>
        <hr size="4" color="red" />
           <Table>
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
        </>
    )
}

export default Search;


