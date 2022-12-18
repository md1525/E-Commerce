import React,{useState} from 'react';
import {Alert, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import GoogleButton from "react-google-button";
import './Login.css';
import ecommerse from '../images/ecommersepage.webp'
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';



const Login =()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [error, setError]=useState("");
    const navigate = useNavigate();
    const {logIn ,googleSignIn}=useUserAuth(); 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            navigate("/home");
        } catch (err){
            setError(err.message);
        }
    };
    const handleGoogleSignIn = async (e)=>{
            e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        }catch (err){
            setError(err.message);
        }
    };


return(
    
        

    <div className='box'> 
        <h1 className='title'>E-Commerce</h1>
        {error && <Alert varient="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group >
                <Form.Control className='t-1' type="email" placeholder="Email address" 
                onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Control className='t-1' type="password" placeholder="password"
                onChange={(e)=> setPassword(e.target.value)}  />
            </Form.Group>
            <div >
                <Button className='t-2' variant="primary" type='submit'>Log In</Button>
            </div>
        </Form>

        
        
        
        <GoogleButton
            className="g-button"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        
    
    
       <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
       <hr />
       <h2 className='term'>Conditions of Use
        </h2>
        <p>Welcome to Amazon.com. Amazon.com Services LLC and/or its affiliates ("Amazon") provide website features and other products and services to you when you visit or shop at Amazon.com, use Amazon products or services, use Amazon applications for mobile, or use software provided by Amazon in connection with any of the foregoing (collectively, "Amazon Services"). By using the Amazon Services, you agree, on behalf of yourself and all members of your household and others who use any Service under your account, to the following conditions.</p>

        <h3 className='term'>OUR ADDRESS</h3>
        <p>Amazon.com, Inc.</p>
        <p>P.O. Box 847211</p>
        <p>India, BR 98108-1226</p>
        <p>https://www.amazon.com</p>

    </div>
    
    
)
};
export default Login;