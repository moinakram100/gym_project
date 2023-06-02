import React from 'react'
import '../assets/css/contact.css'
import { FaFacebookF as Fb, FaTwitter as Twitter, FaInstagram as Insta } from "react-icons/fa";

function Contact() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h3 className='contact_title'>CONTACT US</h3>
                <div className="col-md-5 contactCard">
                    <div className="contact_card">
                        <h3>Get In Touch</h3>
                        <h5>918-171-6151</h5>
                        <h5>Ffreak@gmail.com</h5>
                        <h6>10 block-D, sector-16 Noida</h6>
                        <h6>Mon-Fri <span className='inner_detail'>9:00 am - 10:00 pm</span></h6>
                        <h6>Sat-Sun <span className='inner_detail'>Closed</span> </h6>
                        <ul>
                            <li id='first'><Fb className='fb' /></li>
                            <li><Insta className='insta' /></li>
                            <li><Twitter className='tweet' /></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 contactForm">
                    <div className="row contact_form">
                        <div className="col-md-6">
                            <input type="text" className='input_form' placeholder='Name' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className='input_form' placeholder='Mobile' />
                        </div>
                        <div className="col-md-12">
                            <input type="text" className='input_form' placeholder='Email' />
                        </div>
                        <div className="col-md-12">
                            <input type="text" className='input_form' placeholder='Message ' />
                        </div>
                        <button className='contact_btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact