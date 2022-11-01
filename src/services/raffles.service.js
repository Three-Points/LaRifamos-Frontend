import axios from "axios";
import { Server } from "miragejs";

const baseURL = "https://larifamos-production.up.railway.app";

export const getRaffles = () => {
    const axiosConfig = {
        headers: {
            Authorization: `${process.env.REACT_APP_API_TOKEN}`
        }
    }
    var response = axios.get(baseURL + "/raffles", axiosConfig);
    return  response;
}

export const getRaffleDetail = (raffle_id) => {
    const axiosConfig = {
        headers: {
            Authorization: `${process.env.REACT_APP_API_TOKEN}`
        }
    }
    var response = axios.get(baseURL + `/raffle/${raffle_id}`, axiosConfig);
    return  response;
}