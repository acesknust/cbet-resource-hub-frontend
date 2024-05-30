import React from 'react';
import '../styles/coursefiles.css';
import { FaBook, FaDownload } from 'react-icons/fa';
import Navbar from '../components/Navbar';

function CourseFiles() {
  const courses = [
    "Algebra",
    "Applied Electricity",
    "Basic Mechanics",
    "Comm. Skills",
    "Environ. Studies"
  ];

  return (
    <>
    <Navbar/>
    <div className="container">
    <h1 className="heading">ACES Course Files</h1>
    <div className="content">
        <h2>First Semester</h2>
        <ul>
          {courses.map(course => (
            <li key={course}>
              <FaBook /> {course} <FaDownload />
            </li>
          ))}
        </ul>
    </div>
  </div>
  </>
  );
}

export default CourseFiles;
