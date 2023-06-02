import React from 'react'
import logo from '../assets/images/ff.png'
import '../assets/css/footer.css'
import { FaFacebook as Fb,FaInstagram as Insta,FaEnvelope as Msg,FaMapMarkerAlt as Place,
         FaPhoneAlt as Call,FaRegCopyright as Copy } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row footer my-5">
                    <div className="col-md-3">
                        <img className="footer_logo" src={logo} alt="logo"/>
                        <span className='footerName text-light'>FitnessFreak</span>
                        <h6 className='footerinfo text-light text-left'>At FitnessFreak,our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul.</h6>
                        <div className='text-center ficons'>
                        <span><Fb size={30} color="white"/></span>
                        <span><Insta size={30} color="white"/></span>
                        </div>
                    </div>

                    <div className="col-md-2 my-2">
                    <h5 className='footerName text-light '>INFORMATION</h5>
                    <ul className='flist '>
                        <li className='text-left'>About us</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                    </div>

                    <div className="col-md-2 my-2">
                    <h5 className='footerName text-light'>CONTACT</h5>
                    <ul className='flist'>
                        <li><Call/><span>091-9181716151</span></li>
                        <li><Msg/><span>Ffreak@gmail.com</span></li>
                        <li><Place/><span>Noida,sector-16</span></li>
                    </ul>
                    </div>

                    <div className="col-md-10">
                          <hr className='footer_line'/>
                    </div>

                    <div className="col-md-10 copyinfo">
                     <p><Copy color='white'/><span className='text-white'>2023 FOODCOURT. ALL RIGHTS RESERVED.</span></p>
                   </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer