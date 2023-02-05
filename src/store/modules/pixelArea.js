export default {
    namespaced: true,
    state:() => ({
        // le state qui reçoit toutes le données nécessaires à la génération de la grille avec les couleur correspondantes
        gridData: [],
    }), 
    
    getters: {
        // récupère la valeur du state gridData
        getGridData: (state) => {
            return state.gridData;
        },
    },

    actions: {
        // pas d'actions pour le moment   
    },
    
    mutations: {
        // remet le state gridData à sa valeur initial cad un tableau vide
        cleanGridData(state) {
            return state.gridData = [];
        },

        // modifie la valeur du state gridData
        setGridData(state, gridData) {
            // on met à jour le local storage pour une persistence de données dans le navigateur du user
            localStorage.setItem('pixelArtCanvas', JSON.stringify(gridData));
            return state.gridData = gridData;
        },

        // modifie la valeur de la couleur d'un pixel de la grille
        setNewPixelColor(state, payload) {
            // dans le payload on récupère un id de pixel & une couleur
            const newGridData = [];
            // boucle sur gridData
            state.gridData.forEach((pixel) => {
                // si l'id du payload match avec l'id du pixel courant 
                if(pixel.pixelId === payload.pixelId) {
                    // on va modifier la couleur du pixel courant
                    pixel.color = payload.color;
                };
                // on push le pixel courant dans notre nouveau tableau
                newGridData.push(pixel)
            });
            // on met à jour le local storage pour une persistence de données dans le navigateur du user
            localStorage.setItem('pixelArtCanvas', JSON.stringify(newGridData));
            // on modifie le state de gridData en lui donnant la valeur du nouveau tableau qui contient la nouvelle couleur
            return state.gridData = newGridData;
        },
    },
};
