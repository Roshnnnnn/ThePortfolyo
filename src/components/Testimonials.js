import { useState, useEffect } from "react";
import { fetchData } from "../../pages/api/hello";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await fetchData();
        const filteredTestimonials = data.testimonials.filter(
          (testimonial) => testimonial.enabled === true
        );
        setTestimonials(filteredTestimonials);
      } catch (error) {
        console.log("Error fetching testimonials:", error.message);
      }
    };

    fetchTestimonials();
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <div className="active-image">
                <img
                  src={testimonials[activeIndex]?.image?.url}
                  alt={testimonials[activeIndex]?.name}
                />
              </div>
            </div>
            <div className="rightpart">
              <div className="active-review">
                <p>{testimonials[activeIndex]?.review}</p>
              </div>
              <div className="details">
                <div className="infos">
                  <div className="avatars">
                    <ul className="grid-sort">
                      {testimonials.map(
                        (item, index) =>
                          index !== activeIndex && (
                            <li key={index} className={` grid-item ${index}`}>
                              <span onClick={() => handleItemClick(index)}>
                                <div
                                  data-img-url={item && item?.image?.url}
                                  style={{
                                    backgroundImage: `url(${
                                      item && item?.image?.url
                                    })`,
                                  }}
                                />
                              </span>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                  <div className="short">
                    <div className="name">
                      <div>
                        <h3>{testimonials[activeIndex]?.name}</h3>
                        <span>{testimonials[activeIndex]?.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
