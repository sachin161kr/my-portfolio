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
      desc: "A content sharing platform where you can browse as well as publish your technical articles which can be viewed by other registered users. A javascript based full-stack web application powered by React JS in the frontend and Node JS as backend using MongoDB as database and API's developed on projress JS.",
      tech: "Technologies Used : HTML · CSS · JavaScript · MongoDB · express JS · React JS · Node JS",
      image: learnify,
      try: "https://learnify-eight.vercel.app/",
      repo: "https://github.com/sachin161kr/Learnify",
    },
    {
      id: 2,
      title: "Splasheroo | Feb 2023 - March 2023",
      desc: "A cross platform mobile application which lets you book a slot for your car wash. Say goodbye to the traditional car wash hassle and environmental concerns with Splasheroo.",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: splash,
      try: "https://play.google.com/store/apps/details?id=com.splasheroo&hl=en-IN",
      repo: "",
    },
    {
      id: 3,
      title: "BarterMate | Jan 2022 - March 2022",
      desc: "A cross platform mobile application Barter Mate is an initiative to give you the traceability of a small amount of your money which otherwise seems insignificant. Barter Mate offers you a digital money in exchange for useless,though very useful scrap, lying idle in your houses.",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: barter,
      try: "https://play.google.com/store/apps/details?id=com.bartermate&hl=en-IN",
      repo: "",
    },
    {
      id: 4,
      title: "Cross Zero Me | Aug 2021",
      desc: "Play a 3x3 or 5x5 Tic-Tac-Toe with Friends and Family. Play at beginner or pro-level and try to beat the un-beatable Computer. A native android application implemented using mini-max algorithm.",
      tech: "Technologies Used : Android · Navigation Component · Android Studio",
      image: cross,
      try: "https://www.amazon.com/dp/B09CN1LNH5/ref=apps_sf_sta",
      repo: "https://github.com/sachin161kr/CrossZeroMe",
    },
    {
      id: 5,
      title: "Covi-Help | Jun 2021 - July 2021",
      desc: "A cross platform mobile application which lets you track and find your nearest covid vaccination center and helps you monitor the state-wise covid data. This application shows you health related news which lets you stay updated.",
      tech: "Technologies Used : Flutter · Dart · Android",
      image: covi,
      try: "https://covi-help-19805.web.app/#/",
      repo: "https://github.com/sachin161kr/Covi-Help",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        {data.map((e) => (
          <div className="proj-div1">
            <img
              id="proj-div1-img"
              style={{ backgroundColor: "white" }}
              src={e.image}
              height={200}
              width={200}
            />
            <div className="proj-div2">
              <h2 className="proj-div2-h">{e.title}</h2>
              <p className="proj-div2-p">{e.desc}</p>
              <h3 className="proj-div2-h">{e.tech}</h3>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <p
                  onClick={() => {
                    window.open(e.try);
                  }}
                  className="proj-div2-btn"
                >
                  Try Now
                </p>
                <p
                  onClick={() => {
                    e.repo.length != 0 && window.open(e.repo);
                  }}
                  className="proj-div2-btn"
                >
                  Repo Link
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
