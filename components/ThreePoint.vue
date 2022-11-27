<template>

<section class="section_projects bg-[#FAF6F2] pt-12">
        <div class="projects__grid grid gap-8 max-w-screen-lg ">
          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_bed.png">
            <p class="project__description">
              La sexothérapie est une forme spécialisée de la psychothérapie qui aborde la sexualité de la personne dans toutes ses dimensions (physique, mentale, émotionnelle, énergétique, spirituelle) afin de traiter les troubles sexuels et retrouver une sexualité épanouie. 
            </p>
            <br>
            <NuxtLink to="/ContactPage" class=" bg-[#FAF6F2] py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  En savoir plus </NuxtLink>
      
          </div>

          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_hypnose.png">
            <p class="project__description">
              En état d’hypnose, vous pouvez modifier des comportements qui ne sont pas ou plus adaptés à votre bien-être et dépasser vos limites habituelles.
Vous pouvez régler toutes sortes de problématiques, apparues récemment ou celles plus anciennes qui perdurent dans le temps.
            </p>

            <br>
            <NuxtLink to="/ContactPage" class=" bg-[#FAF6F2] py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  En savoir plus </NuxtLink>
      
          </div>
          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_yoga.png">
            <p class="project__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nisi quod ab mollitia ea molestias maxime saepe in rem at nostrum quas, dolorem assumenda veniam aperiam. Inventore neque quas aperiam?
            </p>
            <br>
            <NuxtLink to="/ContactPage" class=" bg-[#FAF6F2] py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  En savoir plus </NuxtLink>
      
          </div>
        </div>
      </section>

</template>


<style scoped>


.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
    background-color: #FAF6F2;
}

.container_text {
    align-content: center;
    display: flex;
}


h2 {
 font-size: 2rem;
    
}

h3 {
 font-size: 2rem;
    
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/*========
  layout
========*/

.projects__grid {
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
}

.project {
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.2s linear;
}

.project:hover {
  transform: translateY(-7px);
}

.project__description {
  margin-top: 1em;
  text-align: justify;
}
  
.project__stack {
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;
}

.project__stack-item {
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
}



.project .link--icon {
  margin-left: 0.5em;
}



.content_title {
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
}

</style>
