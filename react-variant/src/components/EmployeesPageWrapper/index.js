import React from "react";
import placeholderImage from '../../placeholder.png';

const EmployeesPageWrapper = ({ children }) => {
  return (
    <div id="wrapper" className="employees_wrapper">
      <div id="root" aria-hidden="true" style={{ paddingRight: "17px", overflow: "hidden" }}>
        <div className="MuiBox-root jss1 App" style={{ boxSizing: "content-box" }}>
          <div className="MuiBox-root jss5">
            <div className="MuiBox-root jss6">
              <a aria-current="page" className="active" id="logo" href="https://intra.proekspert.ee/pulse-johvi/">
                <svg fill="#FFFFFF" width="56" viewBox="0 0 256 256">
                  <path
                    d="M222.580359,127.995636 L222.580359,128.004364 C222.580359,149.826941 205.193486,167.391786 183.370909,167.391786 C161.548332,167.391786 143.983488,149.826941 143.983488,128.004364 L143.983488,127.995636 C143.983488,88.6082144 112.048554,56.8507664 72.6616175,56.8507664 C33.2737114,56.8507664 1.51577846,88.6082144 1.51577846,127.995636 L1.51577846,128.004364 L33.4516827,128.004364 L33.4516827,127.995636 C33.4516827,106.172574 50.8385557,88.6082144 72.6616175,88.6082144 C94.4841944,88.6082144 112.048554,106.172574 112.048554,127.995636 L112.048554,128.004364 C112.048554,167.391786 143.983488,199.149234 183.370909,199.149234 C222.757846,199.149234 254.515778,167.391786 254.515778,128.004364 L254.515778,127.995636 L222.580359,127.995636 Z">
                  </path>
                </svg>
              </a>
            </div>
            <div className="MuiBox-root jss7" id="main_menu">
              <div className="MuiTabs-root sc-jrAGrp dXWCyY">
                <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: "hidden" }}>
                  <div className="MuiTabs-flexContainer" role="tablist">
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss8 Mui-selected MuiTab-wrapped" tabIndex="-1"
                      type="button" role="tab" aria-selected="false" aria-controls="pulse-tabpanel-0">
                      <p className="MuiTypography-root jss2 MuiTypography-body1">CHALLENGES</p>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss8 MuiTab-wrapped" tabIndex="-1" type="button"
                      role="tab" aria-selected="true" aria-controls="pulse-tabpanel-1">
                      <p className="MuiTypography-root jss2 MuiTypography-body1">PEOPLE</p>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss8 MuiTab-wrapped" tabIndex="-1" type="button"
                      role="tab" aria-selected="false" aria-controls="pulse-tabpanel-2">
                      <p className="MuiTypography-root jss2 MuiTypography-body1">PROJECTS</p>
                    </button>
                  </div>
                  <span className="jss9 jss11 MuiTabs-indicator" style={{ left: "0px", width: "160px" }} />
                </div>
              </div>
            </div>
            <div className="MuiBox-root jss51" style={{ cursor: "pointer" }}>
              <div className="MuiBox-root jss55" style={{ color: "rgb(255,255,255)" }}>
                <p className="MuiTypography-root MuiTypography-body1">Demo User</p>
              </div>
              <div>
                <div className="MuiAvatar-root MuiAvatar-circle jss53 jss54" style={{ "border": "2px solid rgb(255,255,255)" }}>
                  <img src={{placeholderImage}} className="MuiAvatar-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="MuiBox-root jss13">
          </div>
          <div className="MuiBox-root jss14">
            <div className="MuiBox-root jss15">
              <h1 className="MuiTypography-root MuiTypography-h1" id="Challenges">Challenges</h1>
              <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined jss22 MuiButton-disableElevation" tabIndex="0" type="button"
                id="Add new">
                <span className="MuiButton-label">Add new</span>
                <span className="MuiTouchRipple-root" />
              </button>
            </div>
            <div className="MuiBox-root jss28" id="challenges_list">
              <div className="MuiCollapse-container jss30 MuiCollapse-entered" style={{ minHeight: "64px" }}>
                <div className="MuiCollapse-wrapper">
                  <div className="MuiCollapse-wrapperInner">
                    <div className="MuiBox-root jss33 jss32" id="Upcoming challenges">
                      <h3 className="MuiTypography-root jss31 MuiTypography-h3 MuiTypography-colorPrimary"> Upcoming challenges (5)</h3>
                      <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z">
                        </path>
                      </svg>
                    </div>
                    <div className="MuiPaper-root MuiCard-root sc-pFZIQ gbgfMs MuiPaper-elevation1"
                      id="OPEN-challenge_Frontend developer for logistic application" height="150">
                      <div className="MuiBox-root jss40">
                        <div className="MuiBox-root jss41">
                          <h5 className="MuiTypography-root MuiTypography-h5">
                          </h5>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2" id="title_Frontend developer for logistic application">Frontend
                      developer for logistic application</h2>
                        <p className="MuiTypography-root MuiTypography-body1" id="summary_Join our team and let's move logistics to a new level!">
                          Join our team and let's move logistics to a new level!</p>
                        <div className="MuiBox-root jss42">
                          <div className="MuiChip-root MuiChip-outlined" id="Frontend developer for logistic application_chip_Vue.js"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Vue.js</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiPaper-root MuiCard-root sc-pFZIQ gbgfMs MuiPaper-elevation1" id="OPEN-challenge_Data scientist consultation"
                      height="150">
                      <div className="MuiBox-root jss34">
                        <div className="MuiBox-root jss35">
                          <h5 className="MuiTypography-root MuiTypography-h5">
                          </h5>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2" id="title_Data scientist consultation">Data scientist consultation</h2>
                        <p className="MuiTypography-root MuiTypography-body1"
                          id="summary_We need to understand if there is any way to solve our problems with data analyses. Can someone find time to consult us?">
                          We need to understand if there is any way to solve our problems with data analyses. Can someone find time to consult
                      us?</p>
                        <div className="MuiBox-root jss36">
                          <div className="MuiChip-root MuiChip-outlined" id="Data scientist consultation_chip_Data Science"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Data Science</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiPaper-root MuiCard-root sc-pFZIQ gbgfMs MuiPaper-elevation1" id="OPEN-challenge_Mentor in HTML/CSS"
                      height="150">
                      <div className="MuiBox-root jss37">
                        <div className="MuiBox-root jss38">
                          <h5 className="MuiTypography-root MuiTypography-h5">
                          </h5>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2"> Mentor in HTML/CSS</h2>
                        <p className="MuiTypography-root MuiTypography-body1"
                          id="summary_I'm a designer and I want to learn code basics. Can someone help me?"> I'm a designer and I want to learn
                      code basics. Can someone help me?</p>
                        <div className="MuiBox-root jss39">
                          <div className="MuiChip-root MuiChip-outlined" id="Mentor in HTML/CSS_chip_CSS" style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">CSS</h6>
                            </span>
                          </div>
                          <div className="MuiChip-root MuiChip-outlined" id="Mentor in HTML/CSS_chip_HTML" style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">HTML</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiPaper-root MuiCard-root sc-pFZIQ gbgfMs MuiPaper-elevation1"
                      id="OPEN-challenge_Product designer for financial analyses tool" height="150">
                      <div className="MuiBox-root jss43">
                        <div className="MuiBox-root jss44">
                          <h5 className="MuiTypography-root MuiTypography-h5">
                          </h5>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2" id="title_Product designer for financial analyses tool">Product designer
                      for financial analyses tool</h2>
                        <p className="MuiTypography-root MuiTypography-body1"
                          id="summary_Deserted Alarm's mission is to eliminate Economic Inflation with Our Deep Data Analysis. We need a designer who can visualize tons of data">
                          Deserted Alarm's mission is to eliminate Economic Inflation with Our Deep Data Analysis. We need a designer who can
                      visualize tons of data</p>
                        <div className="MuiBox-root jss45">
                          <div className="MuiChip-root MuiChip-outlined" id="Product designer for financial analyses tool_chip_Customer Experience"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Customer Experience</h6>
                            </span>
                          </div>
                          <div className="MuiChip-root MuiChip-outlined" id="Product designer for financial analyses tool_chip_UX / UI"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">UX / UI</h6>
                            </span>
                          </div>
                          <div className="MuiChip-root MuiChip-outlined" id="Product designer for financial analyses tool_chip_Product Design"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Product Design</h6>
                            </span>
                          </div>
                          <div className="MuiChip-root MuiChip-outlined" id="Product designer for financial analyses tool_chip_Service Design"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Service Design</h6>
                            </span>
                          </div>
                          <div className="MuiChip-root MuiChip-outlined" id="Product designer for financial analyses tool_chip_Data Visualisation"
                            style={{ marginRight: "8px" }}>
                            <span className="MuiChip-label">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2">Data Visualisation</h6>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiPaper-root MuiCard-root sc-pFZIQ gbgfMs MuiPaper-elevation1" id="OPEN-challenge_Looking for an accountant"
                      height="150">
                      <div className="MuiBox-root jss46">
                        <div className="MuiBox-root jss47">
                          <h5 className="MuiTypography-root MuiTypography-h5" id="client_undefined">
                          </h5>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2" id="title_Looking for an accountant">Looking for an accountant</h2>
                        <p className="MuiTypography-root MuiTypography-body1" id="summary_Hello accountant, please help us out!"> Hello accountant,
                      please help us out!</p>
                        <div className="MuiBox-root jss48">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="redux-toastr sc-bqyKva ehfErK" aria-live="assertive">
          <div>
            <div className="top-left">
            </div>
            <div className="top-right">
            </div>
            <div className="top-center">
            </div>
            <div className="bottom-left">
            </div>
            <div className="bottom-right">
            </div>
            <div className="bottom-center">
            </div>
          </div>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default EmployeesPageWrapper;
