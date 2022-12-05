<template>
  <div class="container">
        <h1>Avis des utilisateurs <span>🚀</span> </h1>
      <div class="center">
      <p>{{ names[0]}}</p> 
    </div>
      <div class="center">
        <button v-on:click="reverseReviewContent()" class="py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black"> Voir un autre avis</button>
      </div>
    </div>

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
  padding-top: 15px;
  text-align: justify;
  margin-left: 25px;
  width: 700px;
  text-align: center;

}

h1 {
  padding-top: 150px;
  font-size: 40px;
  text-align: center;
}

.container {
  height: 550px;
  max-width: 100%;
  background-color: #FAF6F2;
  padding-bottom: 150px;
  

}

.center {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>