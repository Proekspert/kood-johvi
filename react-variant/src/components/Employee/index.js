import '../../style-employee.css';

import Drawer from '../Drawer';
import EmployeesPageWrapper from '../EmployeesPageWrapper';
import Label from '../Label';
import React from "react";
import Role from '../Role';
import placeholderImage from '../../placeholder.png';

const Employee = () => {
  return (
    <EmployeesPageWrapper>
      <Drawer>
        <div className="MuiGrid-root jss184 MuiGrid-container" id="modal_dialog">
          <div className="MuiGrid-root MuiGrid-container">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-5">
              <div className="MuiBox-root jss71">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-justify-xs-space-between">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-outlined jss24 MuiButton-outlinedPrimary MuiButton-disableElevation"
                      tabIndex="0" type="button" id="Close">
                      <span className="MuiButton-label">Close</span>
                      <span className="MuiTouchRipple-root" />
                    </button>
                  </div>
                  <div className="MuiGrid-root jss185 MuiGrid-item">
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-disableElevation"
                      tabIndex="0" type="button" id="Edit">
                      <span className="MuiButton-label">Edit</span>
                      <span className="MuiTouchRipple-root" />
                    </button>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                    <div className="MuiBox-root jss82">
                      <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary"> Modified</h6>
                      <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary"> 17 hours ago</h6>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root jss73">
                  <div className="MuiPaper-root MuiCard-root MuiPaper-elevation0 MuiPaper-rounded">
                    <div className="MuiBox-root jss74">
                      <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-center">
                        <div className="MuiBox-root jss75">
                          <div className="MuiBox-root jss85a" style={{ "backgroundImage": "none" }}>
                            <div className="MuiBox-root jss86">
                              <div>
                                <div className="MuiAvatar-root MuiAvatar-circle jss53 jss87" id="avatar-1">
                                  <img src={placeholderImage} className="MuiAvatar-img" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss88">
                          </div>
                        </div>
                      </div>
                      <h1 className="MuiTypography-root MuiTypography-h1" id="person_name"> Name Placeholder </h1>
                      <div className="MuiBox-root jss76">
                        <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-colorTextSecondary" id="title"
                          style={{ 'wordBreak': 'breakWord' }}>Title Placeholder</h3>
                      </div>
                      <div className="jss186" id="roles">
                        <Role role="Truthsayer" />
                        <Role role="Reverend Mother" />
                        <Role role="Sisterhood Agent" />
                        <Role role="Placeholder" />
                      </div>
                    </div>
                    <div className="MuiBox-root jss138">
                      <div className="MuiBox-root jss139">
                        <div className="MuiBox-root jss140">
                          <div className="MuiBox-root jss141">
                            <h5 className="MuiTypography-root MuiTypography-h5">Participating in projects</h5>
                          </div>
                          <div className="MuiBox-root jss142">
                            <div className="MuiBox-root jss143">
                              <div className="MuiBox-root jss144" id="projects">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss167 jss190">
                      </div>
                    </div>
                    <div className="MuiBox-root jss94">
                      <div className="MuiBox-root jss95">
                        <h5 className="MuiTypography-root MuiTypography-h5">Skills</h5>
                      </div>
                      <div className="MuiTypography-root jss192 MuiTypography-body1" id="skills">
                        <Label name="Prana-bindu training" />
                        <Label name="Truthsaying" />
                        <Label name="Infiltration" />
                        <Label name="So Ugly It's Disturbingly Charming" />
                        <Label name="Dune References" />
                      </div>
                    </div>
                    <div className="MuiBox-root jss94">
                      <div className="MuiBox-root jss95">
                        <h5 className="MuiTypography-root MuiTypography-h5">About me</h5>
                      </div>
                      <p className="MuiTypography-root jss192 MuiTypography-body1" id="about_me">About me Placeholder<br />
                      </p>
                    </div>
                    <div className="MuiBox-root jss98">
                      <div className="MuiBox-root jss99">
                        <h5 className="MuiTypography-root MuiTypography-h5">Languages</h5>
                      </div>
                      <p className="MuiTypography-root jss192 MuiTypography-body1" id="languages">Chakobsa, Galach<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root jss183 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-7">
              <div className="MuiBox-root jss59 jss193">
                <div className="MuiTabs-root jss195">
                  <div className="MuiTabs-scroller MuiTabs-scrollable" style={{ marginBottom: 0 }}>
                    <div className="MuiTabs-flexContainer" role="tablist">
                      <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss8 Mui-selected" tabIndex="0" type="button"
                        role="tab" aria-selected="true" aria-controls="pulse-tabpanel-2">
                        <span className="MuiTab-wrapper">Suggestions</span>
                        <span className="MuiTouchRipple-root" />
                      </button>
                      <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss8" tabIndex="-1" type="button" role="tab"
                        aria-selected="false" aria-controls="pulse-tabpanel-3">
                        <span className="MuiTab-wrapper">Skills</span>
                        <span className="MuiTouchRipple-root" />
                      </button>
                      <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss8" tabIndex="-1" type="button" role="tab"
                        aria-selected="false" aria-controls="pulse-tabpanel-3">
                        <span className="MuiTab-wrapper">Timeline</span>
                        <span className="MuiTouchRipple-root" />
                      </button>
                      <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss8" tabIndex="-1" type="button" role="tab"
                        aria-selected="false" aria-controls="pulse-tabpanel-4">
                        <span className="MuiTab-wrapper">Contacts</span>
                        <span className="MuiTouchRipple-root" />
                      </button>
                    </div>
                    <span className="jss9 jss10 MuiTabs-indicator jss194" style={{ left: 0, width: "160px" }} />
                  </div>
                </div>
                <div className="MuiBox-root jss66" role="tabpanel">
                  <div className="MuiBox-root jss67" id="suggestions">
                    <div className="MuiBox-root jss110">
                      <h5 className="MuiTypography-root MuiTypography-h5">Header Placeholder</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </EmployeesPageWrapper>
  );
}

export default Employee;
