<!-- affiche un boutton pour réinitialiser la zone de dessin -->
<template>
    <div>
        <button @click="onClick">Clean canvas</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { generateGridService } from '@/services';

export default {
    name: 'CleanCanvasButton',
    computed: {
        ...mapGetters('pixelArea', ['getGridData']),
    },
    methods: {
        ...mapMutations('pixelArea', ['setGridData', 'cleanGridData']),
        onClick() {
            // sur le click du boutton clean on va demander la confirmation au user 
            if(confirm('This action will clean the drawing area, are you sure?')) {
                // le local storage est vidé
                localStorage.removeItem('pixelArtCanvas');
                // le state grid data est vidé également
                this.cleanGridData();
                // à l'aide d'un service on va régénérer la grille du canvas
                const gridData = generateGridService.generateGridData(this.getGridData);
                // et utiliser la valeur de retour pour ajouter cette nouvelle valeur dans le state gridData
                this.setGridData(gridData);
            }
        }
    }
}
</script>
<style scoped>
button {
    position: absolute;
    margin: auto;   
    right: 1rem;
    top: 1rem;
    padding: .4rem;
    border-radius: .3rem;
    font-family: 'Jet Brains Mono';
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
}
button:hover {
    background-color: #fff;
}
</style>