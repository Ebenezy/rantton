import {ApiService} from "./api.service";

const ReplyRantServices = {
    replyRant: async ({reply,rant_id}) => {
        return await ApiService.post('/posts/reply/add', {reply:reply, rant_id:rant_id}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    
};



export {ReplyRantServices};





