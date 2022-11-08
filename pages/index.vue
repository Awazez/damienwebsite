<template>
  <div>
    <CommercialBar/>
    <NavBar/>
    <HeroHeader/>
    <ThreePoint/>
  </div>
  
</template>

<script>
import ThreePoint from '~/components/ThreePoint.vue';

export default {
    name: "IndexPage",
    components: { ThreePoint }
}
</script>
