import Navbar from "../components/Navbar";

import "../css/project.css";

import splash from "../assets/splash.png";
import learnify from "../assets/learnify.png";
import barter from "../assets/bartermate.png";
import covi from "../assets/covihelp.png";
import cross from "../assets/cross.png";

const Project = () => {
  const data = [
    {
      id: 1,
      title: "Learnify | March 2023",
      desc: "A content sharing platform where you can browse as well as publish your technical articles which can be viewed by other registered users. A javascript based full-stack web application powered by React JS in the frontend and Node JS as backend using MongoDB as database and API's developed on Express JS.",
      tech: "Technologies Used : HTML · CSS · JavaScript · MongoDB · Express JS · React JS · Node JS",
      image: learnify,
    },
    {
      id: 2,
      title: "Splasheroo | Feb 2023 - March 2023",
      desc: "A cross platform mobile application which lets you book a slot for your car wash. Say goodbye to the traditional car wash hassle and environmental concerns with Splasheroo.",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: splash,
    },
    {
      id: 3,
      title: "BarterMate | Jan 2022 - March 2022",
      desc: "A cross platform mobile application Barter Mate is an initiative to give you the traceability of a small amount of your money which otherwise seems insignificant. Barter Mate offers you a digital money in exchange for useless,though very useful scrap, lying idle in your houses.",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: barter,
    },
    {
      id: 4,
      title: "Cross Zero Me | Aug 2021",
      desc: "Play a 3x3 or 5x5 Tic-Tac-Toe with Friends and Family. Play at beginner or pro-level and try to beat the un-beatable Computer. A native android application implemented using mini-max algorithm.",
      tech: "Technologies Used : Android · Navigation Component · Android Studio",
      image: cross,
    },
    {
      id: 5,
      title: "Covi-Help | Jun 2021 - July 2021",
      desc: "A cross platform mobile application which lets you track and find your nearest covid vaccination center and helps you monitor the state-wise covid data. This application shows you health related news which lets you stay updated.",
      tech: "Technologies Used : Flutter · Dart · Android",
      image: covi,
    },
  ];

  const handleClick = (id) => {
    if (id === 1) {
      window.open("https://www.linkedin.com/company/wiley-edge/mycompany/");
    } else if (id === 2) {
      window.open("https://knockonce.in/");
    } else if (id === 3) {
      window.open("https://github.com/ACM-VIT/fludget");
    }
  };

  return (
    <>
      <div>
        <Navbar />
        {data.map((e) => (
          <div
            onClick={() => {
              handleClick(e.id);
            }}
            className="exp-div1"
          >
            <img
              id="exp-div1-img"
              style={{ backgroundColor: "white" }}
              src={e.image}
              height={200}
              width={200}
            />
            <div className="exp-div2">
              <h2 className="exp-div2-h">{e.title}</h2>
              <p className="exp-div2-p">{e.desc}</p>
              <h3 className="exp-div2-h">{e.tech}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
