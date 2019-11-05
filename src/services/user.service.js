import {ApiService} from "./api.service";

const userService = {
    login: ({password}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post('/users/authenticate', {password: password}).then((res) => {
                if (res.status !== 200)
                    reject(res.data);
                let token = res.data.token;
                resolve(token);
            }).catch((error) => {
                reject(error.response.data);
            });
        });
    },
    authorize: async (token) => {
        return await ApiService.customRequest({
            headers: {Authorization: "Bearer "+token},
            method: "GET",
            url: ApiService.getBaseUrl() + "/users/authorize"
        }).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    addRant: async ({content,emoji}) => {
        return await ApiService.post('/posts/add', {content:content, emoji:emoji}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.data);
        });
    },
};

export {userService};