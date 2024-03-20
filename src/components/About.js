import { useEffect, useState } from "react";
import { fetchData } from "../../pages/api/hello";

const About = () => {
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        const filteredSkills = data.skills.filter(
          (item) => item.enabled === true
        );
        setSkills(filteredSkills);
        setAbout(data.about);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            {/* Left section */}
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{about.exp_year}</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            {/* Right section */}
            <div className="right">
              <div className="title">
                <span>{about.quote}</span>
                <hr />
                <h3>{about.subTitle}</h3>
              </div>
              <div className="text">
                <p>{about.description}</p>
              </div>
              {/* Skills section */}
            </div>
          </div>
          <div className="dodo_progress">
            <ul>
              {skills.map((item, index) => (
                <li key={index}>
                  <div className="list_inner">
                    <div
                      className="progress_inner skillsInner___"
                      data-value={item?.percentage}
                    >
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                      <div className="percent">
                        <img className="svg" src={item?.image.url} alt="" />
                        <span className="number">{item?.percentage} %</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
