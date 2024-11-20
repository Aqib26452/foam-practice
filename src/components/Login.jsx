import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
// import Inputemail from "./Inputemail";
// import Passinput from "./Passinput";
import { Link } from "react-router-dom";
// import Passinput from "./Passinput";
import { MdEmail } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";

const Login = () => {
  const [pass, setpass] = useState("Emailll..");
  const [passwrd, setpaswd] = useState("Passw");
  const [passwrdicon, setpaswdtype] = useState("Password");

  console.log(pass);
  console.log(passwrd);

  const handleinput = () => {
    setpass("");
    setpaswd("");
  };

  return (
    <div className="bg-set">
      <div className="colsetbg">
        <div className="div-set">
          <div className="login-div ">
            <h3>Login</h3>
          </div>
          {/* <Inputemail/> */}
          <div className="inputset">
            <div className="size-set">
              <input
                className="inputsett"
                type="text"
                placeholder="Enter Email or P.N.."
                value={pass}
                name="password"
                onChange={(parameter) => setpass(parameter.target.value)}
              />
              <span>
                <MdEmail className="icon-set" />
              </span>
            </div>
          </div>

          {/* <Passinput /> */}
          <div class="set-pass">
            <div className="size-set">
              <input
                className="inputsett"
                type="password"
                placeholder="Enter Password..."
                value={passwrd}
                name="password"
                onChange={(parameter) => setpaswd(parameter.target.value)}
              />
              <BiSolidHide />
            </div>
          </div>

          <Button class="login-button-set">
            <b>Login</b>
          </Button>

          <div>
            <button className="forget-button-set" to="#" onClick={handleinput}>
              Forget Password?
            </button>
          </div>
          <div className="divvset">
            <p>Click here to create an account..</p>
            <Link to="/Signup"> Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
