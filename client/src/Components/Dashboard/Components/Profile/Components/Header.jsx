import React from 'react'
import '../../Body Section/body.css'
import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import img from '../../../Assets/admin.jpg'
export const Profile2 = ({ title }) => {
    return (
      <div className='topSection'>
        <div className="headerSection flex">
          <div className="title">
          <h1>{title}</h1>
          </div>
  
          <div className="searchBar flex">
            <input type="text" placeholder='Search' />
            <BiSearchAlt className='icon'/>
          </div>
  
          <div className="adminDiv flex">
            <TbMessageCircle className='icon'/>
            <IoIosNotificationsOutline className='icon'/>
            <div className="adminImage">
              <img src={img} alt="Admin Image" />
            </div>
          </div>
        </div>
        </div>
    )
  }

export default Profile2