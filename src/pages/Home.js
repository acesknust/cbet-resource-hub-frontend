import "../styles/Home.css"

function Home() {
  return (
    <div className="courses-Container">
     <h1 className="Heading">Please select a course</h1>
      <div className="course-Container">
         <div>
        <div className="course">
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>computer</h2>
          <h2>Engineering</h2>
        </div>
        <div className="course">
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>computer</h2>
          <h2>Engineering</h2>
        </div>
        </div>
        <div>
        <div className="course">
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>computer</h2>
          <h2>Engineering</h2>
        </div>
        <div className="course">
          <img src="./acesLogo.jpeg" alt="computer enginerring logo" />
          <h2>computer</h2>
          <h2>Engineering</h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
