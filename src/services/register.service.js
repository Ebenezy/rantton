import {ApiService} from "./api.service";

const RegisterService = {
    register: async ({password}) => {
        return await ApiService.post('/users/registration/start', {password:password}).then((res) => {
            return Promise.resolve(res.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    completeSignup: async ({original,password}) => {
        return await ApiService.post('/users/registration/complete', { original:original,password:password}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.message);
        });
    }
    
    
  
    
};
export  {RegisterService};