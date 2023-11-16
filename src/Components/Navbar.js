import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logodiv">
          <img src={`favicon.png`} alt="logo" className="logo" />
          <h3 className="logotext">STORIES</h3>
        </div>
        <button className="btn">Courses</button>
      </div>
    </>
  );
};

export default Navbar;
