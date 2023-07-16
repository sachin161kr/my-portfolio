import Navbar from "../components/Navbar";

import "../css/Experience.css";

import wiley from "../assets/wiley.jpg";
import knock from "../assets/knockonce.png";
import hfest from "../assets/hfest.png";

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "Wiley Edge | Software Developer Trainee",
      duration: "Apr 2023 - Jun 2023 · 3 mos",
      desc: "Developed real life projects by following the procedures of SDLC and industry standards under the guidance of industry experts. Worked on Java Full Stack and enhanced my knowledge on Spring concepts including Spring Boot and Data JPA along with MySQL database. Explored tools like Jira and gained experience in Agile Software Development.",
      image: wiley,
      skills:
        "Skills : JDBC · Spring Boot · HTML5 · Cascading Style Sheets (CSS) · Java · SQL · Agile · JavaScript · React JS",
    },
    {
      id: 2,
      title: "KnockOnce | Mobile Application Developer",
      duration: "Dec 2021 - Jul 2022 · 8 mos",
      desc: "Reduced the work load on the web-dev team by 60% by developing and maintaining a cross platform Mobile Application and Worked with multiple API calls in the app to fetch Back-end Data and make it consumable to the users. Increased the business growth by 80% for the client by building an application which targets both Android and IOS platforms.",
      image: knock,
      skills: "Skills : Android · iOS Development · React Native",
    },
    {
      id: 3,
      title: "HacktoberFest 2021 | Open Source",
      duration: "Oct 2021 · 1 mon",
      desc: "Worked closely on the Fludget - Open Source project hosted by VIT Vellore and increased the overall productivity of the app by 30% by implementing new wigdets in the application such as FutureBuilder, FormField ,DatePickerDialog, etc. Secured 3rd place among the Top Contributors @ ACM-VIT’s Forktober VIT Vellore.",
      image: hfest,
      skills: "Skills : Flutter · Git · Github",
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
            <h3 className="exp-div2-p">{e.duration}</h3>
            <p className="exp-div2-p">{e.desc}</p>
            <h3 className="exp-div2-p">{e.skills}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
