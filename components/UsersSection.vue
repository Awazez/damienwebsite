<template>
  <section class="bg-white container">
    <div class="">
        <h1>Avis des utilisateurs <span>🚀</span> </h1>
    </div>
    <div>
      <p>{{ names[0]}}</p> 
      <div class="center">
        <button v-on:click="reverseReviewContent()" class="py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black"> Voir un autre avis</button>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      names: [" Damien Doussot a su toute suite comprendre la problèmatique de notre couple et ainsi proposer des solutions à travers notamment l'hypnose pour rendre notre vie de couple plus épanouit. Si c'était à refaire je choisirais à nouveau Damien Doussot. Ella et Arthur",
  "Le sexothérapeut M. Doussot, nous a permis d'apprendre à mieux nous connaitre moi et Marie. Nous étions à une période ou la routine devenant très présente dans notre couple. Et un nouveau souffle était nécessaire. Merci ! Marie et Louis" ]
    }; 
},
 methods: {
  reverseReviewContent() {
    this.names.reverse()
  }
 }


}
</script>

<style scoped>

p {
  margin-top: 15px;
  text-align: justify;
  margin-left: 25px;
  width: 700px;
}

h1 {
  font-size: 40px;
}

.container {
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.center {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>