const actions = {
    SOCKET_POST_ADDED: (context, data) => {
        // Push the new rant
        context.commit('PUSH_NEW_RANT', data);
    }
};

export {actions};