import Navbar from "../components/Navbar";

import "../css/Education.css";

import pas from "../assets/PAS.jpeg";
import hit from "../assets/HIT.png";

const Education = () => {
  const data = [
    {
      id: 1,
      title:
        "Haldia Institute Of Technology , Haldia , West Bengal | 2019-2023",
      specialization: "Btech in Electronics And Communication Engineering",
      duration: "Graduated June 2023",
      grade: "CGPA 8.83",
      image: hit,
    },
    {
      id: 2,
      title: "The Pentecostal Assembly School , Bokaro , Jharkhand | 2017-2019",
      specialization: "PCM with Computer Science | CBSE",
      duration: "Completed in 2019",
      grade: "Percentage 74.6 %",
      image: pas,
    },
    {
      id: 3,
      title: "The Pentecostal Assembly School , Bokaro , Jharkhand | 2016-2017",
      specialization: "Class X | CBSE",
      duration: "Completed in 2017",
      grade: "CGPA 9.6",
      image: pas,
    },
  ];

  const handleClick = (id) => {
    if (id === 1) {
      window.open("https://hithaldia.ac.in/");
    } else {
      window.open("https://www.pasbokaro.com/");
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
              <p className="exp-div2-p">{e.specialization}</p>
              <p className="exp-div2-p">{e.duration}</p>

              <h3 className="exp-div2-p">{e.grade}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
