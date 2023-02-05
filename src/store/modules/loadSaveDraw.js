export default {
    namespaced: true,
    state:() => ({
        // contient la liste de sauvegarde (ici un objet exemple de ce que chaque index du tableau peux contenir)
        saves: [
       /*      {
                saveId: 1,
                name: 'save1',
                date: Date.now(),
                gridData: [],
            }, */
        ],
        // le nombre de sauvegarde
        saveNumber: 0,
        // le nombre max de saves
        maxSaveNumber: 10,
    }), 
    
    getters: {
        // récupère les sauvegardes
        getSaves: (state) => {
            return state.saves;
        },

        // récupère le nombre de sauvegardes
        getSaveNumber: (state) => {
            return state.saveNumber;
        },

        // récupère le nombre max de sauvegardes
        getMaxSaveNumber: (state) => {
            return state.maxSaveNumber;
        },

        // récupère l'id le plus élevé
        getMaxSaveId: (state) => {
            const maxSaveId = state.saves.reduce((max, save) => (save.saveId > max ? save.saveId : max), 0);
            return maxSaveId;
        },

        // récupère une save par son id
        getSaveById: (state) => (saveId) => {
            return state.saves.find(save => save.saveId === saveId);
        },
    },

    actions: {
        // pas d'actions pour le moment   
    },
    
    mutations: {
        // ajoute une nouvelle sauvegarde
            setNewSave(state, newSave) {
                // on ajoute la nouvelle sauvegarde
                state.saves.push(newSave);
                // on va sauvegarder en local storage
                localStorage.setItem('drawSaves', JSON.stringify(state.saves));
                // on return 
                return
        },

        // supprime une sauvegarde par son index
        deleteSaveById(state, saveId) {
            // on parcourt les saves
            for (let index = 0; index < state.saves.length; index++) {
                // si une des saves match avec le saveId reçu en paramètre:
                if(state.saves[index].saveId === saveId) {
                    // on supprime l'élément courant du tableau des saves
                    state.saves.splice(index, 1);
                    // on stop la boucle
                    break;
                }      
            }
            // on vient modifier le local storage avec les nouvelles sauvegardes
            localStorage.setItem('drawSaves', JSON.stringify(state.saves));
            // puis on fait un return
            return;
        },

        // écrase une sauvegarde déjà existente
        overwriteSaveById(state, payload) {
            // on parcourt les saves
            for (let index = 0; index < state.saves.length; index++) {
                // si une des saves match avec le saveId reçu en paramètre:
                if(state.saves[index].saveId === payload.saveId) {
                    // création d'une nouvelle sauvegarde à partir de la sauvegarde courante
                    const newSave = state.saves[index];
                    // attribution des nouvelles valeurs
                    newSave.gridData = payload.gridData;
                    newSave.data = payload.date;
                    // attribution de la nouvelle date
                    // on remplace l'élément courant du tableau des saves par la nouvelle save
                    state.saves[index] = newSave;
                    // on stop la boucle
                    break;
                }      
            }
            // on vient modifier le local storage avec les nouvelles sauvegardes
            localStorage.setItem('drawSaves', JSON.stringify(state.saves));
            // puis on fait un return
            return;
        },

        // met les sauvegarde dans le state
        setSaves(state, saves) {
            state.saveNumber = saves.length;
            return state.saves = saves;
       },
    },
};
