<template>
  <div class="carousel">
    <div class="carousel-inner">
        <carousel-item v-for="(slide, index) in slides" :slide="slide" v-bind:key="index"></carousel-item>
    </div>
  </div>
</template>

<script>

import CarouselItem from "./CarouselItem.vue";

export default {
    components: { CarouselItem}
}
</script>

<style scoped>

</style>