import Navbar from "../components/Navbar";

import avatar from "../assets/newdp.jpeg";

import insta from "../assets/insta.jpg"
import twitter from "../assets/twitter.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home-main-div" >
      <div
        style={{
          marginTop: 120,
          display: "flex",
          alignItems : "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 50,
            }}
          >
            Hello 👋
          </div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            My name is Sachin Kumar <br /> I am a full stack developer.
          </p>
          <div>
          <img id="home-icons"  src={linkedin} />
          <img id="home-icons" src={github} />
          <img id="home-icons"   src={insta} />
          <img id="home-icons" src={twitter} />
          </div> 
        </div>
        <div style={{
            display : "flex",
            flexDirection : "column",
            marginLeft : 200,
        }} >
        <img id="avatar" height={220} width={220} src={avatar} />
        <button id="resume-btn">Know more</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
