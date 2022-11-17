<template>
    <div class="container">
        <div class="container_img_text">
            <div class="container_total">
            <img class="container_img" src="@/assets/img_yoga.png">
            <p class="container_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos doloribus nam aut sed suscipit 
            delectus blanditiis labore? Quo eligendi et natus, alias explicabo vitae? Hic suscipit nesciunt unde quas!</p>
        <button>En savoir plus</button>
        </div>
        </div>

        <div class="container_img_text">
            <div class="container_total">
            <img class="container_img" src="@/assets/img_yoga.png">
            <p class="container_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos doloribus nam aut sed suscipit 
            delectus blanditiis labore? Quo eligendi et natus, alias explicabo vitae? Hic suscipit nesciunt unde quas!</p>
            <button>En savoir plus</button>
        </div>
        </div>

        <div class="container_img_text">
            <div class="container_total">
            <img class="container_img" src="@/assets/img_yoga.png">
            <p class="container_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos doloribus nam aut sed suscipit 
            delectus blanditiis labore? Quo eligendi et natus, alias explicabo vitae? Hic suscipit nesciunt unde quas!</p>
            <button>En savoir plus</button>
        </div>
        </div>
    </div>    
</template>

<style scoped>

.container {
    padding-top: 100px;
    padding-left: 75px;
    padding-right:75px;
    height: 435px;
    max-width: 100%;
    background-color: #FAF6F2;
    display: flex;
    align-content: center;
    justify-content: center;
}

.container_total {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
}

button {
    margin-top: 40px;
    width: 139px;
    height:56px;
    border-radius: 25px;
    background-color: #6AFF8B;

}
.container_text {
    padding-left: 15px;
    padding-right:15px;
    width:400px;
    height: 100px;
    text-align: justify;
    background-color: #FAF6F2;
    display: flex;
    align-content: center;
    justify-content: center;
}


</style>
