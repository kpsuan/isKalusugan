import React from "react";
import Sidebar from '../../SideBar Section/Sidebar'
import Top from '../../Profile/Components/Header'
import '../../../../../App.css'
import './onlinePE.scss'
import Accordion from './Accordion/Accordion'

const OnlinePE = () => {
    const headerTitle = "Annual Physical Examination";

    return (
        <div className="dashboard flex">
           <div className="dashboardContainer flex">
            <Sidebar/>
                <div className='mainContent'>
                    <Top title={headerTitle}/>
                            <div className="titleOnlinePE flex">
                                <h4><b>Preenlistment Period </b> <span class="lighter-font">(January 12-20, 2024)</span></h4>
                                    <h2> <span class="text2">Online Medical Examination System</span></h2>
                                <Accordion/>
                                <div className="buttons flex">
                                    <button className='btn'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default OnlinePE
