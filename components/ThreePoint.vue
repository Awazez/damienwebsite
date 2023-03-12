<template>

<section class="section_projects bg-[#FAF6F2] mt-[-45px] pt-24">
        <div class="projects__grid grid gap-8 max-w-screen-lg ">
          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_bed.png">
            <h1>Ecoute bienveillante</h1>
            <p class="project__description">
              Quelles que soient vos difficultés, j’accueille votre parole avec bienveillance et humanité dans un espace sécurisé où tout peut être déposé, sans se censurer, car nommer ses maux est la première étape pour se libérer. 
            </p>
            <br>
            <NuxtLink to="/ContactPage" class=" bg-[#FAF6F2] py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  En savoir plus </NuxtLink>
      
          </div>

          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_hypnose.png">
            <h1>Se reconnecter à soi</h1>
            <p class="project__description">
              Bien souvent, on se dissocie émotionnellement de notre vécu douloureux. Pourtant, il est nécessaire de reconnecter ces moments et de s’associer à ce qui se passe à l’intérieur de nous pour transmuter  et reprendre son pouvoir personnel sur ces situations difficiles. Je vous accompagne dans cette traversée intérieure.
            </p>

            <NuxtLink to="/ContactPage" class=" bg-[#FAF6F2] py-2 px-4 md:py-4 md:px-6 border select-none hover:bg-gray-100 bg-white rounded shadow-lg text-black">  En savoir plus </NuxtLink>
      
          </div>
          <div class="px-8 py-6 mt-4 text-center bg-[#FAF6F2] box"> 
            <img class="" src="@/assets/img_yoga.png">
            <h1>Trouver du sens</h1>
            <p class="project__description">
              Il arrive d’avoir la sensation de ne pas être maître de sa vie et de reproduire inconsciemment les mêmes choses sans comprendre pourquoi. S'engager dans un travail thérapeutique permet de mettre du sens sur ce qui nous arrive. 
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
  font-size: 15px;
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
