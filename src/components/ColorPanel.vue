<!-- affiche le panneau des couleurs -->
<template>
    <div id="colorPanel" class="colorPanel">
        <div class="colorSelect" v-for="color in getColorArray" :style="{ backgroundColor: color }"></div>
        <div class="customColorSelector selector">
            <input type="color" class="selector inputColor" id="head" name="head" value="#e66465">
            <label for="head" class="selector">Custom color</label>
            <button @click="onClick" class="buttonColor selector">Validate</button>
        </div>
        <!-- customColorList est la partie qui affiche les 4 couleurs custom -->
        <CustomColorList />
    </div>
</template>

<script>
import CustomColorList from '@/components/CustomColorList.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ColorPanel',
    components: {
        CustomColorList
    },
    computed: {
        ...mapGetters('colorSelector', ['getColorPanelDisplay', 'getCurrentColor', 'getColorArray']),
    },    
    methods: {
        ...mapMutations('colorSelector', ['setNewColor', 'setNewCustomColor']),
        onClick() {
            this.setNewCustomColor(document.querySelector('#head').value);
        }
    },
}
</script>

<style>
.colorPanel {
    border: solid 2px grey;
    padding: .2rem;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: calc(200px + 2.5rem);
    position: absolute;
    background-color:  var(--color-background);
    top: -345px;
    left: 55px;
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
.customColorSelector {
    padding: 1rem 0;
    display: flex;
    align-items: center;
}
.buttonColor, .inputColor {
    cursor: pointer;
}
label {
    margin: 0 .2rem;
    font-size: .8rem;
}
.buttonColor {
    margin: .5rem 0;
    padding: .2rem;
    border-radius: .3rem;
    font-family: 'Jet Brains Mono';
    font-weight: 600;
}
.buttonColor:hover {
    background-color: #fff;
}

</style>