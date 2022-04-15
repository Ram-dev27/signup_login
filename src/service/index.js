import axios from "axios";

export const getRequest = async (url, headerData) => {
  const response = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err.message);
  const res = await response;
  return res;
};
export const postRequest = async (url, headerData= {}) => {
  const response = await axios
    .post(
      url,
      headerData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(err));
  const res = await response;
  return res;
};
