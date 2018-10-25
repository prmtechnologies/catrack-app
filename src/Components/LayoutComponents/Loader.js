import React from "react";
import "./Loader.css";

const Loader = props => {
  return (
    <div>
      <div
        style={{
          marginTop: "-50px",
          marginLeft: "-50px",
          top: "50%",
          left: "50%",
          position: "absolute",
          backgroundColor: "white",
          opacity: ".75",
          height: "100px",
          width: "100px",
          padding: "15px",
          alignContent: "center",
          textAlign: "center",
          borderRadius: "10px"
        }}
      >
        <div className="loader" />
        {/* <span>Loading please wait...</span> */}
      </div>
    </div>
  );
};

export default Loader;
