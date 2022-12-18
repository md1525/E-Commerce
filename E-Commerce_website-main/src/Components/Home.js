/* import { async } from "@firebase/util"; */
import React  from "react";
import {Link} from 'react-router-dom';
import NavbarAgain from '../Navbar/navbaragain';
import Navbar from "../Navbar/navbar";
import './home.css';
import Card from '../cards/cards';
import Footer from '../footer/footer';
import img1 from '../images/image1.jpg';
const Home=()=>{
    
return(
    <div className="main_body">
    < Navbar/>
    <NavbarAgain />
    
    <div >
        
        <Link to="/products" ><img  className="image1"  src={img1} alt=""  /></Link>
    </div>
    <Card  />
    <p className="navtotop">Back to top</p>
    <Footer />

    </div>
    
);

};
 export default Home;