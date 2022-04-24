import React from "react";

const ProjectsPageWrapper = ({ children }) => {
  return (
    <div id="wrapper" className="projects_wrapper">
      <div id="root" aria-hidden="true" style={{ paddingRight: "17px", overflow: "hidden" }}>
        <div className="MuiBox-root jss1 App" style={{ boxSizing: "content-box" }}>
          <div className="MuiBox-root jss1571">
            <div className="MuiBox-root jss1572">
              <a aria-current="page" className="active" id="logo" href="http://pulsedemo.puhh.local/pulse-johvi/">
                <svg fill="#FFFFFF" width="56" viewBox="0 0 256 256">
                  <path
                    d="M222.580359,127.995636 L222.580359,128.004364 C222.580359,149.826941 205.193486,167.391786 183.370909,167.391786 C161.548332,167.391786 143.983488,149.826941 143.983488,128.004364 L143.983488,127.995636 C143.983488,88.6082144 112.048554,56.8507664 72.6616175,56.8507664 C33.2737114,56.8507664 1.51577846,88.6082144 1.51577846,127.995636 L1.51577846,128.004364 L33.4516827,128.004364 L33.4516827,127.995636 C33.4516827,106.172574 50.8385557,88.6082144 72.6616175,88.6082144 C94.4841944,88.6082144 112.048554,106.172574 112.048554,127.995636 L112.048554,128.004364 C112.048554,167.391786 143.983488,199.149234 183.370909,199.149234 C222.757846,199.149234 254.515778,167.391786 254.515778,128.004364 L254.515778,127.995636 L222.580359,127.995636 Z">
                  </path>
                </svg>
              </a>
            </div>
            <div className="MuiBox-root jss1573" id="main_menu">
              <div className="MuiTabs-root sc-jrAGrp dXWCyY">
                <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: "hidden" }}>
                  <div className="MuiTabs-flexContainer" role="tablist">
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1523 MuiTab-wrapped" tabIndex="-1" type="button"
                      role="tab" aria-selected="false" index="0" id="pulse-tab0" aria-controls="pulse-tabpanel-0">
                      <p className="MuiTypography-root jss1517 MuiTypography-body1">CHALLENGES</p>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1523 MuiTab-wrapped" tabIndex="-1" type="button"
                      role="tab" aria-selected="false" index="1" id="pulse-tab1" aria-controls="pulse-tabpanel-1">
                      <p className="MuiTypography-root jss1517 MuiTypography-body1">PEOPLE</p>
                    </button>
                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1523 Mui-selected MuiTab-wrapped" tabIndex="0"
                      type="button" role="tab" aria-selected="true" index="2" id="pulse-tab2" aria-controls="pulse-tabpanel-2">
                      <p className="MuiTypography-root jss1517 MuiTypography-body1">PROJECTS</p>
                    </button>
                  </div>
                  <span className="jss1524 jss1526 MuiTabs-indicator" style={{ left: "320px", width: "160px" }}>
                  </span>
                </div>
              </div>
            </div>
            <div className="MuiBox-root jss1574" style={{ cursor: "pointer" }}>
              <div className="MuiBox-root jss1582" style={{ color: "rgb(255,255,255)" }}>
                <p className="MuiTypography-root MuiTypography-body1">Demo User</p>
              </div>
              <div>
                <div className="MuiAvatar-root MuiAvatar-circle jss1545 jss1575" id="avatar-1" style={{ border: "2px solid rgb(255,255,255)" }}> Avatar
            </div>
              </div>
            </div>
          </div >
          <div className="MuiBox-root jss1576">
          </div>
          <div className="MuiBox-root jss1577">
            <div id="search_area" className="sc-eCssSg hmocIu">
              <svg width="40px" height="40px" viewBox="0 0 40 40">
                <g id="Icon-/-Search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M16.9716305,2 C24.6879489,2 30.943261,8.25566416 30.943261,15.972417 C30.943261,19.7255245 29.4636014,23.1330195 27.055845,25.6433083 L38.0000397,36.5886125 L36.5886522,38 L25.573726,26.9833809 C23.2022461,28.8388809 20.2160856,29.9448339 16.9716305,29.9448339 C9.25531204,29.9448339 3,23.6891698 3,15.972417 C3,8.25566416 9.25531204,2 16.9716305,2 Z M16.9716305,3.99605957 C10.3576432,3.99605957 4.99594721,9.35805742 4.99594721,15.972417 C4.99594721,22.5867765 10.3576432,27.9487744 16.9716305,27.9487744 C23.5856177,27.9487744 28.9473137,22.5867765 28.9473137,15.972417 C28.9473137,9.35805742 23.5856177,3.99605957 16.9716305,3.99605957 Z"
                    fill="#FFFFFF">
                  </path>
                </g>
              </svg>
              <div className="rbt sc-jSgupP ckDfJz" style={{ outline: "currentcolor none medium", position: "relative" }} tabIndex="-1">
                <div style={{ display: "flex", flex: "1 1 0%", height: "100%", position: "relative" }}>
                  <input autoComplete="off" placeholder="Search by project or client name" readOnly type="text" id="search_input"
                    aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" role="combobox"
                    className="rbt-input-main form-control rbt-input" value="" />
                  <input aria-hidden="true" className="rbt-input-hint" readOnly
                    style={{ backgroundColor: "transparent", borderColor: "transparent", boxShadow: "none", color: "rgba(0,0,0,0.35)", left: "0px", pointerEvents: "none", position: "absolute", top: "0px", width: "100%", borderStyle: "none", borderWidth: "0px", fontSize: "48px", height: "65.3333px", lineHeight: "65.3333px", margin: "0px", padding: "1px 2px" }}
                    tabIndex="-1" value="" />
                </div>
              </div>
            </div>
            <div id="projects_list">
              <div className="MuiCollapse-container jss1596" style={{ minHeight: "64px", height: "64px", transitionDuration: "300ms" }}>
                <div className="MuiCollapse-wrapper">
                  <div className="MuiCollapse-wrapperInner">
                    <div className="MuiBox-root jss1600 jss1599" id="Prospects">
                      <h3 className="MuiTypography-root jss1598 MuiTypography-h3 MuiTypography-colorPrimary"> Prospects (12)</h3>
                      <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                        </path>
                      </svg>
                    </div>
                    <div id="7" className="jss1602">
                      <div className="MuiBox-root jss1603">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1604">
                              <div className="MuiBox-root jss1605">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Apr 30 2021</h5>
                              </div>
                              <div className="MuiBox-root jss1606">
                                <h5 className="MuiTypography-root MuiTypography-h5">Probability 85 %</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1607">
                              <h5 className="MuiTypography-root MuiTypography-h5">PADLOCKURITY</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Ninth Wrench</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>Custom Web Development And Startup Advisory Services<br />
                        </span>
                        <span>Smartbudget's mission is custom web Development and Startup advisory services. Smartbudgets mission is to help
                        you de-risk your startup by maximizing your tax I.O. online savings. We provide internationally relevant tax I.O. to
                        simplify international tax planning. We are a tax calculator that allows you to save as much as you can from your
                        tax bill. We also offer a free tax calculator, which you can expand to more than 10 different countries. Smartbudget
                        is the first web development platform for the "next generation of global entrepreneurs", which will enable them to
                        save up to 40 percent of their taxes in one go.<br />
                        </span>
                        <div className="MuiBox-root jss1608">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="AWS">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>AWS</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Redux">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Redux</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="SQL">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>SQL</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Go">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Go</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="MicroC/OS-II">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>
                                MicroC/OS-II</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="8" className="jss1602">
                      <div className="MuiBox-root jss1612">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1613">
                              <div className="MuiBox-root jss1614">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Feb 28 2021 to May 31 2021</h5>
                              </div>
                              <div className="MuiBox-root jss1615">
                                <h5 className="MuiTypography-root MuiTypography-h5">Probability 85 %</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1616">
                              <h5 className="MuiTypography-root MuiTypography-h5">NYMPHSTONE</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Gruesome Forsaken Scorpion</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>QUICKEST WAY TO NAVIGATE MILKBONE WEIGHTS SAVE LIFE<br />
                        </span>
                        <span>MotivateLink's mission is quickest way to navigate milkbone weights save life. MotivateLink provides a mobile
                        and web-based solution to diagnose and treat spouse beating issues.<br />
                        </span>
                        <div className="MuiBox-root jss1617">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="AWS">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>AWS</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="HTML">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>HTML</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Redux">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Redux</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="C">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>C</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="SAS">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>SAS</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="4" className="jss1602">
                      <div className="MuiBox-root jss1618">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1619">
                              <div className="MuiBox-root jss1620">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Mar 27 2021</h5>
                              </div>
                              <div className="MuiBox-root jss1621">
                                <h5 className="MuiTypography-root MuiTypography-h5">Probability 70 %</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1622">
                              <h5 className="MuiTypography-root MuiTypography-h5">TORTOISE ENTERPRISES</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Tidy Scorpion</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <div className="MuiBox-root jss1623">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiCollapse-container jss1597 MuiCollapse-entered" style={{ minHeight: "64px", height: "auto", transitionDuration: "300ms" }}>
                <div className="MuiCollapse-wrapper">
                  <div className="MuiCollapse-wrapperInner">
                    <div className="MuiBox-root jss1678 jss1599" id="Ongoing projects">
                      <h3 className="MuiTypography-root jss1598 MuiTypography-h3 MuiTypography-colorPrimary">Ongoing projects (17)</h3>
                      <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z">
                        </path>
                      </svg>
                    </div>
                    <div id="18" className="jss1602">
                      <div className="MuiBox-root jss1679">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1680">
                              <div className="MuiBox-root jss1681">
                                <h5 className="MuiTypography-root MuiTypography-h5">Start Date Placeholder</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1682">
                              <h5 className="MuiTypography-root MuiTypography-h5">Client Name Placeholder</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Project Name Placeholder</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>Project Desc Placeholder</span>
                        <div className="MuiBox-root jss1683">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Java">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Java</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Python">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Python
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="React">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>React</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="29" className="jss1602">
                      <div className="MuiBox-root jss1684">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1685">
                              <div className="MuiBox-root jss1686">
                                <h5 className="MuiTypography-root MuiTypography-h5">from May 01 2020</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1687">
                              <h5 className="MuiTypography-root MuiTypography-h5">ME</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Frozen Brave Metaphor</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>MODULAR HOME SYSTEM COMBINING MINECRAFT WITH DAYCARE PHILOSOPHY<br />
                        </span>
                        <span>Subtractstr's mission is modular home system combining Minecraft with Daycare philosophy. Subtractstr's
                        prototype has been built through an open source 3D engine and program that lets university students develop their
                        Sales &amp; Marketing skills while working during the week. In the coming weeks, the team will be presenting at DEMO
                        Europe.<br />
                        </span>
                        <div className="MuiBox-root jss1688">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Apache">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Apache
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Android">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Android
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="C#">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>C#</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="iOS">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>iOS</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div >
                    <div id="21" className="jss1602">
                      <div className="MuiBox-root jss1689">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1690">
                              <div className="MuiBox-root jss1691">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Dec 01 2019</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1692">
                              <h5 className="MuiTypography-root MuiTypography-h5">ELITE LIMITED</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Vital Lobster</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span> Smarttug's mission is mindfulness based online learning and mental health software. Smarttug provides something
                        different - a change making approach - to something existing online learning platforms or textbooks. Smarttug was
                        started by a team of students from the University of Amsterdam, which was followed by a co-founder and a lecturer
                        from the same university, which then got merged into Smarttug.<br />
                        </span>
                        <div className="MuiBox-root jss1693">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Oracle">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Oracle
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Node.js">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Node.js
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id=".NET">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>.NET</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div >
                    <div id="15" className="jss1602">
                      <div className="MuiBox-root jss1694">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1695">
                              <div className="MuiBox-root jss1696">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Oct 01 2019</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1697">
                              <h5 className="MuiTypography-root MuiTypography-h5">SILVERECORDS</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Everyday Autumn</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>CLOUD POWERED WEB ANALYTICS AND RESPONSESION TRAINING<br />
                        </span>
                        <span>Winkin's mission is cloud-powered Web Analytics and Responsesion Training. Winkin provides a dynamic cloud based
                        e-commerce and interactive video solutions to retail visitors. Our customers include retailers, brands and brands of
                        fancy clothing, to the busy urban commuter. Founded in 2007, Winkin is a next generation of online marketing agency.
                        Using data and analytics, the startup provides a better way to engage, understand and measure the effectiveness of
                        online marketing campaigns.<br />
                        </span>
                        <div className="MuiBox-root jss1698">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Windows Embedded">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Windows
                            Embedded</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="SQL">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>SQL</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="ASP.NET">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>ASP.NET
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="PHP">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>PHP</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div >
                    <div id="13" className="jss1602">
                      <div className="MuiBox-root jss1699">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1700">
                              <div className="MuiBox-root jss1701">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Oct 01 2019</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1702">
                              <h5 className="MuiTypography-root MuiTypography-h5">TIGRESS CO.</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Sad Beta</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>Carit's mission is written screenplay with produced a feature film. Carit is an independent website that aims to
                        provide Angelenos with access to high quality films produced in Angelenos by dedicated filmmakers. The company is
                        currently in closed beta. A film can be an idea, a concept, an idea, an idea, an action, a character, an action, a
                        romance, an action, an event, an action, an object, an object, or anything that has an appeal to the audience. Carit
                        provides a set of tools to let its user create a screenplay.<br />
                        </span>
                        <div className="MuiBox-root jss1703">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Oracle">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}> Oracle
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Node.js">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Node.js
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Python">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Python
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Android">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Android
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="React Native">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>React
                            Native</p>
                            </span>
                          </div>
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
              </div >
              <div className="MuiCollapse-container jss1596" style={{ minHeight: "64px" }}>
                <div className="MuiCollapse-wrapper">
                  <div className="MuiCollapse-wrapperInner">
                    <div className="MuiBox-root jss1763 jss1599" id="Internal projects">
                      <h3 className="MuiTypography-root jss1598 MuiTypography-h3 MuiTypography-colorPrimary">Internal projects (12)</h3>
                      <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                        </path>
                      </svg>
                    </div>
                    <div id="36" className="jss1602">
                      <div className="MuiBox-root jss1764">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1765">
                              <div className="MuiBox-root jss1766">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Nov 01 2020</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1767">
                              <h5 className="MuiTypography-root MuiTypography-h5">INTERNAL</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Stormy Coffin</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <span>Stormy Coffin's mission is the source real-time trends inventory for shipping. Stormy Coffin collects global
                        economic data and uses proprietary market analysis based on trade value, customer behavior, and international orders
                        to make informed decisions that improve shipping efficiency, reduce costs, and increase efficiency. The company’s
                        software is used by hundreds of thousands of customers and is the number one trending software in the global
                        shipping space. Stormy Coffin's key value proposition is its proprietary technology, which uses machine learning to
                        analyze the global patterns of international shipping and optimize shipping routing.<br />
                        </span>
                        <div className="MuiBox-root jss1768">
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="MySQL">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>MySQL</p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Vue.js">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Vue.js
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="Node.js">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>Node.js
                          </p>
                            </span>
                          </div>
                          <div className="MuiChip-root jss1609 MuiChip-outlined jss1610" id="CCS">
                            <span className="MuiChip-label">
                              <p className="MuiTypography-root MuiTypography-body1" style={{ "fontWeight": 600, fontSize: "14px", lineHeight: "unset" }}>CCS</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="38" className="jss1602">
                      <div className="MuiBox-root jss1769">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1770">
                              <div className="MuiBox-root jss1771">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Dec 01 2015</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1772">
                              <h5 className="MuiTypography-root MuiTypography-h5">INTERNAL</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Accounting</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <div className="MuiBox-root jss1773">
                        </div>
                      </div>
                    </div>
                    <div id="33" className="jss1602">
                      <div className="MuiBox-root jss1774">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-between">
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1775">
                              <div className="MuiBox-root jss1776">
                                <h5 className="MuiTypography-root MuiTypography-h5">from Dec 01 2015</h5>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item">
                            <div className="MuiBox-root jss1777">
                              <h5 className="MuiTypography-root MuiTypography-h5">INTERNAL</h5>
                            </div>
                          </div>
                        </div>
                        <h2 className="MuiTypography-root MuiTypography-h2">Internal services</h2>
                        <p className="MuiTypography-root sc-kstrdz btjemE jss1601 MuiTypography-body1" />
                        <div className="MuiBox-root jss1778">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
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
    </div >
  );
}

export default ProjectsPageWrapper;
