<template>
    <aside>
        <div class="currentColor"></div>
        <p>Choose a color !</p>
    </aside>
</template>

<script>
export default {
    name: 'ColorSelector',
}
</script>
<style>
aside {
    display: flex;
    align-items: center;
    margin: 1rem;
    flex-direction: column;
}
.currentColor {
    height: 50px;
    width: 50px;
    border-radius: .2rem;
    cursor: pointer;
    background-color: aqua;
}
</style>