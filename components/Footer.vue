<template>
  <div class="bg-footer text-center pb-4 pt-4 text-gray-700 mt-16">
    <!--Buttons-->
    <div class="m-auto text-center inline-block mb-2">
      <span>
        <a href="mailto:trageberatung-lisareif@gmx.de">
          <div class="rounded-full h-12 w-12 flex items-center justify-center border border-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm-.4,4.25-7.07,4.42a1.011,1.011,0,0,1-1.06,0L4.4,8.25a.849.849,0,1,1,.9-1.44L12,11l6.7-4.19a.849.849,0,1,1,.9,1.44Z" fill="#707070"/></svg>
        </div>
        </a>
      </span>
    </div>

    <!--Bottom-->
    <div>
      <span>
        <nuxt-link to="/impressum">Impressum</nuxt-link>
      </span>
      <span class="ml-2 mr-2">|</span>
      <span>
        <nuxt-link to="/datenschutz">Datenschutzerklärung</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>

</style>
