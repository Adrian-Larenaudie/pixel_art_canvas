<template>
    <aside>
        <div class="currentColor" id="currentColor">
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
        ...mapGetters('colorSelector', ['getColorPanelDisplay']),
    },
    methods: {
        ...mapMutations('', ['']),
    },
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
    background-color: aqua;
}
.currentColor:hover {
    border-color: grey;
}
</style>