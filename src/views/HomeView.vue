<template>
    <TopHeader />
    <PixelCanvas />
    <ColorSelector />
</template>

<script>

import TopHeader from '@/components/TopHeader.vue';
import PixelCanvas from '@/components/PixelCanvas.vue';
import ColorSelector from '@/components/ColorSelector.vue';

export default {
    name: 'HomeView',
    components: {
        TopHeader,
        PixelCanvas,
        ColorSelector,
    }
};
</script>