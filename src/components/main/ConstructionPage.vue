<template>
  <b-container fluid id="construction" >
    <b-row>
      <b-col class="card-wrapper">
        <p class="lead text-center">هذا الموقع تحت الانشاء وهو مجرد نموذج مبدئي</p>
        <b-button
          id="bt-construction"
          variant="outline"
          href="/"
        >الصفحة الرئيسية</b-button>
      </b-col>
    </b-row>
  </b-container>

</template>


<style >
  #construction{
    color: white;
    background: #ffa300;
    text-align: center;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #construction p {
    font-size: 72px;
  }

  #bt-construction{
    font-size: 20px;
    background: white !important;
    border: 1px solid white !important;
  }

  #bt-construction:hover{
    background: #ffa300  !important;
    color: white !important;
    border: 1px solid white !important;
  }

</style>