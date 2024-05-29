import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/signup.css';
import userIcon from '../assets/user.png';
import lockIcon from '../assets/lock.png'
import googleIcon from '../assets/google.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="SignUpcontainer">
      <h1 className="signInText">Sign up</h1>
      <div className="part2">
        <h2 className="welcomeText">Welcome</h2>
        <p className="signInSubText">Hi there, Sign up to Continue</p>
        <label className="label">Username or Email</label>
        <div className="formField">
          <div className="iconContainer">
            <img src={userIcon} alt="User" className="icon" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Username"
          />
        </div>
        <label className="label">Password</label>
        <div className="formField">
          <div className="iconContainer">
            <img src={lockIcon} alt="Lock" className="icon" />
          </div>
          <input
            className="input"
            placeholder="Password"

            id="pass"
            type={
                showPassword ? "text" : "password"
            }
            value={password}
            onChange={(e) =>
                setPassword(e.target.value)
            }
          />
          <span class="password-toggle-icon"><i class= { showPassword ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() =>setShowPassword((prev) => !prev)}></i></span>
        </div>
        <label className="label">Confirm Password</label>
        <div className="formField">
          <div className="iconContainer">
            <img src={lockIcon} alt="Lock" className="icon" />
          </div>
          <input
            className="input"
            placeholder="Confirm Password"

            id="pass"
            type={
                showConfirmPassword ? "text" : "password"
            }
            value={confirmPassword}
            onChange={(e) =>
                setConfirmPassword(e.target.value)
            }
          />
          <span class="password-toggle-icon"><i class= { showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() =>setShowConfirmPassword((prev) => !prev)}></i></span>
        </div>
        <button className="signInButton">Sign Up</button>
        <div className="horizontalStroke">
          <div className="line" />
          <p className="orSignInWith">or sign up with</p>
          <div className="line" />
        </div>
        <div className="socialIcons">
          <img src={googleIcon} alt="Google" className="socialIcon" />
          <img src={facebookIcon} alt="Facebook" className="socialIcon" />
          <img src={twitterIcon} alt="Twitter" className="socialIcon" />
        </div>
        <p className="signUpText">
          Already have an Account?{' '}
          <span
            className="signUpLink"
          >
            <Link to="/SignIn" style={{textDecoration: 'None'}}>Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;