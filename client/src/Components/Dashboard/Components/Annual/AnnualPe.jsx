import React from "react";
import Sidebar from "../SideBar Section/Sidebar"
import Top from "../Profile/Components/Header"
import '../../../../App.css'
import './annual.css'
import { Link } from 'react-router-dom'; 

const MainPE = () => {
    const headerTitle = "Annual Physical Examination";

    return (
        <div className="dashboard flex">
           <div className="dashboardContainer flex">
            <Sidebar/>
                <div className='mainContent'>
                    <Top title={headerTitle}/>
                            <div className="titlePE flex">
                                <h4><b>Preenlistment Period </b> <span class="lighter-font">(January 12-20, 2024)</span></h4>
                                    <h2> <span class="text2">Choose preferred mode of Annual Physical Examination</span></h2>

                                <div className="choicePE">
                                    <div className="choice1">
                                        <a href="/onlinePE">
                                        <span class="label-PE">Online Physical Examination
                                            <div className="small-desc">Done through online submission</div>
                                        </span>
                                        </a>
                                    </div>
                                    
                                    <div className="choice2">
                                        <span class="label-PE">Schedule In-Person Examination
                                            <div className="small-desc">Get your schedules via the system</div>
                                        </span>
                                    </div>
                                </div>    
                            </div>

                                

                        </div>
                    </div>
                </div>
    )
}

export default MainPE
