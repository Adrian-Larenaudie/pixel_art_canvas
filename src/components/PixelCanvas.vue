<!-- affiche la zone de dessin si on clique sur un des pixels de la zone, le pixel prend la couleur définit dans le selecteur de couleur -->
<template>
    <main>
        <!-- 38 colonnes de 10 pixels & 30 lignes de 10 pixels -->
        <div  id="pixelCanvas">
            <!-- la div correspond à un pixel elle est lié au state gridData -->
            <div @mouseover="onHover" @mouseleave="onLeave" @click="onPixelClick"
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
        // pour aider l'utilisateur à visialiser le pixel survolé changement de l'opacité sur les events mouseover & mouseleave 
        onHover(event) {
            event.target.style.opacity = '.9';
        },
        onLeave(event) {
            event.target.style.opacity = '1';
        },
    },
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
.pixel {
    transition: .1s;
}
</style>