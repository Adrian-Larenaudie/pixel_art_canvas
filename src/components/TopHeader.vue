<!-- affiche le header qui contient un titre et un sous titre -->
<template>
    <header>
        <h1>Pixel Art Canvas</h1>
        <p>Express yourself !</p>
    </header>
</template>

<script>
export default {
    name: 'TopHeader',
}
</script>

<style>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
</style>