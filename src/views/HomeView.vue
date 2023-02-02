<template>
    <div class="app" @click="onClick">
        <TopHeader />
        <PixelCanvas />
        <ColorSelector />
    </div>

</template>

<script>

import TopHeader from '@/components/TopHeader.vue';
import PixelCanvas from '@/components/PixelCanvas.vue';
import ColorSelector from '@/components/ColorSelector.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        TopHeader,
        PixelCanvas,
        ColorSelector,
    },
    computed: {
        ...mapGetters('colorSelector', ['getColorPanelDisplay']),
    },
    methods: {
        ...mapMutations('colorSelector', ['setColorPanelDisplayToFalse', 'toggleColorPanelDisplay']),

        // sur la click dans la div app qui englobe toute l'application
        onClick(event) {
            // si il s'agit de la div currentColor on va toggle l'affichage du colorPanel
            if(event.target.id === 'currentColor') {
                console.log(true);
                this.toggleColorPanelDisplay();
            // sinon on le passe à false si il est à true
            } else if (this.getColorPanelDisplay) {
                this.setColorPanelDisplayToFalse();
            }
        }
    },
};
</script>

<style>
.app {
    min-height: 100vh;
}
</style>