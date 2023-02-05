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
    },
    // à chaque montage on doit générer la grille
    mounted() {
        const gridData = generateGridService.generateGridData(this.getGridData);
        this.setGridData(gridData);
    }
}
</script>

<template>
  <header>
  </header>
  <RouterView />
</template>
