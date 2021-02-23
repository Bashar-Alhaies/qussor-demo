<template>
  <b-container fluid>
    <b-row class="row-container ">
      <b-col class="section">
        <b-button variant="light" pill class="bt">
          <router-link to="/construction">
            اضغط هنا للتحميل
          </router-link>
        </b-button>
        <h3 class="text-light m-2 display-6">وتصفح جميع القاعات مع أسعارها</h3>
        <custom-phone></custom-phone>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import CustomPhone from '../UI/CustomPhone'
export default {
  components: {
    CustomPhone,
  }
  
}
</script>


<style >
  .row-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #ffa300;
    padding: 50px 0 20px 0;
  }
  .bt a{
    color: #ffa300;
    text-decoration: none;
  }
  .bt a:hover{
    text-decoration: none;
  }
</style>