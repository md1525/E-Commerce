import React from "react";
import {Link} from 'react-router-dom';
import Searchbar from './searchbar';
import './navbar.css';
import { useUserAuth } from "../context/UserAuthContext";
function Navbar(){
    const {user, logOut} =useUserAuth();
    const handleLogOut =async ()=>{
        try{
            await logOut();

        }catch(err){
            console.log(err.message);
        }
    }

return(
    <div className="Nav_container">
            <div className="navbar_left">
            <div className="logo">
                <h2>
                    Amazon
                   
                </h2>
                </div>
            
            <div className="address">
                <p><i >hello, {user && user.email}</i></p>
                <h5 className="address1">
                     Enter your address
                </h5>
            </div>
            </div>
            <div className="search">
                <Searchbar></Searchbar>
            </div>
            
            

            <div className="navbar_right">
                <p>Country Flag</p>
                <p onClick={handleLogOut}>LogOut</p>
                <p><Link to="/home" className="linkss">Home</Link></p>
                <p>My Orders</p>
                <p>Cart</p>
                <p><Link to="/contactUs" className="linkss" >Contact Us</Link></p>
            </div>
            
        
    </div>
);
};

export default Navbar;
