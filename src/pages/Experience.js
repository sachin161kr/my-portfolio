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
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: wiley,
    },
    {
      id: 2,
      title: "KnockOnce | Mobile Application Developer",
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: knock,
    },
    {
      id: 3,
      title: "HacktoberFest 2021 | Open Source",
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: hfest,
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
            <p className="exp-div2-p">{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
