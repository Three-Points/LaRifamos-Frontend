import axios from "axios";

export const getRaffles = () => {
  return axios.get("/api/raffles");
};

export const getRaffleDetail = (raffle_id) => {
  return axios.get(`/api/raffles/${raffle_id}`);
};
