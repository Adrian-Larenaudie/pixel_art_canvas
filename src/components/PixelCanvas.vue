<template>
    <main>
        <!-- 38 colonnes de 20 pixels & 30 lignes de 20 pixels -->
        <canvas id="pixelCanvas" width="760" height="600"></canvas>
    </main>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'PixelCanvas',

    computed: {
        ...mapGetters('pixelArea', ['getGridData', '', '']),
    }, 

    methods: {
        ...mapMutations('pixelArea', ['setGridData']),
        draw() {
            const gridData = this.getGridData;

            console.log(gridData);
            const pixelCanves = document.querySelector('#pixelCanvas');
            const ctx = pixelCanves.getContext('2d');
            gridData.forEach(pixel => {
                ctx.fillStyle = pixel.color;
                ctx.fillRect(pixel.y, pixel.x, pixel.pixelSize, pixel.pixelSize);
            });
            
        },
        loadGridData() {
            console.log('loadGridData');
            let gridData = [];
            let pixelId = 0;
            const pixelSize = 20;
            const columnsNumber = 38;
            const rowsNumber = 30;
            for (let column = 0; column < columnsNumber; column++) {
                for (let row = 0; row < rowsNumber; row++) {
                    gridData.push({pixelId: pixelId, pixelSize: 20, x: row * pixelSize, y: column * pixelSize, color: '#c3c3c3'})
                    pixelId++;
                }        
            }
            this.setGridData(gridData);
            this.draw();
        },
    },

    mounted() {
        if(!localStorage.getItem('pixelArtCanvasData')) {
            console.log('on va appelé loadArrayData'); 
            this.loadGridData();
        } else {
            console.log('il y a une présence en local storage du pixelData');
        }       
    }
}
</script>

<style>
main {
    display: flex;
}
canvas {
    margin: auto;
    background-color: #000;
    cursor: pointer;

}
</style>