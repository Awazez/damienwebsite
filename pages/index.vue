<template>
  <div>
    <CommercialBar/>
    <NavBar/>
    <Carousel></Carousel>

    <HeroHeader/>
    <ThreePoint/>
    <ActuSection/>
    <UsersSection/>
    <InstagramSection/>
  </div>
</template>
<script>
import ThreePoint from '~/components/ThreePoint.vue';

export default {
    name: "IndexPage",
    components: { ThreePoint },
    data: () => ({
      slides: [
        "https://picsum.photos/id/1032/900/400",
        "https://picsum.photos/id/1033/900/400",
        "https://picsum.photos/id/1034/900/400",
        "https://picsum.photos/id/1035/900/400",
        "https://picsum.photos/id/1036/900/400",
      ]
    })
}
</script>
