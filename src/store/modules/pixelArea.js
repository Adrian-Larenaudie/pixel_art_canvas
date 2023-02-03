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

        setGridData(state, gridData) {
            return state.gridData = gridData;
        },

        setNewPixelColor(state, pixelId, color) {
           const newGridData = state.gridData.map((pixel) => {
                if(pixel.pixelId === pixelId) {
                    pixel.color = color;
                };
            });
            return state.gridData = newGridData;
        }
    },
};
