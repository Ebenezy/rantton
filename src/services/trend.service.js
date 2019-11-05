import {ApiService} from "./api.service";

const loadTrendService = {
    loadtrend:async()=> {
        return await ApiService.get("/posts/fetch").then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    
    
};

export {loadTrendService};





