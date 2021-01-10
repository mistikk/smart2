import axios from "axios";

const api = axios.create({
  baseURL: "https://api-dev.smartgiftit.com/",
  headers: {
    "Content-Type": "application/json",
    "x-smartgift-app-id": "zOdeE81mInZIiPLrdHRd0IVZ1a2vv42p6tvh8SX3",
    "x-smartgift-app-secret": "ldPn67Cf7e0NboidnQ30KTtrfD1nqPpoSqs69EfH",
  },
});

export default api;
