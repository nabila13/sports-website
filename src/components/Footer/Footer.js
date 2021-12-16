import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer w-100 py-4 px-5 d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-lg-evenly justify-content-md-center justify-content-sm-center justify-content-center align-items-md-center align-items-start'>
        <div className="left text-start w-md-50 my-lg-2 my-md-3 my-sm-3 my-3  w-lg-75 mx-lg-4 mx-md-2 mx-2">
        <h1>Contact Info:</h1>
        <br/>
        <br/>
        <h5><span className="fw-bolder">HotLine Number:</span> 01811241234</h5>
            <h5><span className="fw-bolder">Email Address:</span> www.hello123@gmail.com</h5>
            <h5>
                <span className="fw-bolder">Head Office: <br /> </span>GEC Circle,opposite to Sanmar Ocean City,Chittgong,Bangladesh.
            </h5>
        </div>
        <div className="right text-start pb-2 my-lg-2 my-md-3 my-sm-3 my-3 w-md-50 w-lg-75 mx-lg-4 mx-md-2 mx-2">

        <h1>website activity in brief</h1>

        <br />
        <h5>Total Enrolled students: 3.4k+</h5>
        <h5>Total Certificate Supplied: 1k+</h5>
        <br />
        <h5>Top 3 Popular Courses:
            <li>Learn Soccer from master!!</li>
            <li>Become a boxing legend!</li>
            <li>Be a cycling master!</li>
             </h5>
        </div>
                </div>
    );
};

export default Footer;