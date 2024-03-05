import React, {useState}from "react";
import '../Register/Register.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

import logo from '../../LoginAssets/logo.png'
import video from '../../LoginAssets/med.mp4'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";


const Register = () => {
    const[email, setEmail] = useState("")
    const[userName, setUserName] = useState("")
    const[password, setPassword] = useState("")
    const navigateTo = useNavigate()

    const createUser = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3002/register',{
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            navigateTo('/updateInfo')
            
            setEmail('')
            setUserName('')
            setPassword('')
        })
    }

    return (
        <div className="registerPage flex">
        <div className="container flex">
          <div className="videoDiv">
                <video src={video} autoPlay loop muted />

                <div className="textDiv">
                    <h2 className="title">isKalusugan</h2>
                    <p>Making healthcare accessible</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to ={'/'}><button className="btn">Sign in</button></Link>
                </div>
          </div> 

            <div className="formDiv flex ">
                <div className="headerDiv">
                    <img src={logo} alt ="Logo Image"/>
                    <h3>Sign Up</h3>
                </div>

                <form action="" className="form grid">                    
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <FaUserShield  className="icon"/>
                            <input type="email"  id='email' placeholder="Enter email" onChange={(event) => {setEmail(event.target.value)}} />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield  className="icon"/>
                            <input type="text"  id='email' placeholder="Enter username" onChange={(event) => {setUserName(event.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill   className="icon"/>
                            <input type="password"  id='password' placeholder="Enter password" onChange={(event) => {setPassword(event.target.value)}}/>
                        </div>
                    </div>

                    <button type="submit" className="btn flex" onClick={createUser}>
                        <span>Register</span>
                        <AiOutlineSwapRight className="icon" />
                    </button>

                    <span className="forgotPassword">
                        Forgot your password? <a href="">Click Here</a>
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register
