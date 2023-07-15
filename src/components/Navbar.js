import "../App.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const sign = "<SachinKumar/>";

  return (
    <div className="navbar">
      <div
        style={{
          flexGrow: 0,
          margin: 10,
          fontSize: 30,
          color: "#14401f",
          fontWeight: "bold",
        }}
      >
        {sign}
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      ></div>
      <div id="nav">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="navbtn"
        >
          Home
        </div>
        <div
          onClick={() => {
            navigate("/experience");
          }}
          className="navbtn"
        >
          Experience
        </div>
        <div
          onClick={() => {
            navigate("/education");
          }}
          className="navbtn"
        >
          Education
        </div>
        <div
          onClick={() => {
            navigate("/project");
          }}
          className="navbtn"
        >
          Projects
        </div>
      </div>
    </div>
  );
};

export default Navbar;
