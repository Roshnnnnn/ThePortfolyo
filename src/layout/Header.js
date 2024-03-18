import { useEffect, useState } from "react";
import { scroll_ } from "../utilits";
import { fetchData } from "../../pages/api/hello";

const Header = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setMedia(data.social_handles);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserData();
    window.addEventListener("scroll", scroll_);

    return () => {
      window.removeEventListener("scroll", scroll_);
    };
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div
            className="follow"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "10px" }}>Follow Us:</span>
            <div>
              {media.map((item, index) => (
                <a href={item.url} key={index} style={{ marginRight: "10px" }}>
                  <img
                    src={item.image.url}
                    alt={item.platform}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
