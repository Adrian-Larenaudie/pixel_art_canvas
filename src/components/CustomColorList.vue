<!-- affiche les 4 couleurs custom -->
<template>
    <div class="customColorList selector">
        <p class="customColorTitle selector">Custom color list:</p>
        <div class="colorSelect" :style="{ backgroundColor: customColor }" v-for="customColor in getCustomColorArray"></div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'CustomColorList',
    computed: {
        ...mapGetters('colorSelector', ['getCustomColorArray']),
    },    
    methods: {
        ...mapMutations('colorSelector', ['setNewColor', 'setNewCustomColor', 'setCustomColorArray']),
    },
    mounted() {
        // si customColorArray est présent dans le local storage on récupère ça valeur pour la mettre dans le state
        if(localStorage.getItem('customColorArray')) {
            this.setCustomColorArray(JSON.parse(localStorage.getItem('customColorArray')));
        }
    }
}
</script>
<style>
.customColorTitle {
    width: 100%;
}
.customColorList {
    display: flex;
    flex-wrap: wrap;
}

</style>