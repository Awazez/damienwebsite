<template>
<div class="bg-white">
        <nav class="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                <NuxtLink to="/" class="w-2/3 font-bold fonted"><img src=""> Damien Doussot</NuxtLink> 
                </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <NuxtLink to="/"><li class="text-black hover:text-indigo-400">Accueil</li>           </NuxtLink>
            <NuxtLink to="/AccompagnementPage"><li class="text-black hover:text-indigo-400">Accompagnement</li> </NuxtLink>
            <NuxtLink to="/WhoPage"><li class="text-black hover:text-indigo-400">Qui suis je?</li>   </NuxtLink>
            <NuxtLink to="/TarifsPage"><li class="text-black hover:text-indigo-400"> Tarifs</li></NuxtLink>
            <NuxtLink to="/ContactPage"><li class="text-black hover:text-indigo-400">Contact</li>    </NuxtLink>
        </ul>
        </nav>
    </div>
  </template>
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');



button {
    width: 139px;
    height:56px;
    border-radius: 25px;
    background-color: #6AFF8B;

}

li {
    padding: 14px;
}

.container {
    font-family: 'Ubuntu', sans-serif;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.container_left {
    height: 144px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    margin-left: 200px;

}

.container_right {
    height: 144px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    margin-left: 200px;
    margin : 15px;

}

.logo {
    font-family: 'Ubuntu', sans-serif;
}

  </style>