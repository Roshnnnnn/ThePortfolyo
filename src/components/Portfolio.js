import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { fetchData } from "../../pages/api/hello";

const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  const [user, setUser] = useState([]);
  const [image, setImage] = useState("");

  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setUser(data.projects);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>
                  Fusce sollicitudin eros id ex maximus gravida non vitae ante.
                  Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                {user.map((project) => (
                  <li className="grid-sizer" key={project._id}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={project.image.url} alt="" />
                        <div
                          className="main"
                          data-img-url={project.image.url}
                        />
                      </div>
                      <div className="details">
                        <span className="category">{project.sequence}</span>
                        <h3 className="title">{project.title}</h3>
                        <img className="svg" src="img/svg/vector5.svg" alt="" />
                      </div>
                      <a
                        className="tonni_tm_full_link popup-youtube"
                        href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
