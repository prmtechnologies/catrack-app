import React from "react";
// import "./Loader.css";

import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = props => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          marginTop: "-50px",
          marginLeft: "-50px",
          top: "50%",
          left: "50%",
          position: "absolute",
          backgroundColor: "silver",
          opacity: ".9",
          height: "100px",
          width: "100px",
          padding: "15px",
          alignContent: "center",
          textAlign: "center",
          borderRadius: "10px",
          border: "solid 1px silver"
        }}
      >
        <CircularProgress size={70} style={{ color: "black" }} thickness={3} />
        {/* <div className="loader" /> */}
        {/* <span>Loading please wait...</span> */}
      </div>
    </div>
  );
};

export default Loader;
