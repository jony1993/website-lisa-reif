<template>
  <div class="bg-footer text-center pb-4 pt-4 text-gray-700 mt-16">
    <!--Buttons-->
    <div class="m-auto text-center inline-block mb-2 flex justify-center">
      <span class="mr-3">
            <a href="mailto:trageberatung-lisareif@gmx.de" rel="noopener" aria-label="E-Mail">
              <div class="rounded-full h-12 w-12 flex items-center justify-center border border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <defs/>
                  <path fill="#707070"
                        d="M20 4H4a2 2 0 00-1.99 2L2 18a2.006 2.006 0 002 2h16a2.006 2.006 0 002-2V6a2.006 2.006 0 00-2-2zm-.4 4.25l-7.07 4.42a1.011 1.011 0 01-1.06 0L4.4 8.25a.849.849 0 11.9-1.44L12 11l6.7-4.19a.849.849 0 11.9 1.44z"/>
                </svg>
              </div>
            </a>
      </span>
      <!--Instagram-->
      <span class="mr-3">
           <a href="https://www.instagram.com/trageberatung_lisa_reif/?hl=de" target="_blank" rel="noopener" aria-label="Instagram">
              <div class="rounded-full h-12 w-12 flex items-center justify-center border border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
                  <defs/>
                  <path fill="#707070"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </div>
            </a>
      </span>
      <!--Facebook-->
      <span class="mr-3">
           <a href="https://www.facebook.com/trageberatunglisareif/" target="_blank" rel="noopener" aria-label="Facebook">
              <div class="rounded-full h-12 w-12 flex items-center justify-center border border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     class="svg-inline--fa fa-facebook-f fa-w-10" viewBox="0 0 320 512">
                  <defs/>
                  <path fill="#707070"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </div>
            </a>
      </span>
    </div>

    <!--Bottom-->
    <div>
      <span>
        <nuxt-link class="p-2" to="/impressum">Impressum</nuxt-link>
      </span>
      <span class="ml-2 mr-2">|</span>
      <span>
        <nuxt-link class="p-2" to="/datenschutz">Datenschutzerklärung</nuxt-link>
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
