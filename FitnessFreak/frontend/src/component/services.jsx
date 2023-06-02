import React from 'react'
import '../assets/css/service.css'
import pic from "../assets/images/fitness.jpg"
import pic2 from "../assets/images/fitness1.jpg"
import { MdOutlineLabelImportant as Point } from "react-icons/md";

function Services() {
  return (
    <div className="container-fluid">
        <div className="row services">
        <h2 className='services_title'>SERVICES</h2>
           <div className="col-md-7 service_left">
              <img src={pic} alt="fitness_image" />
              <img src={pic2} className="fitness_image" alt="fitness_image" />
           </div>
           <div className="col-md-5 service_right">
                <h1 className='service_leftText'>Why Choose Us</h1>
                <p>
                Fitness is about what you can gain. It’s about measuring success by how you feel, not by the scale. It’s about improving physical, mental, and emotional health.
                </p>
                <h5><Point/> OVER 150+ EXPERT COACHES</h5>
                <h5><Point/> TRAIN SMARTER AND FASTER THAN BEFORE</h5>
                <h5><Point/> 1 FREE PROGRAM FOR NEW MEMBER</h5>
                <h5><Point/> RELIABLE PARTNERS</h5>
                <h5><Point/> 24*7 SERVICE</h5>
                <h5><Point/> WE TREND FOR COMPETITONS</h5>
                <h5><Point/> WE ARE LARGER FAMILY IN INDIA</h5>
                <h5><Point/> PERSONAL TRAINING</h5>
                <h5><Point/> AVOID SUPPLEMENT</h5>
                <h5><Point/> SAFE ENVIRONMENT</h5>
                <h5><Point/> FEMALE EXPERTS FOR GIRLS & WOMEN</h5>
                <h5 className='btn_title'>Read More </h5>
           </div>
        </div>
    </div>
  )
}

export default Services