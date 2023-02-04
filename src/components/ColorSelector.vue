<!-- affiche la couleur courante dans un carré permet d'ouvrir la panneau de sélection de couleur sur le click -->
<template>
    <aside>
        <div :style="{ backgroundColor: getCurrentColor }" class="currentColor" id="currentColor">
            <!-- colorpanel est le panneau de selection de couleur -->
            <Colorpanel v-if="getColorPanelDisplay" />
        </div>
        <p>Choose a color !</p>
    </aside>

</template>

<script>

import Colorpanel from '@/components/ColorPanel.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ColorSelector', 
    components : {
        Colorpanel,
    },
    computed: {
        ...mapGetters('colorSelector', ['getColorPanelDisplay', 'getCurrentColor']),
    },
    methods: {
        ...mapMutations('', ['']),
    },
    mounted() {
        
    }
}
</script>

<style>
aside {
    display: flex;
    align-items: center;
    margin: 1rem;
    flex-direction: column;
}
.currentColor {
    border: solid 1px var(--color-background);;
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: .5rem;
    cursor: pointer;
}
.currentColor:hover {
    border-color: grey;
}
</style>