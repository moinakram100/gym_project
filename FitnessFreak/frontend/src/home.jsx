import React from 'react'
import './App.css';
import pic from './assets/images/pic.png'
import pic2 from "./assets/images/pic2.png"
import Footer from './component/footer';
import Brand from './component/brand';
import Program from './component/program';
import Services from './component/services';
import Trainer from './component/trainer';
import Pricing from './component/pricing';
import Navbar from './component/navbar';

function Home() {
  return (
    <div className="app">
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 left">
              <div className="title">
                <h2>Transform Your <br /> Fitness Into Shape</h2>
              </div>
              <div className="title2">
                <h6>An exercise system that keeps you safe, makes thing simple and gives you support so you feel capable and confident.</h6>
              </div>
              <div className="left_image">
                <img src={pic} alt="" />
                <div className="title3">
                  <h6>Affordable Training and Eating Plane</h6>
                  <h6>5 Star Rated Personal Trainer</h6>
                  <h6>14 day Free Return on Purchase</h6>
                </div>
              </div>
              <div className="title4">
                <div className="inner">
                  <h3>200+</h3>
                  <h6>EXPERT COACHES</h6>
                </div>
                <div className="inner">
                  <h3>1200+</h3>
                  <h6>MEMBER JOINED</h6>
                </div>
                <div className="inner">
                  <h3>100+</h3>
                  <h6>FITNESS PROGRAMS</h6>
                </div>
              </div>
              <div className="search">
                <input type="text" className="box" placeholder="Email" />
                <span className="try">
                  Get Started <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 right">
              <div className="right_inner">
                <img src={pic2} alt="workout" className='workout_image' />
              </div>
            </div>
          </div>
        </div>
      </main>
    <Brand/>
    <Program/>
    <Services/>
    <Trainer/>
    <Pricing/>
    </div>
  )
}

export default Home