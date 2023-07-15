import "../App.css";

const Navbar = () => {
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
        <div className="navbtn">Home</div>
        <div className="navbtn">Experience</div>
        <div className="navbtn">Education</div>
        <div className="navbtn">Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
