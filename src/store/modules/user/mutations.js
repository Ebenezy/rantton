import router from "../../../router";

const mutations = {
    SET_USER_DATA: (state, user) => state.USER = user,
    SET_AUTH_TOKEN: (state, authentication) => {
        state.AUTHENTICATION_TOKEN = authentication;
    },
    REMOVE_AUTH: (state) => {
        state.AUTHENTICATION_TOKEN = '';
        state.USER = '';
        router.push({ name: "Home" });
        
    },
};

export {mutations};
