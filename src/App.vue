<template>
  <div id="app">
    <custom-navbar></custom-navbar>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomNavbar from './components/layout/CustomNavbar'
import CustomFooter from './components/layout/CustomFooter'

export default {
  name: 'App',
  components: {    
    CustomNavbar,
    CustomFooter,
  }
}
</script>

<style>

</style>
