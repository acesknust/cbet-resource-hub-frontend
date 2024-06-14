import "../styles/Home.css"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <div className="courses-Container">
     <h1 className="Heading">Please select a course</h1>
      <div className="course-Container">
         <div>
        <div className="course">
        <Link to="/CourseFiles" style={{textDecoration: 'None'}}>
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>Computer</h2>
          <h2>Engineering</h2>
        </Link>
        </div>
        <div className="course">
        <Link to="/CourseFiles" style={{textDecoration: 'None'}}>
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>Computer</h2>
          <h2>Engineering</h2>
        </Link>
        </div>
        </div>
        <div>
        <div className="course">
        <Link to="/CourseFiles" style={{textDecoration: 'None'}}>
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>Computer</h2>
          <h2>Engineering</h2>
        </Link>
        </div>
        <div className="course">
        <Link to="/CourseFiles" style={{textDecoration: 'None'}}>
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>Computer</h2>
          <h2>Engineering</h2>
        </Link>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
