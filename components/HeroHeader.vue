<template>
<section class="clip-path px-4 bg-bermuda text-center wave-container">
             <div class="hero_title ">
              Pour <br>
              retrouver un <br>
              plaisir <br>
              partagé
              </div> 
</section>
</template>
    
<script>
    export default {
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');

.wave-container {
  position: relative;
  background-image: url('@/assets/img_hero_header.jpg');
  background-size: cover;
  color: black;
  overflow: hidden;
  text-align: left;
}

h1 {
  font-family: 'Lato', sans-serif;
  color:black;
  font-size: 3em;
  font-weight:bold; 
}
p {
  font-size: 1.5rem;
  margin: 0 1.25rem 5rem 1.25rem;
}

span {
  display: inline-block;
}

.box{
    width:200px; 
    height:50px; 
    background: #ccc; 
    margin: 0 auto; 
    text-align:center; 
    line-height:50px;
}

.clip-path {
  width: 100%;
  min-height: 600px;
}

.hero_title {
    margin-left: 100px;
    margin-top: 115px;
    font-family: 'Raleway', sans-serif;
    font-size: 4em;
    color: white;
}
.fadeInUp{
    animation:fadeInUp 0.5s ease backwards;
    margin-left: 8px;
}

@keyframes fadeInUp{
  0%{transform:translate(0px, 30px); opacity: 0;}
  100%{transform:translate(0px, 0); opacity: 1;}
}

@media screen { 
  
}

    
</style>

