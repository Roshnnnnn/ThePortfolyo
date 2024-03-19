import { useEffect, useState } from "react";
import { fetchData } from "../../pages/api/hello";

const Service = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        // Filter services where enabled is true
        const enabledServices = data.services.filter(
          (service) => service.enabled === true
        );
        setUser(enabledServices);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="tonni_tm_section" id="service">
      <div className="tonni_tm_service">
        <div className="container bigger">
          <div className="service_in">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Our Services</span>
                  <h3>What Can I Do</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="service_list">
                <ul>
                  {user.map((item, index) => {
                    return (
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        key={index}
                      >
                        <div className="list_inner">
                          <img className="svg" src={item?.image?.url} alt="" />
                          <div className="title">
                            <h3>{item?.name}</h3>
                            <span>{item?.charge}</span>
                          </div>
                          <div className="text">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector4.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
