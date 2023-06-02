import React, { useState } from 'react'
import '../assets/css/trainer.css'
import { expertData } from '../component/data'

function Trainer() {
    const [expert, setexpert] = useState(expertData)
    return (
        <div className="container-fluid">
            <div className="row trainer">
                <h2 className='trainer_title'>OUR TRAINERS</h2>
                <h6 className='trainer_info'>our Certified Personal Trainer for a year now and absolutely loves helping clients achieve their fitness goals- whether it be losing weight, toning up, or even gaining weight.</h6>

                {
                    expert.map((item) => {
                        return (
                            <>
                                <div className="col-md-3 col-sm-6 col-10 my-2">
                                    <div className="trainer_card" key={item.id}>
                                        <img src={item.pic} alt="" />
                                        <div className="acard-content">
                                            <h2>
                                                {item.name}
                                            </h2>
                                            <h4>{item.dsg}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trainer