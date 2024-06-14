import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CourseFiles from "./pages/CourseFiles";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/CourseFiles" element={<CourseFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
