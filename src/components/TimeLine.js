import { useEffect, useState } from "react";
import { fetchData } from "../../pages/api/hello";

const TimeLine = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await fetchData();
        setUser(data.timeline);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {user.map((item) => (
                    <li
                      key={item._id}
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <ul className="items">
                        <li>
                          <div className="list_inner">
                            <div className="details">
                              <div className="title">
                                <h3>{item.company_name}</h3>
                                <span>{item.jobTitle}</span>
                              </div>
                              <div className="text">
                                <p>{item.summary}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="year">
                              <span>
                                {new Date(item.startDate).getFullYear()} -
                                {new Date(item.endDate).getFullYear()}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <p>{item.bulletPoints}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
