<template>

    <div>      
      <b-card
        :title="card.title"
        img-src= ""
        :img-alt="card.alt"
        img-top
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ card.text }}
        </b-card-text>
        <div v-if="card.bt">
          <b-button class="bt-custom bt-card"  variant="outline">
            <router-link to="/construction"> {{ card.btTxt }} </router-link>
          </b-button>
        </div>
      </b-card>
    </div>

</template>


<script>
export default {
  props:['card'],
}
</script>

<style >
  .bt-custom{
    border: 1px solid #565656  !important;
  }
  .bt-custom:hover{
    border: 1px solid #ffa300 !important;
    background: #ffa300;
  }

  .bt-custom:hover > a{
    color: white  !important;
    text-decoration: none;
  }

  .bt-card a{
    color: #ffa300;
    text-decoration: none;
  }
  .bt-card a:hover{
    color: white;
    text-decoration: none;
  }
</style>
