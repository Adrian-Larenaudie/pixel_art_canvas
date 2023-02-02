export default {
    namespaced: true,
    state:() => ({
        currentColor: '#fff',
    }), 
    
    getters: {
        getCurrentColor: (state) => {
            return state.currentColor;
        }
    },

    actions: {
        
    },
    
    mutations: {
        setNewColor(state, newColor) {
            state.currentColor = newColor;
        }
    },
};
