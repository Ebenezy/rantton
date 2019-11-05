import {userService} from "../../../services/user.service";
import {ApiService} from '../../../services/api.service';

const actions = {
    UNSET_USER: (context) => context.commit('REMOVE_AUTH'),
    isLoggedIn(context) {
        // Fetch the User token
        return context.getters.IS_AUTHENTICATED;
    },
    LOGIN: async (context, { password}) => {
        return await userService.login({password: password}).then(async (token) => {
            // Store the User Token
            context.commit('SET_AUTH_TOKEN', token);
            let authorize = await context.dispatch('AUTHORISE_USER', token);
            ApiService.setHeader(token);

            return Promise.resolve(authorize);
        }).catch((error) => {
            return Promise.reject(error);
        });
    },
    AUTHORISE_USER: async (context, token) => {
        return await userService.authorize(token).then((res) => {
            context.commit('SET_USER_DATA', res);
            return Promise.resolve(res);
        }).catch((err) => {
            return Promise.reject(err);
        });
    },
   
    
    
};

export {actions};