import React, { useState } from 'react'
import '../assets/css/brand.css'
import { data } from '../component/data'

function Brand() {
    const [brand, setbrand] = useState(data)
    return (
        <>
            <div className="gym_brand">
                <h4><span> Trusted By Gym Brands</span></h4>
                <div className="container-fluid">
                    <div className="row gym_brands my-3">
                        {
                            brand.map((item) => {
                                return (
                                    <>
                                        <div className="col-md-3 col-sm-6 col-6 brand1">
                                            <div className="brand_name" key={item.id}>
                                                <img src={item.pic} alt="" />
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand