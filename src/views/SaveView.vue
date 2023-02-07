<!-- affiche la liste des sauvegardes permet de créer une save ou d'écraser une ancienne sauvegarde et de donner un nom à la save  -->
<template>

<button class="linkButton" @click="backHome">Back home</button>
<div class="main">
    <table>
        <caption>Registration management</caption>
        <thead>
            <tr>
                <td class="tdTitle" colspan="5">
                    <p>New save:</p>
                    <MessageInfo v-if="getMessage !== ''"/>
                </td>
            </tr>
            <!-- l'ajout d'une nouvelle sauvegardes affiché seulement si il y a moins de 10 sauvegardes dans la liste -->
            <tr v-if="getSaveNumber <= getMaxSaveNumber">
                <td colspan="3">Name: <input type="text" @change="onChangeNewSaveName" v-bind:value="newSaveName"/><span class="messageInfo">({{ this.messageInfo }})</span></td>
                <td colspan="2" class="tableInput"><button @click="registerNewSave" class="submitButton">Register</button></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tdTitle" colspan="5">Save list (max 10):</td>
            </tr>
            <!-- La liste des sauvegardes -->
            <tr v-for="save in getSaves">
                <td>{{ save.saveId }}</td>
                <td>{{ save.name }}</td>
                <td>{{ save.date }}</td>
                <td><button class="submitButton" @click="overwriteSave" :value="save.saveId">Overwrite</button></td>
                <td><button class="deleteButton" @click="deleteSave" :value="save.saveId">Delete</button></td>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
import MessageInfo from '@/components/MessageInfo.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'SaveView',
    components: {
        MessageInfo,
    },
    data() {
        return {
            newSaveName: '',
            messageInfo: 'only letters & numbers',
        }
    },
    computed: {
        ...mapGetters('loadSaveDraw', ['getSaveNumber', 'getMaxSaveNumber', 'getSaves', 'getMaxSaveId']),
        ...mapGetters('pixelArea', ['getGridData']),
        ...mapGetters('message', ['getMessage']),
    },
    methods: {
        ...mapMutations('loadSaveDraw', ['setNewSave', 'setSaves', 'deleteSaveById', 'overwriteSaveById']),
        ...mapMutations('message', ['setMessageValue']),

        // affiche la vue principale
        backHome() {
            this.$router.push({ path: '/' });
        },

        // permet de mettre à jour la valeur de newSaveName
        onChangeNewSaveName(event) {
            this.newSaveName = event.target.value;
        },

        // permet d'ajouter une nouvelle sauvegarde
        registerNewSave() {
            // le message devient rouge
            document.querySelector('.messageInfo').style.color = 'red';
            // on check si il s'agit bien uniquement de caractères alphanumériques est espaces (trim pour néttoyer les bords)
            if(/^[a-zA-Z0-9\s]+$/.test(this.newSaveName.trim())) {
                // on passe le message en blanc
                document.querySelector('.messageInfo').style.color = '#fff';
                this.messageInfo = 'only letters & numbers';
                // préparation de la nouvelle sauvegarde
                const newSave = {
                    saveId: this.getMaxSaveId + 1,
                    name: this.newSaveName,
                    date: this.formatDate(Date.now()),
                    gridData: this.getGridData,
                }
                // on appelle une mutation pour sauvegarder le dessin
                this.setNewSave(newSave);
                // on vide l'input
                this.newSaveName = '';
                // modification du message info
                this.changeInfoMessage('Saved successfully');
            // si il n'y a rien dans l'input on délivre un message différent
            } else if (this.newSaveName.trim().length === 0) {
                this.messageInfo = 'name shouldn\'t empty';
            // sinon on remet le message par défaut
            } else {
                this.messageInfo = 'only letters & numbers';
            }
        },

        // supprime un sauvegarde
        deleteSave(event) {
            // appel de la mutation pour suprrimer la sauvegarde
            const saveId = parseInt(event.target.value, 10)
            this.deleteSaveById(saveId);
            // modification du message info
            this.changeInfoMessage('Save deleted');
        },

        // écrase une sauvegarde existante par une nouvelle
        overwriteSave(event) {
            // appel de la mutation pour suprrimer la sauvegarde
            const saveId = parseInt(event.target.value, 10);
            // on envoit dans la mutation le saveId, la gridData & la date courante pour faire la mise à jour de la sauvegarde
            this.overwriteSaveById({saveId: saveId, gridData: this.getGridData, date: this.formatDate(Date.now())});
            // modification du message info
            this.changeInfoMessage('Save overwritten');
        },

        // transforme un timestamp en date au format YYYY-MM-DD
        formatDate(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = `0${date.getMonth() + 1}`.slice(-2);
            const day = `0${date.getDate()}`.slice(-2);
            return `${day}-${month}-${year}`;
        },

        // permet d'appeler la mutation pour modifier le message info puis au bout de 3 seconde efface le message
        changeInfoMessage(message) {
            // d'abord à vide
            this.setMessageValue('');
            // puis avec le message pour redéclencher l'animation
            setTimeout(() => {
                this.setMessageValue(message);
            }, 100);
            
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
input {
    border: none;
    height: 2rem;
    border-radius: .2rem;
    margin-right: .5rem;
}
div {
    color: #fff;
}
.tdTitle {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    position: relative;
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