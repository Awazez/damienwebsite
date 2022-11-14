<template>
    <div class="container">
        <div class="container_address">
            <img class="img_address" src="@/assets/img_location.png">
            <p>3 Rue Claude Chappe, 14000 Caen</p>
        </div>

        <div class="container_phone">
            <img class="img_phone" src="@/assets/img_call.png">
            <p>06 63 83 99 37</p>
        </div>

    </div>
    
  </template>
  
  <style scoped>
  
  .container {
    height: 44px;
    max-width: 100%;
    background-color: #FAF6F2;
    display: flex;

  }
  .container_address {
    margin-left:50px;
    height: 44px;
    max-width: 100%;
    background-color: #FAF6F2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img_address {
    height: 19px;
    width: 19px;
  }


  .container_phone {
    margin-left: 50px;
    height: 44px;
    max-width: 100%;
    background-color: #FAF6F2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img_phone {
    height: 20px;
    width: 20px;
  }

  


  </style>