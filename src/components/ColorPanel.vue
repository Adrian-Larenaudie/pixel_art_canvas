<template>
    <div id="colorPanel" class="colorPanel">
        <div class="colorSelect" v-for="color in getColorArray" :style="{ backgroundColor: color }"></div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ColorPanel',
    computed: {
        ...mapGetters('colorSelector', ['getColorPanelDisplay', 'getCurrentColor', 'getColorArray']),
    },    
    methods: {
        ...mapMutations('', ['']),
    },
    mounted() {
        
    }
}
</script>

<style>
.colorPanel {
    padding: .2rem;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: calc(150px + 1.6rem);
    position: absolute;
    background-color:  var(--color-background);
    top: -300px;
    border-radius: .5rem;
    z-index: 1;
}
.colorSelect {
    border: solid 1px  var(--color-background);
    position: relative;
    margin: .2rem;
    height: 50px;
    width: 50px;
    border-radius: .5rem;
    cursor: pointer;
}
.colorSelect:hover {
    border-color: grey;
}
</style>