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
          <b-button href="/construction" class="bt-custom"  variant="outline">{{ card.btTxt }} </b-button>
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
    color: white  !important;
    border: 1px solid #ffa300 !important;
    background: #ffa300;
  }
</style>
