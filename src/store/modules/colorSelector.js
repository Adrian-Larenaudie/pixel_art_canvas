export default {

    namespaced: true,

    state:() => ({
        // la couleur qui sera utilisée lors du click sur un pixel du canvas
        currentColor: 'grey',
        // le booléen qui définit si le pannel de selection de couleur est affiché ou non
        colorPanelDisplay: false,
        // l'index qui permet de situer l'endroit du tableau qui doit prendre la valeur de la nouvelle custom color
        customColorIndex: 0,
        // le tableau qui stock les 4 couleurs custom (stocké en local storage)
        customColorArray: [
           '#FFF', 
           '#FFF', 
           '#FFF', 
           '#FFF', 
        ],
        // le tableau des couleur sélectionnables par défaut
        colorArray: [
            '#2980B9 ',
            '#3498DB',
            '#8E44AD',
            '#6C3483',
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
            '#000000',
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
        },
        // récupère la liste des couleurs custom
        getCustomColorArray: (state) => {
            return state.customColorArray;
        },
    },

    actions: {
        // pas d'actions pour le moment
    },
    
    mutations: {
        // ajoute une nouvelle couleur custom au state sustumArray
        setNewCustomColor(state, newColor) {
            // ajoute la couleur passer en paramètre dans le tableau du state customColorArray à l'index du state customColorIndex
            state.customColorArray[state.customColorIndex] = newColor;
            // modification de l'index customColorIndex
            if(state.customColorIndex === state.customColorArray.length - 1) {
                state.customColorIndex = 0;
            } else {
                state.customColorIndex++;
            };
            // ajout en local storage du tableau des custom color 
            localStorage.setItem('customColorArray', JSON.stringify(state.customColorArray));
        },

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
        },
        
        // modifie le valeur de customColorArray
        setCustomColorArray(state, customColorArray) {
            state.customColorArray = customColorArray;
        },
    },
};
