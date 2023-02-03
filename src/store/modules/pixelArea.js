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

        setNewPixelColor(state, payload) {
            const newGridData = [];
            state.gridData.forEach((pixel) => {
                if(pixel.pixelId === payload.pixelId) {
                    pixel.color = payload.color;
                };
                newGridData.push(pixel)
            });
            localStorage.setItem('pixelArtCanvas', JSON.stringify(newGridData));
            return state.gridData = newGridData;
        }
    },
};
