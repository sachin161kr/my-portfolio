import Navbar from "../components/Navbar";

import "../css/Experience.css";

import wiley from "../assets/wiley.jpg";
import knock from "../assets/knockonce.png";
import hfest from "../assets/hfest.png";

const Experience = () => {
  const data = [
    {
      title: "Wiley Edge | Software Developer Trainee",
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: wiley,
    },
    {
      title: "KnockOnce | Mobile Application Developer",
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: knock,
    },
    {
      title: "HacktoberFest 2021 | Open Source",
      desc: "Proident excepteur et cillum elit dolore cupidatat cillum officia elit officia et proident. Dolore amet dolore consequat magna non aliquip enim est exercitation proident cillum culpa commodo. Amet dolor pariatur labore cupidatat fugiat. In anim anim commodoadipisicing ea do.",
      image: hfest,
    },
  ];

  return (
    <div>
      <Navbar />
      {data.map((e) => (
        <div className="exp-div1">
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
