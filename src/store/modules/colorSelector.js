export default {

    namespaced: true,

    state:() => ({
        currentColor: '#fff',
        colorPanelDisplay: false,
    }), 
    
    getters: {

        // récupère la valeur de currentColor
        getCurrentColor: (state) => {
            return state.currentColor;
        },

        // récupère la valeur de colorPanelDisplay
        getColorPanelDisplay: (state) => {
            return state.colorPanelDisplay;
        }
    },

    actions: {
        // aucune action pour le moment
    },
    
    mutations: {

        // passe la valeur du champ colorPanelDisplay à false
        setColorPanelDisplayToFalse(state) {
            state.colorPanelDisplay = false;
        },

        // intervertie la valeur de colorPanelDisplay par son opposé
        toggleColorPanelDisplay(state) {
            state.colorPanelDisplay = !state.colorPanelDisplay;
        },

        // modifie la valeur de currentColor par une couleur récupérée dans les paramètres
        setNewColor(state, newColor) {
            state.currentColor = newColor;
        }
    },
};
