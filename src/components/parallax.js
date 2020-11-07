import React from "react";

const Parallax = ({ img, children }) => (
  <div
    className="d-flex flex-wrap align-content-center"
    style={{
      backgroundImage: `url("${img}")`,
      height: "500px",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      {children}
    </div>
  </div>
);

export default Parallax;
