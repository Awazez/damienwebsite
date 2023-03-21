<template>
<section class="px-4 bg-bermuda text-center wave-container clip-path">
      <div class="pb-12 mt-36">
             <div class="hero_title ">
                <span class="fadeInUp" style="animation-delay:0.1s;">Pour </span>  
                <span class="fadeInUp" style="animation-delay:0.2s;">retrouver</span> 
                <span class="fadeInUp" style="animation-delay:0.3s;">un</span>
              </div>
              <div class="hero_title">
                <span class="fadeInUp" style="animation-delay:0.4s;">plaisir </span>
                <span class="fadeInUp" style="animation-delay:0.5s;">partagé  </span>
              </div>

          <div class="mb-36 mt-12 fadeInUp" style="animation-delay:1.1s;">
            <a href="https://calendly.com/damien-doussot-therapeute" class="py-2 px-4 md:py-4 md:px-6 mr-2  select-none hover:bg-gray-700 bg-[#111827] rounded shadow-lg text-white">Prendre un RDV</a>
            <NuxtLink to="/ContactPage" class="py-2 px-4 md:py-4 md:px-6  select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  Contact <span>&rarr;</span></NuxtLink>
          </div>
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
  background-image: url('@/assets/img_couple.jpg');
  position: relative;
  background-size: cover;
  color: black;
  text-align: center;
  overflow: hidden;
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
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
}

.hero_title {
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
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


@media only screen and (max-width: 768px){
.hero_title {
    font-size: 50px;
  }
}

    
</style>

