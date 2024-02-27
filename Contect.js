import React from "react";
import "../App.css";
import "./Contect.css";
import Login from "../Login";
function Contect() {
  return (
    <>
      <div className="container">
        <h1>Contect</h1>
      </div>
      <div className="container2">
        <div>
          <h5>
            You can email us anytime at info@glorymedalhangers
            <br></br>
            <br></br>
            com You can also call us Monday - Saturday from 9 a.m - 6 p.m IST{" "}
            <br></br> at +91 6383950998
          </h5>
          <br></br>
          <span>
            FIRST FLOOR, 22-23, SRI GANAPATHY GARDENS, GANAPATHY, NORTH ZONE,
            <br></br> Coimbatore, Coimbatore, Tamil Nadu, 641006
          </span>
        </div>
        <Login />
      </div>
    </>
  );
}
export default Contect;
