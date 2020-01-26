<template>
  <nav class="bg-white shadow font-body text-gray-700" role="navigation">
    <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <a href="#" rel="home">
          <nuxt-link to="/">
            <img class="h-20 sm:h-32 md:h-32 lg:h-32 xl:h-32" src="../assets/img/logo.png">
          </nuxt-link>
        </a>
      </div>
      <div class="ml-auto md:hidden" @click="open= !open" >
        <button class="flex items-center px-3 py-2 rounded" type="button">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div :class="open ? 'inline' : 'hidden'" class="w-full md:w-auto md:flex-grow md:flex md:items-center">
        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/">Startseite</nuxt-link>
          </li>
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/warum-tragen">Warum tragen?</nuxt-link>
          </li>
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/ablauf">Ablauf</nuxt-link>
          </li>
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/sortiment">Sortiment</nuxt-link>
          </li>
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/preise">Preise</nuxt-link>
          </li>
          <li>
            <nuxt-link class="block px-4 py-1 md:p-2 lg:px-4 hover:text-primary" to="/ueber-mich">Über mich</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
	export default {
		name: 'Navbar',
    data() {
      return {
        open: false
      }
    },
    watch:{
      $route (to, from){
        this.open = false;
      }
    }
  }
</script>

<style scoped>

  .nuxt-link-exact-active{
    @apply text-primary;
  }

</style>
