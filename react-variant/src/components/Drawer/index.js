import React from "react";

const Drawer = ({children}) => {
  return (
    <div role="presentation" className="MuiDrawer-root MuiDrawer-modal jss1878" style={{position:"fixed", zIndex:1300, inset:"0px"}}>
      <div className="MuiBackdrop-root" aria-hidden="true" style={{"opacity":1, transition:"opacity 225ms cubic-bezier(0.4,0,0.2,1) 0ms"}}>
      </div>
      <div tabIndex="0" data-test="sentinelStart">
      </div>
      <div className="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorRight MuiPaper-elevation16"
      tabIndex="-1"
      style={{ transform: 'none', transition: 'transform 225ms cubic-bezier(0,0,0.2,1) 0ms' }}>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
