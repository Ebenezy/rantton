import {loadRantService} from '../../../services/loadRant.service';
import {userService} from "../../../services/user.service";

const actions = {
    LOAD_RANT: (context) => {
        return loadRantService.loadRant().then((rants) => {
            context.commit('SET_RANTS', rants);
            return Promise.resolve(rants);
        }).catch(() => {
            return Promise.reject(false);
        })
    },
    DELETE_RANT: async (context, payload) => {
        return await loadRantService.deleteRant(payload).then((res) => {
            context.commit('REMOVE_RANT', payload);
            return Promise.resolve(res);
        }).catch((err) => {
            return Promise.reject(err);
        })
    },
    ADDRANT: async (context, {content, emoji}) => {
        return await userService.addRant({content: content, emoji: emoji}).then((res) => {
            return res;
        }).catch((err) => {
            return err;
        });
    },
    likeRANT: async (context, payload) => {
        return await loadRantService.likerant(payload).then((res) => {
            return Promise.resolve(res);
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

};

export {actions};