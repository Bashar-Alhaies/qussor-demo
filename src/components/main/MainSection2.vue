<template> 
    <b-container class="my-3 py-3">

      <b-row class="row-container mt-3">
        <h1 class="text-center mt-5" >
          ليش تحجز من
          <strong id="qussor">قصور</strong>
        </h1>
      </b-row>

      <b-row class="row-container my-5 py-5 section-main">
        <b-col class="card-wrapper" md="4">
          <b-card
            style="max-width: 20rem;"
            class="mb-2 full-card"
          >
            <b-icon-camera class="icon" ></b-icon-camera>
            <b-card-title>{{ card1.title }}</b-card-title>

            <b-card-text>
              {{ card1.text }}
            </b-card-text>

            <div v-if="card1.bt">
              <b-button class="bt-custom" href="/construction" variant="outline">{{ card1.btTxt }} </b-button>
            </div>
          </b-card>
        </b-col>

        <b-col class="card-wrapper" md="4">
          <b-card
            style="max-width: 20rem;"
            class="mb-2 full-card"
          >
          <b-icon-map class="icon"></b-icon-map>
          <b-card-title>{{ card2.title }}</b-card-title>
            <b-card-text>
              {{ card2.text }}
            </b-card-text>

            <div v-if="card2.bt">
              <b-button class="bt-custom" href="/construction"  variant="outline">{{ card2.btTxt }} </b-button>
            </div>
          </b-card>
        </b-col>


        <b-col class="card-wrapper" md="4">
            <b-card
              style="max-width: 20rem;"
              class="mb-2 full-card"
            >
            <b-icon-headset class="icon"></b-icon-headset>

             <b-card-title>{{ card3.title }}</b-card-title>
            <b-card-text>
              {{ card3.text }}
            </b-card-text>

            <div v-if="card3.bt">
              <b-button  class="bt-custom"  href="/construction" variant="outline">{{ card3.btTxt }} </b-button>
            </div>
            </b-card>
        </b-col>
        <b-col class="card-wrapper my-2 py-2 w-100" xl="12">
          <b-card
            id="full"
            style="max-width: 20rem;"
            class="mb-2 w-100 p-5"
          >
            <b-icon-cash class="icon"></b-icon-cash>
            <b-card-title>{{ card4.title }}</b-card-title>
            <b-card-text class="w-100">
              {{ card4.text }}
            </b-card-text>
            <div v-if="card4.bt">
              <b-button class="bt-custom"  href="/construction"  variant="outline">{{ card4.btTxt }} </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>

    </b-container>

</template>


<script>

import {BIconMap, BIconHeadset, BIconCash, BIconCamera } from 'bootstrap-vue'

export default {
  components: {
    BIconMap,
    BIconHeadset,
    BIconCash,
    BIconCamera
  },  
  data() {
    return {
      card1: {
        title: 'الخدمات',
        text: 'يتوفر لدينا جميع الخدمات الأخرى من صبابين و مطاعم و حلويات و كيك و مصورين وأي خدمات تحتاجونها بتخفيض خاص لعملائنا',
        bt: false,
        btTxt: ''
      },
      card2: {
        title: 'أكثر من 100 قاعة بالشرقية والرياض',
        text: 'يتوفر لدينا أكثر من 100 قاعة في الشرقية والرياض ونتميز بإختيار قاعات بجودة عالية وبأسعار متنوعة',
        bt: true,
        btTxt: 'استعرض القاعات'
      },
      card3: {
        title: 'الخدمة',
        text: 'متواجدين طوال أيام الأسبوع لخدمتك في أي وقت عن طريق الإيميل أو الواتساب',
        bt: true,
        btTxt: 'تواصل معانا واتساب من هنا'
      },
      card4: {
        title: 'الأسعار',
        text: 'أسعارنا في قصور مميزة ومخفضة، ستوفر الكثير في تجهيز مناسبتك معنا',
        bt: true,
        btTxt: 'حمل التطبيق وشوف الأسعار'
      }
    }
  },
}
</script>


<style>
  #qussor{
    color: #ffa300;
  }

  #full{
    min-width: 100%  !important;
  }

  .icon{
    width: 100px;
    height: 100px;
    margin: 2px;
    color: #84ceeb;
  }

 @media only screen and (max-width: 768px) {
    .full-card{
      min-width: 100%  !important;
    }
  }
</style>