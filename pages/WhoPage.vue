<template>
    <div>
        <CommercialBar/>
    <NavBar/>
    <section>
        <h2>Qui suis je ?</h2>
        <div class="container">
            
    <div class="container-left">
        <div>
            
                <img src="@/assets/Rectangle 18.png" alt="office content 2">
        </div>
    </div>
        <div class="container-right">
            <p> <br><br><br><br>
                Dès mon plus jeune âge, j’ai eu besoin de comprendre et de mettre du sens sur le fonctionnement de la vie et des comportements humains. 

                <br><br> Suite à un parcours juridique dans de grandes entreprises, j’ai eu besoin de revenir à mes racines et retrouver du sens à ma vie. Je me suis alors intéressé au développement personnel, à la psychologie et ouvert à la spiritualité. <br><br>

J’ai entrepris un travail sur moi pour comprendre ma structuration, mes blocages et mes enjeux personnels. J’ai ainsi ouvert une porte merveilleuse sur mon monde intérieur pour me réaliser et je continue de cheminer chaque jour en ce sens.
            </p>
            </div>
            
</div>
<br><br>
<br><br>
<div class="container-text">
    <div class="container-title">
        Passionné par le corps humain et son rapport à la psychologie, je me suis également formé à la sexothérapie afin de comprendre comment notre sexualité peut être le reflet de nos enjeux psychiques et permettre aux femmes et aux hommes d’aller connecter leur essence.

Aujourd’hui, je me consacre à ce qui me fait vraiment vibrer, vous accompagner à aller à la rencontre de votre monde intérieur afin que vous puissiez vous réaliser.
    </div>
</div>

<div class="container-perso">
Pour aborder un domaine aussi intime et personnel que la sexualité et la vie de couple, vous avez besoin d’avoir confiance en votre thérapeute.
Le sexothérapeute est soumis au secret professionnel, ce qui signifie que ce qui se dit dans le cabinet reste dans le cabinet. <br><br>
Lors des entretiens, le thérapeute s’abstient de formuler tout jugement quant aux confidences qui lui sont faites et accueille la personne dans son authenticité.
Pour les praticiens de la psychothérapie, le code de déontologie constitue un cadre de travail en énonçant plusieurs principes fondamentaux dans l’exercice de leur pratique.<br><br>
Il se fonde sur 4 piliers:<br>
- respecter et favoriser l’autonomie de la personne qui consulte.<br>
- respecter la confidentialité des propos échangés.<br>
- développer les compétences du praticien, grâce à la formation initiale, en suivant une thérapie personnelle, en étant suivi dans sa pratique professionnelle (supervision) et en se formant en continu.<br>
- travailler en réseau afin d’orienter les personnes qui pourraient avoir besoin d’un suivi médical.​ <br>
</div>


</section>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');


h2 {
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: 700;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: auto;
}


.container-left {
    font-size: 24px;
    width: 600px;
    height: 200px;
}

.container-right{
    margin-left: 50px;
    font-size: 24px;
    text-align: justify;

}

.container-text {
    padding-top: 50px;
    width: 100%;
    height: 500px;
    font-size: 35px;
    border: none;
    background-color: #111827;
    color: white;
    text-align: center;
}

.container-title {
    width: 1000px;
    margin: auto;
}

.container-perso {
    margin: auto;
    width: 1000px;
    height: 1000px;
    padding-top: 100px;
    padding: 100px;
    background-color: white;
    margin-left: 50px;
    font-size: 24px;
    text-align: justify;
}


</style>
