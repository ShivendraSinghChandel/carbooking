import { message } from 'antd';
import axios from 'axios';
import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Insert=()=>{

    const [input,setInput]=useState({});

    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      let api="http://localhost:3000/car";
      axios.post(api,input).then((res)=>{
        message.success("data saved");
      })
    }

    return(
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Car no</Form.Label>
        <Form.Control type="text" name='carno' value={input.carno} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Car Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Car Charges/hour</Form.Label>
        <Form.Control type="text" name='fees' value={input.fees} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;



