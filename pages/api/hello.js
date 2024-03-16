// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    return response.data.user;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
