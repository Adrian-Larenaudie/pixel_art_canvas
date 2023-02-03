<template>
    <main>
        <!-- 38 colonnes de 10 pixels & 30 lignes de 10 pixels -->
        <div  id="pixelCanvas">
            <!-- la div correspond à un pixel elle est lié au state gridData -->
            <div @click="onPixelClick"
                class="pixel"
                v-for="pixelData in getGridData"
                :id="pixelData.pixelId"
                :style="{
                    backgroundColor: pixelData.color,
                    height: pixelData.pixelSize + 'px',
                    width: pixelData.pixelSize + 'px',
                }">
            </div>
        </div>
    </main>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'PixelCanvas',
    computed: {
        ...mapGetters('pixelArea', ['getGridData']),
        ...mapGetters('colorSelector', ['getCurrentColor']),
    }, 

    methods: {
        ...mapMutations('pixelArea', ['setGridData', 'setNewPixelColor']),
        // lors du click sur une div pixel
        onPixelClick(event) {
            // on appel la mutation qui permet de mettre à jour la couleur du pixel cliqué dans le state
            this.setNewPixelColor({color: this.getCurrentColor, pixelId: parseInt(event.target.id, 10)})
        },
    },

    mounted() {
        // si il y a déjà un canvas enregistré dans le localstorage
        if(localStorage.getItem('pixelArtCanvas')) {
            // on utilise une mutation vuex pour donner la valeur du tableau au state associé
            this.setGridData(JSON.parse(localStorage.getItem('pixelArtCanvas')));
        }
        // si les données n'ont pas encore été chargées et qu'il n'y a rien dans le local storage on va les générer
        else if(this.getGridData.length === 0) {
            // les données serons stockées dans le tableau gridData
            let gridData = [];
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
                    gridData.push({pixelId: pixelId, pixelSize: pixelSize, color: '#c3c3c3'});
                    // on incrémente l'id pour la prochaine itération
                    pixelId++;
                }        
            }
            // on utilise une mutation vuex pour donner la valeur du tableau au state associé
            this.setGridData(gridData);
        }
    },
}
</script>

<style>
main {
    display: flex;
}
/* 38 colonnes de 20 pixels & 30 lignes de 20 pixels */
#pixelCanvas {
    display: flex;
    flex-wrap: wrap;
    width: 760px;
    height: 600px;
    margin: auto;
    background-color: #000;
    cursor: pointer;
}
</style>