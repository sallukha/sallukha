import React from "react";
import "./App.css";
function Login() {
  return (
    <div className="container3">
      <h6>DROP US A LINE</h6>

      <label for="Your Name"> Your Name (requrid)</label>
      <div className="container4">
        <input type="text"></input>
      </div>
      <label for="Your Name"> Your Email  (requrid)</label>
      <div className="container4">
        <input type="text"></input>
      </div>
      <label for="Your Name"> Your Phone Number  </label>
      <div className="container4">
        <input type="text"></input>
      </div>
      <label for="Your Name"> Your Massgege</label>
      <br></br>
      <div className="container5">
        <input type="text"></input>
      </div>
      <div className="container6">
        <button>send</button>
      </div>
    </div>
  );
}

export default Login;
