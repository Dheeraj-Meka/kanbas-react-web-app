import { FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaCheckCircle, FaFileExport, FaFileImport, FaHome, FaPencilAlt } from "react-icons/fa";
import "./index.css";


function StatusList() {
    return ( 
        <div className="col-3 ps-5 d-none d-lg-block">
            
                      <div><b>Course Status</b></div>
                      <br/>
                      <div className="row" style={{display: "flex", justifyContent:"space-between"}}>
                        <div className="col">
                            <button className="w-100 btn btn-light btn-outline-secondary btn-sm m-0 btn-unpublish" type="submit" >
                                <FaBan/> Unpublish
                            </button>
                        </div>
                        <div className="col">
                            <button className="w-100 btn btn-light btn-outline-secondary btn-sm m-0 btn-publish" type="submit" disabled>
                                <FaCheckCircle/> Published
                            </button>
                        </div>
                    </div><br/>                    
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaFileImport/> Import Existing Content
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaFileExport/> Import From Commons
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaHome/> Choose Home Page
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaChartBar/> View Course Stream
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaBullhorn/> New Announcements
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaChartBar/> New Analytics
                          </button>
                      </div>
                      <div>
                          <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                              <FaBell/> View Course Notifications
                          </button>
                      </div>
                
                      <div className="d-flex justify-content-between mt-3 mb-1">
                        <b><span>To Do</span></b>
                </div>
                <hr/>
                <div className="mb-3">
                  <FaPencilAlt/><span className="ms-3 wd-text-red">Grade A1 - ENV + HTML</span>
                    <small>
                    <p>100 points <b>.</b> Feb 17 at 11:45am</p>
                    </small>                       
                </div><br/>
            
                      <div className="d-flex justify-content-between mt-3 mb-1">
                              <b>Coming Up</b>
                              <small><FaCalendar/><span className="wd-text-red">&nbsp;View Calendar</span></small>
                      </div>
                      <hr/>
                      <div className="mb-3">
                          <FaCalendar/><span className="ms-3 wd-text-red">Lecture</span>
                          <small>
                          <p>CS1234.Spring 2024.56789</p>
                          <p>Feb 17 at 11:45am</p>
                          </small>                       
                      </div>

                  </div>   
    );
}
export default StatusList;