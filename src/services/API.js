import axios from "./Axios";

import {
    HISTORICAL_API
} from "../constants/";

class APIService {
    
    getHistoricalData = (sucessCb, errorCb) => {
        axios.get(HISTORICAL_API, {}, sucessCb, errorCb);
    }

};

export default new APIService();
