<!-- affiche lz liste des sauvegardes au clik permet de charger le dessin  -->
<template>

<button class="linkButton" @click="backHome">Back home</button>
<div class="main">
    <table>
        <caption>Loading management</caption>
        <tbody>
            <tr>
                <td class="tdTitle" colspan="5">Save list (max 10):</td>
            </tr>
            <!-- La liste des sauvegardes -->
            <tr v-for="save in getSaves">
                <td>{{ save.saveId }}</td>
                <td>{{ save.name }}</td>
                <td>{{ save.date }}</td>
                <td><button class="submitButton" @click="loading" :value="save.saveId">Charger</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'LoadVue',
    computed: {
        ...mapGetters('loadSaveDraw', ['getSaves', 'getSaveById']),
    },
    methods: {
        ...mapMutations('pixelArea', ['setGridData']),
        ...mapMutations('loadSaveDraw', ['setSaves']),

        // affiche la vue principale
        backHome() {
            this.$router.push({ path: '/' });
        },

        // permet de charger un dessin
        loading(event) {
            // récupération de la sauvegarde 
            const save = this.getSaveById(parseInt(event.target.value, 10));
            // mise en place de la sauvegarde dans le state
            this.setGridData(save.gridData);
            // on indique que le chargement est réussit
            alert('Loading success');
            // on renvoit vers le canvas
            this.$router.push({ path: '/' });
        },

    },
    mounted() {
        // sur le montage du composant on vient récupérer les sauvegardes si elles sont présentes en local storage
        if(localStorage.getItem('drawSaves')) {
            this.setSaves(JSON.parse(localStorage.getItem('drawSaves')));
        }
    },
}
</script>

<style scoped>
div {
    color: #fff;
}
.tdTitle {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
}
.messageInfo {
    color: #fff;
}
button {
    padding: .4rem;
    border-radius: .3rem;
    font-family: 'Jet Brains Mono';
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
    transition: .4s;
}
.linkButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
button:hover {
    background-color: #fff;
}
.submitButton, .deleteButton {
    font-size: 1rem;
    min-width: 100px;
}
.deleteButton:hover {
    background-color: rgb(150, 1, 1);
    color: #fff;
}
.submitButton:hover {
    background-color: rgb(1, 77, 1);
    color: #fff;
}
.main {
    display: flex;
    justify-content: center;
}
caption {
    margin: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
}
table, th, tr {
    border: 2px solid lightgrey;
    border-collapse: collapse;
    border-radius: .4rem;
}
th, td {
    padding: 1rem;
    min-width: 100px;
}

</style>