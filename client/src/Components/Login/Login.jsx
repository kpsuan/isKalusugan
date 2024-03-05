import React, {useEffect, useState} from "react";
import '../Login/Login.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

import logo from '../../LoginAssets/logo.png'
import video from '../../LoginAssets/med.mp4'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";


const Login = () => {
    const[loginUserName, setLoginUserName] = useState("")
    const[loginPassword, setLoginPassword] = useState("")
    const navigateTo = useNavigate()

    const[loginStatus, setLoginStatus] = useState('')
    const[statusHolder, setstatusHolder] = useState('message')


    const loginUser = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3002/login',{
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
                console.log()
                if(response.data.message || loginUserName == '' || loginPassword == ''){
                    navigateTo('')
                    setLoginStatus('Credentials do not match. Please try again')
                }else{
                    navigateTo('/dashboard')
                }
            
        })
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setstatusHolder('showMessage')
            setTimeout(()=>{
                setstatusHolder('message')
            }, 4000);
        }
    }, [loginStatus])

    const onSubmit = () =>{
        setLoginUserName('')
        setLoginPassword('')
    }

    return (
        <div className="loginPage flex">
        <div className="container flex">
          <div className="videoDiv">
                <video src={video} autoPlay loop muted />

                <div className="textDiv">
                    <h2 className="title">isKalusugan</h2>
                    <p>Making healthcare accessible</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to ={'/register'}><button className="btn">Sign Up</button></Link>
                </div>
    </div> 

            <div className="formDiv flex ">
                <div className="headerDiv">
                    <img src={logo} alt ="Logo Image"/>
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className="form grid" onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>
                    
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield  className="icon"/>
                            <input type="text"  id='username' placeholder="Enter Username" onChange={(event) => {setLoginUserName(event.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill   className="icon"/>
                            <input type="password"  id='password' placeholder="Enter password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
                        </div>
                    </div>

                    <button type="submit" className="btn flex" onClick={loginUser}> 
                        <span>Login</span>
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

export default Login
