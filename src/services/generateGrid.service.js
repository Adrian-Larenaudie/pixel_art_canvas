let generateGridData = (currentGridData) => {
     // les données serons stockées dans le tableau gridData
    let gridData = [];
    // si il y a déjà un canvas enregistré dans le localstorage
    if(localStorage.getItem('pixelArtCanvas')) {
        return gridData = JSON.parse(localStorage.getItem('pixelArtCanvas'))
    }
    // si les données n'ont pas encore été chargées et qu'il n'y a rien dans le local storage on va les générer
    else if(currentGridData.length === 0) {
        // chaque pixel possèdera un id
        let pixelId = 0;
        // la taille du pixel
        const pixelSize = 10;
        // le nombre de colonnes
        const columnsNumber = 76;
        // le nombre de lignes
        const rowsNumber = 60;
        // boucle sur les colonnes
        for (let column = 0; column < columnsNumber; column++) {
            // boucle sur les lignes
            for (let row = 0; row < rowsNumber; row++) {
                // pour chaque pixel on l'ajoute au tableau des données avec les propriétés id size & color
                gridData.push({pixelId: pixelId, pixelSize: pixelSize, color: '#fff'});
                // on incrémente l'id pour la prochaine itération
                pixelId++;
            }        
        }
        return gridData
    }
};

export const generateGridService = {
    generateGridData,
};