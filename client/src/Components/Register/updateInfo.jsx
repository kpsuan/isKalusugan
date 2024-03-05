import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import '../../App.css'
import '../Register/updateInfo.css'


import logo from '../../LoginAssets/logo.png'
import video from '../../LoginAssets/med.mp4'
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    college: '',
    degree: '',
    graduatingThisTerm: '',
    registrationStatus: '',
    yearLevel: '',
    degreeLevel: '',
    sex: '',
    department: '',
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm('Are you sure you want to save changes?');
    if (isConfirmed) {
      Axios.post('http://localhost:3002/updateInfo', {
        FirstName: formData.firstName,
        MiddleName: formData.middleName,
        LastName: formData.lastName,
        College: formData.college,
        Degree: formData.degree,
        GraduatingThisTerm: formData.graduatingThisTerm,
        RegistrationStatus: formData.registrationStatus,
        YearLevel: formData.yearLevel,
        DegreeLevel: formData.degreeLevel,
        Sex: formData.sex,
        Department: formData.department
      }).then(() => {
        navigateTo('/');
      }).catch(error => {
        console.error('Error updating user info:', error);
        // Handle error
      });
    } else {
      console.log('Changes not saved.');
    }
  };
  const renderDegree = () => {
    if (formData.department === 'clovers') {
      return (
        <>
          <td>Course:</td>
          <td>
            <select name="degree" value={formData.degree} onChange={handleChange}>
              <option value="">Select Degree:</option>
              <option value="bio">BS Biology</option>
              <option value="ph">BS Public Health</option>
              <option value="mb">Masters in Biology</option>
            </select>
          </td>
        </>
      );
    }
    if (formData.department === 'Hum') {
      return (
        <>
          <td>Course:</td>
          <td>
            <select name="degree" value={formData.degree} onChange={handleChange}>
              <option value="">Select Degree:</option>
              <option value="CMS">BA Communication and Media Studies</option>
              <option value="LIT">BA Literature</option>
              <option value="HIS">BA History</option>
            </select>
          </td>
        </>
      );
    }
    if (formData.department === 'SS') {
      return (
        <>
          <td>Course:</td>
          <td>
            <select name="degree" value={formData.degree} onChange={handleChange}>
              <option value="">Select Degree:</option>
              <option value="CD"> BA Community Development </option>
              <option value="LIT">BS Economics</option>
              <option value="POLSCI">BA Political Science </option>
              <option value="PSYCH">BA Psychology</option>
              <option value="SOCIO">BA Sociology</option>
            </select>
          </td>
        </>
      );
    }
    if (formData.department === 'PE') {
      return (
        <>
          <td>Course:</td>
          <td>
            <select name="degree" value={formData.degree} onChange={handleChange}>
              <option value="">Select Degree:</option>
              <option value="PE">Diploma in Physical Education</option>
            </select>
          </td>
        </>
      );
    }
    if (formData.department === 'DPSM') {
      return (
        <>
          <td>Course:</td>
          <td>
            <select name="degree" value={formData.degree} onChange={handleChange}>
              <option value="">Select Degree:</option>
              <option value="APM">BS Applied Mathematics</option>
              <option value="CHEM"> BS Chemistry </option>
              <option value="CS">BS Computer Science</option>
              <option value="STAT">BS Statistic</option>
            </select>
          </td>
        </>
      );
    }
    return null; // No Department field if college is not CAS
  };
  
  return (
    <div className="updateInfo flex">
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
    <form onSubmit={handleSubmit}>
    <h3>Complete your profile</h3>
      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Middle Name:</td>
            <td>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Degree Level:</td>
            <td>
              <select name="degreeLevel" value={formData.degreeLevel} onChange={handleChange}>
                <option value="">Select Degree Level</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Year Level:</td>
            <td>
              <select name="yearLevel" value={formData.yearLevel} onChange={handleChange}>
                <option value="">Select Year Level</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </td>
          </tr>
          
          <tr>
            <td>College:</td>
            <td>
              <select name="college" value={formData.college} onChange={handleChange}>
                <option value="">Select College</option>
                <option value="CAS">College of Arts and Sciences</option>
                <option value="CFOS">College of Fisheries and Ocean Sciences</option>
                <option value="CM">College of Management</option>
                <option value="SOTECH">School of Arts and Technology</option>
              </select>
            </td>
          </tr>
          <td>Department:</td>
          <td>
            <select name="department" value={formData.department} onChange={handleChange}>
              <option value="">Select Department</option>
              <option value="clovers">Division of Biological Sciences</option>
              <option value="Hum">Division of Humanities</option>
              <option value="DPSM">Division Physical Sciences and Mathematics</option>
              <option value="SS">Division of Social Sciences</option>
              <option value="PE">Department of Physical Education</option>
              <option value="PEd">Division of Professional Education</option>
              <option value="NA">NA</option>
            </select>
          </td>
          <tr>
          {renderDegree()}
          </tr>
          <tr>
            <td>Graduating this term?</td>
            <td>
              <label>
                <input type="radio" name="graduatingThisTerm" value="Yes" onChange={handleChange} />Yes
              </label>
              <label>
                <input type="radio" name="graduatingThisTerm" value="No" onChange={handleChange} />No
              </label>
            </td>
          </tr>
        
          <tr>
            <td>Sex:</td>
            <td>
              <label>
                <input type="radio" name="sex" value="Male" onChange={handleChange} />Male
              </label>
              <label>
                <input type="radio" name="sex" value="Female" onChange={handleChange} />Female
              </label>
              <label>
                <input type="radio" name="sex" value="Prefer not to Say" onChange={handleChange} />Prefer not to Say
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit"  className="btn flex">Submit</button>
    </form>
    </div>
    </div>
  );
};
export default Form;
