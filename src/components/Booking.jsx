import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const Booking=()=>{
    const {carno}=useParams();
    const [input,setInput]=useState({});
    const myNav=useNavigate();

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      let api="http://localhost:4000/user";
      axios.post(api,{...input,carno:carno}).then((res)=>{
        message.success("data saved");
        myNav("/booked")
      })
    }

    return(
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter userid</Form.Label>
        <Form.Control type="text" name='userid' value={input.userid} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter User Name</Form.Label>
        <Form.Control type="text" name='username' value={input.username} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter User Email</Form.Label>
        <Form.Control type="text" name='useremail' value={input.useremail} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Booking Time</Form.Label>
        <Form.Control type="date" name='allottime' value={input.allottime} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Booking Duration</Form.Label>
        <Form.Control type="text" name='allotduration' value={input.allotduration} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Booking;



