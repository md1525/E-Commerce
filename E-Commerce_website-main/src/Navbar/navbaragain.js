import React from "react";
import './navbaragain.css';
import {Link} from 'react-router-dom';

function navbar_again(){
    

    return(
        <div className="nav1_container">
            <div className="nav_first">
                <h4>All</h4>
            </div>
            <div className="nav_left">
                <p>Best Sellers</p>
                <p><Link to="/products/electronics" className="links">Mobiles</Link></p>
                <p>Customer Service</p>
                
                <p><Link to="/products" className="links">Today's Deals</Link></p>
                
                <p><Link to="/products/jewelery" className="links">Fashion</Link></p>
                
                <p><Link to="/products/electronics" className="links">Electronics</Link></p>
                <p>Books</p>
                <p>Prime</p>
                <p>New Releases</p>
                <p>Home & Kitchen</p>
                <p>Amazon Pay</p>
            </div>
        </div>
    );

};
export default navbar_again;