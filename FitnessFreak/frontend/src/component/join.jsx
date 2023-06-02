import React, { useState } from 'react'
import '../assets/css/join.css'
import pic from '../assets/images/join.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Join() {
    const navigate = useNavigate()
    const [first,setfirst]=useState('')
    const [last,setlast]=useState('')
    const [mobile,setmobile]=useState('')
    const [email,setemail]=useState('')

    const saveData = ()=>{
        if(!first || !last || !mobile || !email){
             toast.error("Please Enter all Fields")
        }
        else if (mobile.length !== 10) {
            toast.error("Invalid Mobile number")
        }
        else if(first.length<3){
            toast.error("Name must have minimum 3 characters")
        }
        else if (mobile[0] < 6 ) {
            toast.info("Number must have start with 7-9")
          }
        else{
            toast.success('Join Succesfully!!')
            navigate("/")
        }
    } 

    return (
        <div className="container-fluid">
                <h3 className='joinus_title'>JOIN US</h3>
            <div className="row join">
                <div className="col-md-4 join_right">
                    <img src={pic} alt="" /> 
                </div>
                <div className="col-md-8 join_left">
                <div className="row">
                        <div className="col-md-6">
                            <input type="text" className='join_form' placeholder='First Name' 
                            onChange={((e)=>setfirst(e.target.value))}
                            />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className='join_form' placeholder='Last Name'
                            onChange={((e)=>setlast(e.target.value))}
                            />
                        </div>
                        <div className="col-md-12">
                            <input type="number" className='join_form' placeholder='Mobile'
                            onChange={((e)=>setmobile(e.target.value))}
                            />
                        </div>
                        <div className="col-md-12">
                            <input type="email" className='join_form' placeholder='Email '
                            onChange={((e)=>setemail(e.target.value))}
                            />
                        </div>
                        <button className='contact_btn' onClick={saveData}>JOIN</button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    )
}

export default Join