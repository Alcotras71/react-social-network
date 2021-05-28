import React from "react";
import preloader from "../../../assets/images/spinner.svg";

const Preloader = (props) => {
  return (
    <div style={{ height: "100%", widows: "100%", background: "#f0b20a" }}>
      <img
        src={preloader}
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
};

export default Preloader;
