import React from "react";
import "../styles/coursefiles.css";
import { Link } from "react-router-dom";

import { FaBook, FaDownload } from "react-icons/fa";
import Navbar from "../components/Navbar";

function CourseFiles() {
  const courses = [
    "Algebra",
    "Applied Electricity",
    "Basic Mechanics",
    "Comm. Skills",
    "Environ. Studies",
  ];

  return (
    <>
      <Navbar />
      <div className="cf-container">
        <h1 className="cf-heading">ACES Course Files</h1>
        <div className="cf-content">
          <h2>First Semester</h2>
          <ul>
            {courses.map((course) => (
              <li key={course}>
                <FaBook /> {course} <FaDownload />
              </li>
            ))}
          </ul>
          <Link
            to="/Home"
            style={{ textDecoration: "None", textAlign: "center" }}
            className="go-back"
          >
            <button
              style={{ background: "inherit", border: "none", color: "#000" }}
              className="go-back-icon"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CourseFiles;
