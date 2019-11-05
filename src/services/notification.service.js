import {ApiService} from "./api.service";

const notifyRantService = {
    notifyRant:async()=> {
        return await ApiService.get("/notification").then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.message);
        });
    },
    
    
    
};

export {notifyRantService};





