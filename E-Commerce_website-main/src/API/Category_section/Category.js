import React, { useEffect, useState } from "react";
import './Category.css';
import Footer from "../../footer/footer";
import Navbar from "../../Navbar/navbar";
import Navbaragain from '../../Navbar/navbaragain';

function ApiCalling()
{
    const[apiData,setApiData]=useState([]);

    const callApi =()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>setApiData(data))
        .catch((error)=>console.log("Please try another api"));
    };

    useEffect(
        ()=>
        {
            callApi();
        }
    );
    return (
        <div >
            <Navbar />
            <Navbaragain />
            <h1 className="containertitle_design">Today's Deals</h1>
            {apiData.map((value,key)=>(
                <>
                <div className="apistyle">
                <img className="image" src={value.image} />
                <p className="textstyle">{value.title}</p>
                <p className="textstyle">Price -{value.price}</p>
                <p><button className="Add_cart">Add to Cart</button><button className="Buy_Button">Buy Now</button> </p>
                <p>Category - {value.category}</p>
                <p>Rating - {value.rating.rate}</p>
                <p>in Stock- {value.rating.count}</p>
                <p>{value.description}</p>
                <hr />
                </div>

                </>

            ))

            }
            <Footer />
        </div>
    );
};
export default ApiCalling;