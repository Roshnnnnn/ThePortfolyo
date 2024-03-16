import { useRef, useState, useEffect } from "react";
import { fetchData } from "../../pages/api/hello";

const Testimonials = () => {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        console.log(data.testimonials);
        setUser(data.testimonials);
        if (data.testimonials.length > 0) {
          setActive(data.testimonials[0]);
          console.log(data.testimonials[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserData();
  }, []);
  return <div>Testimonials</div>;
};

export default Testimonials;
