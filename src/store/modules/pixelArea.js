export default {
    namespaced: true,
    state:() => ({
        gridData: [],
    }), 
    
    getters: {
        getGridData: (state) => {
            return state.gridData;
        }
    },

    actions: {
        
    },
    
    mutations: {
        setNewPixel(state) {
            
        }
    },
};
