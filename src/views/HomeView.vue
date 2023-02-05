<!-- affiche la vue principale -->
<template>
    <div @click="onClick" class="app">
        <!-- liste des bouttons pour clean le canvas/accéder aux saves/accéder aux chargements -->
        <ButtonsSide />
        <!-- le header avec le titre -->
        <TopHeader />
        <!-- la zone qui permet de poser un pixel de couleur  -->
        <PixelCanvas />
        <!-- le selector de couleur pour le pixel -->
        <ColorSelector />
    </div>
</template>

<script>

import TopHeader from '@/components/TopHeader.vue';
import PixelCanvas from '@/components/PixelCanvas.vue';
import ColorSelector from '@/components/ColorSelector.vue';
import ButtonsSide from '@/components/ButtonsSide.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        TopHeader,
        PixelCanvas,
        ColorSelector,
        ButtonsSide
    },
    computed: {
        ...mapGetters('colorSelector', ['getColorPanelDisplay']),
    },
    methods: {
        ...mapMutations('colorSelector', ['setColorPanelDisplayToFalse', 'toggleColorPanelDisplay', 'setNewColor']),

        // sur la click dans la div app qui englobe toute l'application
        onClick(event) {
            // si il s'agit de la div currentColor on va toggle l'affichage du colorPanel
            if(event.target.id === 'currentColor') {
                this.toggleColorPanelDisplay();
            } 
            // sinon si on click sur le colorPanel mais qu'il ne s'agit pas d'une couleur (y compris l'input color ou son label cad class selector)
            else if (event.target.id === 'colorPanel' || event.target.classList.value.includes('selector')) {
                // on ne fait rien
            }
            // sinon si on click sur une couleur du colorPanel ou une couleur du customColorList
            else if (event.target.parentElement.id === 'colorPanel' || event.target.parentElement.classList.value.includes('customColorList')) {
                // on va modifier la currentColor dans le state
                this.setNewColor(event.target.style.backgroundColor);
                // puis on ferme le panel
                this.setColorPanelDisplayToFalse();
            }
            // sinon on le passe à false si il est à true
            else if (this.getColorPanelDisplay) {
                this.setColorPanelDisplayToFalse();
            }
        }
    },
};
</script>

<style>
.app {
    height: 96vh;
}
</style>