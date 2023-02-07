export default {
    namespaced: true,
    // message à afficher dans différents cas
    state:() => ({
        message: '',
    }), 
    
    getters: {
        // récupère le message du state
        getMessage: (state) => {
            return state.message;
        },
    },

    actions: {
        // pas d'actions pour le moment   
    },
    
    mutations: {
        // modifie le message avec le paramètre message
        setMessageValue(state, message) {
            return state.message = message;
        },
    },
};
