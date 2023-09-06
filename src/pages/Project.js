import Navbar from "../components/Navbar";

import "../css/project.css";

import splash from "../assets/splash.png";
import learnify from "../assets/learnify.png";
import barter from "../assets/bartermate.png";
import covi from "../assets/covihelp.png";
import cross from "../assets/cross.png";
import hireme from "../assets/hiremelogo.png";
import hrmslogo from "../assets/HRMSlogo.png";
import sidcup from "../assets/sidcup.jpg";

const Project = () => {
  const data = [
    {
      title: "Sidcup Family Golf | Aug 2023",
      desc: "The Sidcup Family Golf Website Clone is a web development project that aims to recreate the website of Sidcup Family Golf using a combination of HTML, CSS, and JavaScript. The Sidcup Family Golf Website Clone is an exemplary demonstration of cutting-edge frontend development skills, harnessing advanced CSS concepts to recreate the website",
      tech: "Technologies Used : HTML · CSS · JavaScript · GSAP",
      image: sidcup,
      try: "https://golf-indol.vercel.app/",
      repo: "https://github.com/sachin161kr/Golf/tree/master",
    },
    {
      title: "Learnify | March 2023",
      desc: "Learnify is a cutting-edge content sharing platform designed to cater to the insatiable hunger for technical knowledge and expertise. Whether you are a seasoned professional or an enthusiastic learner, Learnify is the perfect hub for browsing and publishing technical articles. Developed with state-of-the-art technologies, including React JS for the frontend, Node JS for the backend, and MongoDB for the database, Learnify offers a seamless and interactive learning experience like never before.",
      tech: "Technologies Used : HTML · CSS · JavaScript · MongoDB · express JS · React JS · Node JS",
      image: learnify,
      try: "https://learnify-eight.vercel.app/",
      repo: "https://github.com/sachin161kr/Learnify",
    },
    {
      title: "Splasheroo | Feb 2023 - March 2023",
      desc: "Splasheroo is a revolutionary cross-platform mobile application designed to make car wash booking a breeze. Developed using React Native, this user-friendly app allows car owners to effortlessly schedule and manage their car wash appointments with just a few taps on their smartphones. Say goodbye to long waiting times at car wash stations and welcome the convenience of Splasheroo into your life!",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: splash,
      try: "https://play.google.com/store/apps/details?id=com.splasheroo&hl=en-IN",
      repo: "https://play.google.com/store/apps/details?id=com.splasheroo&hl=en-IN",
    },
    {
      title: "BarterMate | Jan 2022 - March 2022",
      desc: "Got a bunch of useless, but potentially valuable, scrap lying around in your house? Instead of letting it collect dust, why not turn it into digital money? With BarterMate, you can easily transform your discarded items into a digital currency that you can use for a variety of purposes.BarterMate is a cutting-edge cross-platform mobile application that revolutionizes the way you declutter your space and put your idle scrap to good use. Developed using the power of React Native, BarterMate seamlessly operates on both iOS and Android devices, offering an intuitive and user-friendly experience for all users.",
      tech: "Technologies Used : JavaScript · React Native · Android · IOS",
      image: barter,
      try: "https://play.google.com/store/apps/details?id=com.bartermate&hl=en-IN",
      repo: "https://play.google.com/store/apps/details?id=com.bartermate&hl=en-IN",
    },
    {
      title: "Cross Zero Me | Aug 2021",
      desc: "Welcome to Cross Zero Me, the ultimate Tic Tac Toe multiplayer game for Android! Challenge your friends or test your wits against our intelligent AI opponents in this classic 3x3 board game. If you're feeling adventurous, dive into the 5x5 mode for a more challenging experience! Cross Zero Me is the perfect way to have fun, improve your strategic skills, and pass the time with engaging gameplay.",
      tech: "Technologies Used : Android · Navigation Component · Android Studio",
      image: cross,
      try: "https://www.amazon.com/dp/B09CN1LNH5/ref=apps_sf_sta",
      repo: "https://github.com/sachin161kr/CrossZeroMe",
    },
    {
      title: "Covi-Help | Jun 2021 - July 2021",
      desc: "Covi-Help is a powerful and user-friendly cross-platform mobile application designed to provide essential COVID-19 related assistance to users. Whether you need to locate the nearest vaccination center, stay updated on state-wise COVID data, or access health-related news, Covi-Help has you covered. With a comprehensive range of features, this app aims to empower users with the necessary tools to navigate through the pandemic safely and responsibly.",
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
