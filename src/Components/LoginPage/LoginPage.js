import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./LoginPage.css";
import facebook from "../../Images/facebook.jpg";
import google from "../../Images/google.png";
const LoginPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Navigation></Navigation>
      <div className="loginPage">
        {/* create account here */}
        {!login && (
          <div>
            <h3>Create Account</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username or Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Create a Account</button>
            </form>
            <div className="text-center">
              Already have an account?{" "}
              <Link onClick={() => setLogin(true)}>login</Link>
            </div>
          </div>
        )}

        {/* login here */}
        {login && (
          <div>
            <h3>Login</h3>
            <form>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <div className="d-flex justify-content-between my-3">
              <div>
                <input className="mr-1" type="checkbox" name="" id="" />
                Remember Me
              </div>
              <Link>Forget Password</Link>
            </div>
            <div className="text-center">
              Don't have an account?{" "}
              <Link onClick={() => setLogin(false)}>Create an account </Link>
            </div>
          </div>
        )}

        {/* facebook and google button handle here */}
        <div className="mx-auto">
          <div className="line mx-auto">
            <span className="line__text">Or</span>
            <hr />
          </div>
          <div className="continue__with">
            <img src={facebook} alt="facebook" />
            <button>Continue with Facebook</button>
          </div>
          <div className="continue__with">
            <img src={google} alt="Google" />
            <button>Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
