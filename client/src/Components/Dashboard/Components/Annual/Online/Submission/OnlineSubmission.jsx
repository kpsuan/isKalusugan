import React from "react";
import Sidebar from '../../../SideBar Section/Sidebar'
import Top from '../../../Profile/Components/Header'
import '../../../../../../App.css'
import './uploader.css'
import FileUpload from './DocumentUploader/FileUpload'

import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosLink } from "react-icons/io";



//import '../../onlinePE.scss'

const OnlineSubmission = () => {
    const headerTitle = "Annual Physical Examination";

    return (
        <div className="dashboard flex">
           <div className="dashboardContainer flex">
            <Sidebar/>
                <div className='mainContent'>
                    <Top title={headerTitle}/> 
                        <div className="titleUpload flex">
                            <h4><b>Preenlistment Period </b> <span class="lighter-font">(January 12-20, 2024)</span></h4>
                                <h2> <span class="text2">Submit Medical Documents</span></h2>
                        </div>
                        <div className="cardSection-online flex">
                            <div className="rightCard-online flex">
                                <div className="uploadDocs flex">
                                    <div className="text-area">
                                        <h4><FaCloudUploadAlt /> Upload <span class="lightertext">Annual Physical Examination Form*</span></h4>
                                    </div>
                                    <FileUpload/>
                                    <div className="line-separator"></div>
                                </div>
                                <div className="uploadDocs flex">
                                    <div className="text-area">
                                        <h4><FaCloudUploadAlt /> Upload <span class="lightertext">Laboratory Results (CBC & X-Ray)*</span></h4>
                                        <br></br><form><label className="medCert">Medical Certificate Number:<input type="text" /></label></form>
                                    </div>
                                    <FileUpload/>
                                    <div className="line-separator"></div>
                                </div>
                                <div className="uploadDocs flex">
                                    <div className="text-area">
                                        <h4><FaCloudUploadAlt /> Upload <span class="lightertext">Request for PE</span></h4>
                                    </div>
                                    <FileUpload/>
                                </div> 
                                
                            </div>
                        
                        <div className="leftCard-online ">
                            <div className="main-online flex">
                                <div className="textDiv">
                                    <h1><IoIosStarOutline /> General FAQs</h1>

                                    <div className="link-flex">
                                        <ul>
                                            <li><span className="flex link">List of Requirements for Online PE </span></li>
                                            <li><span className="flex link">Online Physical Examination Guide </span></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="line-separator"></div>

                                    <h1><IoIosLink /> Featured Links</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineSubmission
