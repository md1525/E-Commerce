import React from 'react';
import Navbar from '../Navbar/navbar';
import Navbar_again from '../Navbar/navbaragain';
import Footer from '../footer/footer';
import './contactusdesign.css'
const Contact=()=>{
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div >
      <Navbar />
      <Navbar_again />
    <div className='main_box'>
       <h1 className='cona'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='field'>
          <label>
            <p className='pstyle'>Name</p>
            <input className='basic' name="name" placeholder="Your name.." />
          </label>
          <label>
            <p className='pstyle'>Email </p>
            <input className='basic' name="email" placeholder="Your Email.." />
          </label>
          <label>
            <p className='pstyle'>Contact-no</p>
            <input className='basic' name="Contact-no" placeholder="Your contact no.." />
          </label>
          <label>
            <p className='pstyle'>Subject</p>
            <input className='subject' name="Subject" placeholder="write Something.." />
          </label>
        </fieldset>
        <button className='button' type="submit">Submit</button>

      </form>
    </div>
    <Footer />
    </div>
  );
};
export default Contact;