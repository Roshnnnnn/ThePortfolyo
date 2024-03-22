import React, { Fragment, useEffect, useState } from "react";
import Isotope from "isotope-layout";
import { fetchData } from "../../pages/api/hello";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  const [user, setUser] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  // Isotope
  useEffect(() => {
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
        setUser(
          data.projects
            .filter((project) => project.enabled === true)
            .sort((a, b) => a.sequence - b.sequence)
        );
        const imageUrls = data?.projects.map((project) => project?.image.url);
        setImageURL(imageUrls);
        setLoading(false);
      } catch (error) {
        setError("Error fetching Image. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const openDetailsPopup = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setActiveDetailsPopup(true);
  };

  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
        imageURL={selectedImage}
        title={selectedTitle}
        error={error}
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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div
                className="portfolio_list wow fadeInUp"
                data-wow-duration="1s"
              >
                <ul className="gallery_zoom grid">
                  {user.map((project, index) => (
                    <li className="grid-sizer" key={project._id}>
                      <div
                        className="list_inner"
                        onClick={() =>
                          openDetailsPopup(imageURL[index], project.title)
                        }
                      >
                        <div className="image">
                          <div>
                            {error ? (
                              <div>{error}</div>
                            ) : (
                              <>
                                <img src={imageURL[index]} alt="" />
                                <div
                                  className="main"
                                  data-img-url={project.image.url}
                                />
                              </>
                            )}
                          </div>
                        </div>
                        <div className="details">
                          <span className="category">{project.sequence}</span>
                          <h3 className="title">{project.title}</h3>
                          <img
                            className="svg"
                            src="img/svg/vector5.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
