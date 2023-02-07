<template>
    <p @click="close" class="infoMessage">{{ getMessage }} </p>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'MessageInfo',
    computed: {
        ...mapGetters('message', ['getMessage']),
    },
    mounted() {
        // anime l'apparition du message
        setTimeout(() => {
            document.querySelector('.infoMessage').style.opacity = 1;
            document.querySelector('.infoMessage').style.transform = 'translateY(20%)';
        }, 25);
        
    },
    methods: {
        ...mapMutations('message', ['setMessageValue']),

        // sur le click du message on l'efface
       close(event) {
        event.target.style.opacity = 0;
        setTimeout(() => {
            this.setMessageValue('');
        }, 500);
       } 
    },
}
</script>

<style>
.infoMessage {
    cursor: pointer;
    transition: .5s;
    left: 40%;
    font-size: 1rem;
    top: 0;
    right: auto;
    position: absolute;
    padding: .5rem 2rem;
    opacity: 0;
    border: solid 1px #9bc5b2;
    border-radius: .4rem;
    background-color: #a1bfb1;;
    color: #146c43;
}
</style>