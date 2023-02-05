<!-- affiche 4 bouttons: clean du canvas, accès aux saves, accès aux chargements, téléchargement du dessin -->
<template>
    <div class="buttonSide">
        <button @click="displaySaveView">Save</button>
        <button @click="displayLoadView">Load</button>
        <button @click="downloadAsImage">Download</button>
        <button @click="clearCanvas">Clear</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { generateGridService } from '@/services';

// Importation du package html2canvas
import html2canvas from "html2canvas";

export default {
    name: 'ButtonsSide',
    computed: {
        ...mapGetters('pixelArea', ['getGridData']),
    },
    methods: {
        ...mapMutations('pixelArea', ['setGridData', 'cleanGridData']),

        // remet le canvas dans son état initial (efface le dessin)
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

        // affiche la vue de chargement d'une sauvegarde
        displayLoadView() {
            this.$router.push({ path: '/load' })
        },

        // permet de télécharger l'image par l'utilisateur
        downloadAsImage() {
            // à l'aide du module html2canvas on va faire une capture du contenu de la div #pixelCanvas
            html2canvas(document.querySelector("#pixelCanvas"), {
                // Autoriser les images externes
                allowTaint: true,
                // Autoriser l'utilisation de CORS
                useCORS: true
                // Lorsque la capture est terminée, le canvas est retourné
                }).then(canvas => {
                    // Conversion du canvas en un objet Blob
                    canvas.toBlob(blob => {
                        // Création d'un lien HTML
                        const link = document.createElement("a"); 
                        // Définition de l'URL du lien à partir de l'objet Blob
                        link.href = URL.createObjectURL(blob);
                        // Définition du nom du fichier à télécharger
                        link.download = "myPixelArt.jpg";
                        // Déclenchement pragmatique du téléchargement en utilisant la méthode click pour simuler un click sur le lien
                        link.click();
                    });
            });
        },
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