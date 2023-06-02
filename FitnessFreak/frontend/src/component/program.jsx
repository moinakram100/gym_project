import React from 'react'
import '../assets/css/program.css'
import pic from "../assets/images/strength.png"
import pic2 from "../assets/images/health.png"
import pic3 from "../assets/images/yoga.png"
import pic4 from "../assets/images/cax.png"

function Program() {
    return (
        <div className="container-fluid program">
            <div className="row my-5">
                <h3 className='program_title'>OUR PROGRAMS</h3>
                <h2 className='program_title2'>Build Your Best Body</h2>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card_img">
                            <img src={pic} alt="" className='strength_image' />
                        </div>
                        <h2>Strength Training</h2>
                        <p>Strength training is an important part of an overall fitness program. Here's what strength training can do for you — and how to get started.</p>
                        <div className="card_btn">
                            <h5 className='btn_title'>Read More </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card_img">
                            <img src={pic2} alt="health_image" />
                        </div>
                        <h2>Health & Fitness</h2>
                        <p>Whether you were once much more physically active or have never been one to exercise regularly, now its great time to start an exercise.</p>
                        <div className="card_btn">
                            <h5 className='btn_title'>Read More </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card_img">
                            <img src={pic3} alt="yoga_image" />
                        </div>
                        <h2>Yoga</h2>
                        <p>Yoga leads to perfect harmony between mind and body, man and nature, individual consciousness and universal consciousness.</p>
                        <div className="card_btn">
                            <h5 className='btn_title'>Read More </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card_img">
                            <img src={pic4} alt="exercise" />
                        </div>
                        <h2>Cardiac Exercise</h2>
                        <p>Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. s</p>
                        <div className="card_btn">
                            <h5 className='btn_title'>Read More </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program