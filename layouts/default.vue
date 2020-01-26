<template>
  <div class="flex flex-col min-h-screen">
    <!--Navbar-->
    <Navbar/>

    <!--Content-->
    <nuxt class="flex-grow"/>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  export default {
    components: {Footer, Navbar},
  }
</script>

<style>
  html{
    background-color: #F3F3F5;
  }
</style>
