import React from "react";
import "../styles/landingPage.css";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <div>
      <div className="App">
        <Link to="/Home" style={{ textDecoration: "None", color: "#fff" }}>
          Home
        </Link>
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
              <Link
                to="/SignUp"
                style={{ textDecoration: "None", textAlign:"center"}}
              >
                <button style={{ background:"inherit", border:"none", color:"white" }}>Sign Up</button>
              </Link>

              <Link
                to="/SignIn"
                style={{ textDecoration: "None", textAlign:"center" }}
                className="login-button"
              >
                <button  style={{ background:"inherit", border:"none", color:"white" }}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
