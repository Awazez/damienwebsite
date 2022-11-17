<template>
    <div class="bg-white">
        <nav class="container">
            <div class="container_left">
                <NuxtLink to="/" class="logo">Damien Doussot <br>Sexotherapeute</NuxtLink> 
            </div>
        <ul class="container_right">
            <NuxtLink to="/"><li class="navBotton">Accueil</li></NuxtLink>
            <NuxtLink to="/about"><li class="navBotton">Sophrologie</li></NuxtLink>
            <NuxtLink to="/blog"><li class="navBotton">Actualités</li></NuxtLink>
            <NuxtLink to="/contact"><li class="navBotton">Qui?</li></NuxtLink>
            <NuxtLink to="/contact"><li class="navBotton">Stages</li></NuxtLink>
            <NuxtLink to="/contact"><li class="navBotton">Tarifs</li></NuxtLink>
            <NuxtLink to="/contact"><li class="navBotton">Contact</li></NuxtLink>
            <button><NuxtLink to="/contact"><li class="navBotton">Prendre RDV</li></NuxtLink></button>
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