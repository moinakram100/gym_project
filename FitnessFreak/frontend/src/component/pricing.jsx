import React from 'react'
import '../assets/css/pricing.css'
import { FaCheck as True } from "react-icons/fa";
import { IoClose as False } from "react-icons/io5";


function Pricing() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h2 className='pricing_title'>PRICING</h2>
                <h1 className='pricing_title2'>Get in Reasonable Price</h1>
                <div className="col-md-3">
                    <div className="pricing_card">
                        <div className="pricing_head">
                            <h5>$</h5>
                            <h1 className='price_tag'>15 <span className='price_tag2'>/ per month</span></h1>
                            <h2 className='pricingCard_title'>Basic</h2>
                        </div>
                        <div className="pricing_details">
                            <div className="pricingDetails_inner">
                                <h6><True className='true' /> Training <span> Overview</span></h6>
                                <h6><False className='false' /> Beginner <span> Classes</span></h6>
                                <h6><False className='false' /> Personal<span> Training</span></h6>
                                <h6><False className='false' /> Olympic <span> Weightlifting</span></h6>
                                <h6><False className='false' /> Foundation <span> Training</span></h6>
                            </div>
                                <h5 className='pricing_btn'>Get Started</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="pricing_card">
                        <div className="pricing_head">
                            <h5>$</h5>
                            <h1 className='price_tag'>20 <span className='price_tag2'>/ per month</span></h1>
                            <h2 className='pricingCard_title'>Standard</h2>
                        </div>
                        <div className="pricing_details">
                            <div className="pricingDetails_inner">
                                <h6><True className='true' /> Training <span> Overview</span></h6>
                                <h6><True className='true' /> Beginner <span> Classes</span></h6>
                                <h6><False className='false' /> Personal<span> Training</span></h6>
                                <h6><False className='false' /> Olympic <span> Weightlifting</span></h6>
                                <h6><False className='false' /> Foundation <span> Training</span></h6>
                            </div>
                                <h5 className='pricing_btn'>Get Started</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="pricing_card">
                        <div className="pricing_head">
                            <h5>$</h5>
                            <h1 className='price_tag'>35 <span className='price_tag2'>/ per month</span></h1>
                            <h2 className='pricingCard_title'>Golden</h2>
                        </div>
                        <div className="pricing_details">
                            <div className="pricingDetails_inner">
                                <h6><True className='true' /> Training <span> Overview</span></h6>
                                <h6><True className='true' /> Beginner <span> Classes</span></h6>
                                <h6><True className='true' /> Personal<span> Training</span></h6>
                                <h6><False className='false' /> Olympic <span> Weightlifting</span></h6>
                                <h6><False className='false' /> Foundation <span> Training</span></h6>
                            </div>
                                <h5 className='pricing_btn'>Get Started</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="pricing_card">
                        <div className="pricing_head">
                            <h5>$</h5>
                            <h1 className='price_tag'>20 <span className='price_tag2'>/ per month</span></h1>
                            <h2 className='pricingCard_title'>Basic</h2>
                        </div>
                        <div className="pricing_details">
                            <div className="pricingDetails_inner">
                                <h6><True className='true' /> Training <span> Overview</span></h6>
                                <h6><True className='true' /> Beginner <span> Classes</span></h6>
                                <h6><True className='true' /> Personal<span> Training</span></h6>
                                <h6><True className='true' /> Olympic <span> Weightlifting</span></h6>
                                <h6><True className='true' /> Foundation <span> Training</span></h6>
                            </div>
                                <h5 className='pricing_btn'>Get Started</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing