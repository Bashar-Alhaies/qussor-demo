<template> 
    <b-container class="my-5 py-5">

      <b-row class="row-container mt-3">
        <h1 class="text-center mt-5" > كيف أحجز حفلتي؟</h1>
      </b-row>
      
      <b-row class="row-container section-main my-5 py-5">
        <b-col class="card-wrapper"  md="4">
          <img src="../../assets/phone-icon.png" alt="">
          <custom-card :card="card1"></custom-card>
        </b-col>

        <b-col class="card-wrapper" md="4">
          <img src="../../assets/party-icon.png" alt="">
          <custom-card :card="card2"></custom-card>
        </b-col>

        <b-col class="card-wrapper" md="4">
          <img src="../../assets/support-icon.png" alt="">
          <custom-card :card="card3"></custom-card>
        </b-col>        
      </b-row>
    </b-container>

</template>


<script>
import CustomCard from '../UI/CustomCard'
export default {
  components: {
    CustomCard,
  },

  data() {
    return {
      card1: {
        title: 'حمل تطبيق قصور',
        text: 'اختر التاريخ، عدد الضيوف، المدينة، و تصفح القاعات الموجودة',
        bt: true,
        btTxt: 'حمل تطبيق قصور'
      },
      card2: {
        title: 'احجز القاعة',
        text: 'اختر العرض المناسب لك، بالأسعار الخاصة، و ادفع العربون لحجز القاعة',
        bt: false,
        btTxt: ''
      },
      card3: {
        title: 'خطط حفلتك',
        text: 'بعد دفعك للعربون، يتم تأكيد الحجز بشكل فوري عن طريق القاعة، ويتواصل معك بعدها منسق الحفلات لتحديد اختياراتك من الزينة و الديكور وغيره',
        bt: true,
        btTxt: 'وش تستنا؟ حمل تطبيق قصور هنا'
      },

    }
  },
}
</script>


<style>
  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    ;
  }
  .section-main{
    border-bottom: 1px solid #dddddd;
  }

</style>