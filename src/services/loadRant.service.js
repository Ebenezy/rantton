import {ApiService} from "./api.service";

const loadRantService = {
    loadRant:async()=> {
        return await ApiService.get("/posts/fetch").then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    likerant: async ({friendly_uuid}) => {
        return await ApiService.post('/posts/like', {friendly_uuid:friendly_uuid}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    unlikeRant: async ({friendly_uuid}) => {
        return await ApiService.post('/posts/unlike', {friendly_uuid:friendly_uuid}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    deleteRant: async (rant_id) => {
        return await ApiService.delete("/posts/delete/"+rant_id).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    
    
};

export {loadRantService};





