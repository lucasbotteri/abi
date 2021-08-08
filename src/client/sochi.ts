import axios from "axios";

const getSochiClient = () => {
  const axiosInstance = axios.create({
    baseURL: "localhost:8000",
  });
  return axiosInstance;
};

export default getSochiClient();
