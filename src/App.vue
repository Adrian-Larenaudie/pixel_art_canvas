<template>
    <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import { mapGetters, mapMutations } from 'vuex';
import { generateGridService } from '@/services';

export default {
    name: 'PixelCanvas',
    computed: {
        ...mapGetters('pixelArea', ['getGridData']),
        ...mapGetters('colorSelector', ['getCurrentColor']),
    }, 

    methods: {
        ...mapMutations('pixelArea', ['setGridData', 'setNewPixelColor']),
        ...mapMutations('message', ['setMessageValue']),
    },
    // à chaque montage on doit générer la grille
    mounted() {
        const gridData = generateGridService.generateGridData(this.getGridData);
        this.setGridData(gridData);
        
        
    },
    watch:{
        $route() {
            // si la route est différente de /saves on passe le message info à vide
            if(this.$router.path !== '/saves') {
                this.setMessageValue('');
            }
        },
    },
}
</script>
