import Navbar from "../components/Navbar";

import avatar from "../assets/newdp.jpeg";

import insta from "../assets/insta.jpg";
import twitter from "../assets/twitter.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home-main-div">
        <div
          style={{
            marginTop: 120,
            display: "flex",
            alignItems: "center",
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
              <img
                onClick={() => {
                  window.open("https://www.linkedin.com/in/sachin161kr/");
                }}
                id="home-icons"
                src={linkedin}
              />
              <img
                onClick={() => {
                  window.open("https://github.com/sachin161kr");
                }}
                id="home-icons"
                src={github}
              />
              <img
                onClick={() => {
                  window.open("https://www.instagram.com/__sachinn___/");
                }}
                id="home-icons"
                src={insta}
              />
              <img
                onClick={() => {
                  window.open("https://twitter.com/__sachinn___");
                }}
                id="home-icons"
                src={twitter}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 200,
            }}
          >
            <img id="avatar" height={220} width={220} src={avatar} />
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/13HfOH0nlIKR_PcZUmX-2fKJrDn0Lhoqx/view?usp=sharing"
                );
              }}
              id="resume-btn"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
