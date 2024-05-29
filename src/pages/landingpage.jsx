import React from "react";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="content">
            <h2>CBET</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              sed, officia quae eum iusto ratione autem eius minus, nisi
              laboriosam id ullam aliquam sunt deserunt, magni natus maiores
              placeat perferendis.
            </p>
            <div className="logos">
              <img src="./acesLogo.jpeg" alt="aceslogo" />
              <img src="./acesLogo.jpeg" alt="aceslogo" />
              <img src="./acesLogo.jpeg" alt="aceslogo" />
              <img src="./acesLogo.jpeg" alt="aceslogo" />
            </div>
            <div className="buttons">
            <button className="login-button"><Link to="/SignUp" style={{textDecoration: 'None', color: '#fff'}}>Sign Up</Link></button>
              <button className="login-button"><Link to="/SignIn" style={{textDecoration: 'None', color: '#fff'}}>Login</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
