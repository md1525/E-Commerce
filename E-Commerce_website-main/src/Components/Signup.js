import React ,{useState} from "react";
import {Form, Alert} from  "react-bootstrap";
import {Button} from "react-bootstrap";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";



const Signup =()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [error, setError]=useState("");
    const navigate = useNavigate();
    const {signUp}=useUserAuth(); 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password);
            navigate("/");
        } catch (err){
            setError(err.message);
        }
    };
return(
    <div className="viewpage">
    <div className='box'>
    <h2 >Firebase Auth Signup</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control className='t-1'
             type="email" 
             placeholder="Email address" 
            onChange={(e) =>setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control className='t-1' 
            type="password"
             placeholder="Password" 
             onChange={(e) =>setPassword(e.target.value)}
            
            />
        </Form.Group>

        <div>
            <Button className='t-2' variant="primary" type="Submit">
                Sign up
            </Button>
        </div>
    </Form>
    <div className='lastl'>
        Already have an account? <Link to="/">Log In</Link>

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
        </div>
        
    </ div>
)
};
export default Signup;