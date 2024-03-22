import { useEffect, useState } from "react";
import { fetchData } from "../../pages/api/hello";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setUserData(data.about);

        if (data?.about?.avatar && data.about.avatar?.url) {
          setImageURL(data?.about?.avatar?.url);
        } else {
          console.error("Avatar URL not found in data:", data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="tonni_tm_section" id="home">
      <div
        className="tonni_tm_hero"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div className="background">
          {imageURL && (
            <img
              className="image"
              src={imageURL}
              alt="User Avatar"
              style={{
                overflow: "hidden",
                filter: "grayscale(100%)", // Convert to grayscale
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", // Cut the top part
              }}
            />
          )}
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content" style={{ textAlign: "center" }}>
            <div className="content_in">
              <h3 className="name">
                <span>I</span> am
                <br />
                {userData.name}
              </h3>
              <span className="welcome">{userData?.title}</span>

              <div className="tonni_tm_button">
                <a className="anchor" href="#portfolio">
                  See All Projects
                  <img className="svg" src="img/svg/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tonni_tm_down">
            <a className="anchor" href="#about">
              <img className="svg" src="img/svg/down_button.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="play_button">
          <a
            className="popup-youtube"
            href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
          />
        </div>
        {/* Shape elements */}
        <span className="shape1">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape2">
          <img className="svg" src="img/svg/icon7.svg" alt="" />
        </span>
        <span className="shape3">
          <img className="svg" src="img/svg/icon3.svg" alt="" />
        </span>
        <span className="shape4">
          <img className="svg anim_circle" src="img/svg/icon6.svg" alt="" />
        </span>

        <span className="shape6">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape7">
          <img className="svg" src="img/svg/icon2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Home;
