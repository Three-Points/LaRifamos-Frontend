import axios from "axios";
import { Server } from "miragejs";

const baseURL = "https://larifamos-production.up.railway.app";

export const getRaffles = () => {
    const axiosConfig = {
        headers: {
            Authorization: `KkgGNBoyIbVbt5WO29Bw5V4w8v6vnyd8`
        }
    }
    var response = axios.get(baseURL + "/raffles", axiosConfig);
    return  response;
}

export const getRaffleDetail = (raffle_id) => {
    const axiosConfig = {
        headers: {
            Authorization: `KkgGNBoyIbVbt5WO29Bw5V4w8v6vnyd8`
        }
    }
    var response = axios.get(baseURL + `/raffle/${raffle_id}`, axiosConfig);
    return  response;
}