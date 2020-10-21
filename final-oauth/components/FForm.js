
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import Login from '../login/login.js'

const FForm = ()=>{

    const { register, handleSubmit, errors } = useForm();

    const onSubmit=({email,password})=>{
       
    }
    return(
        <div className="form">
            <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" name="email" ref={register} placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label id="pass">Password</Form.Label>
    <Form.Control type="password" name="password" ref={register} placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    <style jsx>{`.form{
        padding:1rem;
    }
   `}</style>
        </div>
    )
}
export default FForm;