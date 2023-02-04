<template>
    <main>
        <!-- 38 colonnes de 10 pixels & 30 lignes de 10 pixels -->
        <div  id="pixelCanvas">
            <!-- la div correspond à un pixel elle est lié au state gridData -->
            <div @click="onPixelClick"
                class="pixel"
                v-for="pixelData in getGridData"
                :id="pixelData.pixelId"
                :style="{
                    backgroundColor: pixelData.color,
                    height: pixelData.pixelSize + 'px',
                    width: pixelData.pixelSize + 'px',
                }">
            </div>
        </div>
    </main>
</template>

<script>

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
        // lors du click sur une div pixel
        onPixelClick(event) {
            // on appel la mutation qui permet de mettre à jour la couleur du pixel cliqué dans le state
            this.setNewPixelColor({color: this.getCurrentColor, pixelId: parseInt(event.target.id, 10)})
        },
    },
    mounted() {
        const gridData = generateGridService.generateGridData(this.getGridData);
        this.setGridData(gridData);
    }
}
</script>

<style>
main {
    display: flex;
}
/* 38 colonnes de 20 pixels & 30 lignes de 20 pixels */
#pixelCanvas {
    display: flex;
    flex-wrap: wrap;
    width: 760px;
    height: 600px;
    margin: auto;
    background-color: #000;
    cursor: pointer;
}
</style>