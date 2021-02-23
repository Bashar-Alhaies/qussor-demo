<template>
  <b-container fluid class=" m-0 p-0">
    <hero-section></hero-section>
    <main-section></main-section>
    <main-section2></main-section2>
  </b-container>
</template>



<script>
  import HeroSection from './HeroSection'
  import MainSection from './MainSection'
  import MainSection2 from './MainSection2'

  export default {
    name: 'LandingPage',
    components: {    
      HeroSection,
      MainSection,
      MainSection2
    }
  }
</script>