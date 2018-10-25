import React from "react";
import "./Loader.css";

const Loader = props => {
  return (
    <div>
      <div
        style={{
          margin: "125px auto",
          position: "relative",
          backgroundColor: "white",
          opacity: ".75",
          height: "105px",
          width: "105px",
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
