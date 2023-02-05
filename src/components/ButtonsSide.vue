<!-- affiche trois bouttons: clean du canvas, accès aux saves, accès aux chargements -->
<template>
    <div class="buttonSide">
        <button @click="displaySaveView">Save</button>
        <button @click="displayLoadView">Load</button>
        <button @click="clearCanvas">Clear</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { generateGridService } from '@/services';

export default {
    name: 'ButtonsSide',
    computed: {
        ...mapGetters('pixelArea', ['getGridData']),
    },
    methods: {
        ...mapMutations('pixelArea', ['setGridData', 'cleanGridData']),
        clearCanvas() {
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
        },
        // affiche la vue d'enregistrement d'une sauvegarde
        displaySaveView() {
            this.$router.push({ path: '/saves' });
        },
        // zffiche la vue de chargement d'une sauvegarde
        displayLoadView() {
            this.$router.push({ path: '/load' })
        }
    }
}
</script>
<style scoped>
.buttonSide {
    position: absolute;
    margin: auto;   
    right: 1rem;
    top: 1rem;
}
button {
    margin-right: .5rem; 
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