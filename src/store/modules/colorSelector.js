export default {

    namespaced: true,

    state:() => ({
        currentColor: '#fff',
        colorPanelDisplay: false,
        colorArray: [
            '#2980B9 ',
            '#3498DB',
            '#8E44AD',
            '#9B59B6',
            '#E74C3C',
            '#C0392B',
            '#D35400',
            '#E67E22',
            '#F1C40F',
            '#27AE60',
            '#16A085',
            '#1ABC9C',
            '#34495E',
            '#BDC3C7',
            '#FDFEFE',
        ]
    }), 
    
    getters: {

        // récupère la valeur de currentColor
        getCurrentColor: (state) => {
            return state.currentColor;
        },

        // récupère la valeur de colorPanelDisplay
        getColorPanelDisplay: (state) => {
            return state.colorPanelDisplay;
        },

        // récupère la valeur de colorArray
        getColorArray: (state) => {
            return state.colorArray;
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
