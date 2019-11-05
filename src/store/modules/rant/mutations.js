const mutations = {
    SET_RANTS: (state, payload) => state.RANTS = payload,
    REMOVE_RANT(state, rantUUID) {
        let index = state.RANTS.findIndex((rant) => rant.friendly_uuid === rantUUID);
        state.RANTS.splice(index, 1);
    },
    PUSH_NEW_RANT: (state, rant) => {
        state.RANTS.unshift(rant);
    }
};

export {mutations};