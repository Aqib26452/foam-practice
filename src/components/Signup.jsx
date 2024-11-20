import React, { useState } from "react";
import "./Navbar.css";
import Inputemail from "./Inputemail";
import Passinput from "./Passinput";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Signup = () => {
  const [passemail, setemail] = useState("asdf");
  const [passwrd, setpass] = useState("aqib");
  const [pass, confirmpass] = useState("A.A");

  console.log(pass);

  const clearinputs = () => {
    setemail("");
    setpass("");
    confirmpass("");
  };
  return (
    <div className="bg-set">
      <div className="colsetbg-sign-up">
        <div className="div-set">
          <div className="login-div ">
            <h3>Sign Up</h3>
          </div>
          {/* <Inputemail /> */}
          <div className="inputset">
            <input
              class="border"
              type="text"
              placeholder="Enter Email or P.N.."
              value={passemail}
              name="password"
              onChange={(parameter) => setemail(parameter.target.value)}
            />
          </div>
          {/* <Passinput /> */}
          <div class="set-pass">
            <input
              type="password"
              placeholder="Enter Password..."
              value={passwrd}
              name="password"
              onChange={(parameter) => setpass(parameter.target.value)}
            />
          </div>
          <div class="confirm-pass">
            <input
              type="password"
              placeholder="Enter Confirm Password..."
              value={pass}
              name="password"
              onChange={(parameter) => confirmpass(parameter.target.value)}
            />
          </div>

          <div>
            <button
              className="forget-button-set-signup"
              to="#"
              onClick={clearinputs}
            >
              <b>Clear All Fields..</b>
            </button>
          </div>
          <div className="login-button-set">
            <button className="border-set-signup-button">
              <h5>
                <b>Sign up</b>
              </h5>
            </button>
          </div>

          <div className="divvset">
            <p>Already have an account.. </p>
            <Link to="/Login">
              <b>Login</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
